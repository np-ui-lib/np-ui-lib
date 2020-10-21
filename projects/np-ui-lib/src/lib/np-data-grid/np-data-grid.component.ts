import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output, TemplateRef } from '@angular/core';
import { ViewEncapsulation, ViewChild, ViewContainerRef, ElementRef, AfterContentInit, AfterViewInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { TemplatePortal } from '@angular/cdk/portal';
import { OverlayRef, Overlay, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { Column } from './models/column.model';
import { Filters, DataTypes, FilterTypes, SortDirections } from './models/constants';
import { DataSource } from './models/data-source.model';
import { LoadOptions } from './models/load-options.model';
import { State } from './models/state.model';
import { NpFileService } from './services/np-file.service';
import { NpFilterService } from './services/np-filter.service';
import { NpODataService } from './services/np-odata.service';
import { NpGridUtilityService } from './services/np-grid-utility.service';
import { NpDialogComponent } from '../np-dialog/np-dialog.component';
import { TopBottomOverlayPositions } from '../np-utility/np-constants';
import { NpPaginatorComponent } from '../np-paginator/np-paginator.component';
import { NpModalService } from '../np-modal/np-modal.service';
import { NpModalConfig } from '../np-modal/np-modal.config';

@Component({
  selector: 'np-data-grid',
  templateUrl: 'np-data-grid.component.html',
  styleUrls: ['np-data-grid.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NpDataGridComponent implements OnInit, AfterContentInit, AfterViewInit, OnDestroy {
  static controlCount = 1;

  @Input() inputId = `np-data-grid_${NpDataGridComponent.controlCount++}`;
  @Input() columns: Column[];
  @Input() dataSource: BehaviorSubject<DataSource>;
  @Input() height: number;
  @Input() width: number;
  @Input() multiColumnSortEnable: boolean;
  @Input() masterDetailTemplate: TemplateRef<any>;
  @Input() singleRowExpand = false;
  @Input() expandRowOnClick = false;
  @Input() singleRowSelectEnable = false;
  @Input() multiRowSelectEnable = false;
  @Input() selectRowOnClick = false;
  @Input() key: string;
  @Input() showColumnChooser: boolean;
  @Input() title = '';
  @Input() enableStateStoring: boolean;
  @Input() isReadOnlyStates = false;
  @Input() noDataMessage = 'No Data Found.';
  @Input() showFilters = true;
  @Input() dateFormat = 'dd/MM/yyyy';
  @Input() showSummary = false;
  @Input() summaryTemplate: TemplateRef<any>;
  @Input() allowColumnResize = false;
  @Input() allowColumnReorder = false;
  @Input() isServerOperations = false;
  @Input() isODataOperations = false;
  @Input() allowExport = false;
  @Input() isServerExport = false;
  @Input() showToolBar = false;
  @Input() pageSize = 10;
  @Input() styleClass: string;

  @Output() onSelect: EventEmitter<any> = new EventEmitter();
  @Output() onDeselect: EventEmitter<any> = new EventEmitter();
  @Output() onRowClick: EventEmitter<any> = new EventEmitter();
  @Output() onStatesUpdate: EventEmitter<any> = new EventEmitter();
  @Output() onInit: EventEmitter<any> = new EventEmitter();
  @Output() onAfterInit: EventEmitter<any> = new EventEmitter();
  @Output() onLoadData: EventEmitter<LoadOptions> = new EventEmitter();
  @Output() onServerExport: EventEmitter<LoadOptions> = new EventEmitter();

  @ViewChild('columnChooserTemplate') columnChooserTemplate: TemplateRef<any>;
  @ViewChild('gridPaginator') gridPaginator: NpPaginatorComponent;

  columnsClone: Column[];
  dataSourceClone: DataSource;
  subscription: Subscription;
  currentViewData: any[];
  totalRow = 0;
  filtersList: any[];
  sortColumnList: any[];
  filterColumnList: any[];
  isFilterAvailable: boolean;
  enableMasterChild = false;
  openRowKeys: any[] = [];
  selectedRowKeys: any[] = [];
  isAllSelected: boolean;
  keyColumnName: string;
  dataTypes = DataTypes;
  sortDirections = SortDirections;
  isOpenColumnChooser = false;
  visibleColumns: any[] = [];
  stateList: State[];
  currentStateName: string;
  summaryData: any;
  searchColumnsKeyword: string;
  nameAlreadyExistError = false;
  isDataSourceInit = false;

  private columnChooserTemplatePortal: TemplatePortal<any>;
  private columnChooserOverlayRef: OverlayRef;

  constructor(
    private filterService: NpFilterService,
    private utilityService: NpGridUtilityService,
    private oDataService: NpODataService,
    private fileService: NpFileService,
    public overlay: Overlay,
    private viewContainerRef: ViewContainerRef,
    private overlayPositionBuilder: OverlayPositionBuilder,
    private modalService: NpModalService,
    private elementRef: ElementRef) {
    this.sortColumnList = [];
    this.filtersList = Filters;
    this.filterColumnList = [];
    this.stateList = [];
    this.currentStateName = '';
    this.isFilterAvailable = false;
    this.showFilters = true;
  }

  ngOnInit() {
    this.onInit.emit();
  }

  ngAfterContentInit() {
    if (this.masterDetailTemplate) {
      this.enableMasterChild = true;
    }
    this._setColumns();
    if (this.key) {
      this.keyColumnName = this.key;
    } else {
      this.keyColumnName = this.columnsClone[0].dataField;
    }
    this.subscribeDataSource();
  }

  ngAfterViewInit() {
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef.nativeElement.querySelector('#btn-column-chooser'))
      .withPositions(TopBottomOverlayPositions);
    this.columnChooserOverlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
      backdropClass: 'np-grid-backdrop',
      scrollStrategy: this.overlay.scrollStrategies.reposition()
    });
    this.columnChooserTemplatePortal = new TemplatePortal(
      this.columnChooserTemplate,
      this.viewContainerRef
    );
    this.columnChooserOverlayRef.backdropClick().subscribe(() => this._closeColumnChooser());
    this.onAfterInit.emit();
  }

  private subscribeDataSource() {
    this.subscription = this.dataSource.subscribe((ds: DataSource) => {
      if (ds === undefined || ds === null) {
        return;
      }
      if (this.isServerOperations) {
        // to export to csv, this change has all data
        if (ds.isAllPages) {
          this.fileService.downloadCSVFile(ds.data, this.visibleColumns, this.dateFormat);
          return;
        }
        this.currentViewData = ds.data;
        this.summaryData = ds.summary;
        this.totalRow = ds.total;
        if (this.isAllSelected) {
          for (const element of this.currentViewData) {
            if (this.selectedRowKeys.indexOf(element[this.keyColumnName]) === -1) {
              this.selectedRowKeys.push(element[this.keyColumnName]);
            }
          }
        }
      }
      else {
        this.dataSourceClone = new DataSource(ds.data, ds.data.length, ds.summary);
        this.totalRow = ds.data.length;
        this.summaryData = ds.summary;
        this.isDataSourceInit = true;
        this.gridPaginator.refresh();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onPageChange(options: any) {
    if (this.isServerOperations) {
      const loadOpt = new LoadOptions();
      if (this.isODataOperations) {
        const top = options.pageSize;
        const skip = (options.currentPage - 1) * options.pageSize;
        loadOpt.odataQuery = this.oDataService.buildQuery(top, skip, this.sortColumnList, this.filterColumnList);
        loadOpt.pageNumber = 0;
        loadOpt.pageSize = 0;
        loadOpt.sortColumns = [];
        loadOpt.filterColumns = [];
        loadOpt.isAllPages = false;
      } else {
        loadOpt.pageNumber = options.currentPage;
        loadOpt.pageSize = options.pageSize;
        loadOpt.sortColumns = this.sortColumnList;
        loadOpt.filterColumns = this.filterColumnList;
        loadOpt.isAllPages = false;
        loadOpt.odataQuery = '';
      }
      this.onLoadData.emit(loadOpt);
    } else {
      if (!this.isDataSourceInit) {
        return;
      }
      const start = (options.currentPage - 1) * options.pageSize;
      const end = Math.min(start + options.pageSize - 1, this.totalRow - 1);
      this.currentViewData = this.dataSourceClone.data.slice(start, end + 1);
    }
  }

  _setColumns() {
    const result = [];
    for (const element of this.columns) {
      result.push(new Column(element));
    }
    this.columnsClone = result;
    this._setVisibleColumns();
  }

  _setVisibleColumns() {
    this.visibleColumns = this.utilityService.custFilter(this.columnsClone,
      (element: Column) => { if (element.visible === true) { return element; } });
    this.isFilterAvailable = this.utilityService.custFilter(this.columnsClone,
      (element) => { if (element.filterEnable === true && element.visible === true) { return element; } }).length > 0;
  }

  _onCellClick($event: any, column: Column, data: any) {
    if (column.onCellClick !== undefined) {
      column.onCellClick($event, column, data);
    }
  }

  // on first click ascending, on second click descending and on third click remove sorting
  _onSort(column: Column) {
    if (!column.sortEnable) {
      return;
    }
    // if sort direction is descending then remove sorting from column
    if (column.sortDirection === SortDirections.Descending) {
      this._removeSortingFromColumn(column);
      return;
    }
    const sortOrder = column.sortDirection === SortDirections.Ascending ? SortDirections.Descending : SortDirections.Ascending;
    if (!this.multiColumnSortEnable) {
      this._removeAllSorting();
    }
    column.sortDirection = sortOrder;
    if (this.multiColumnSortEnable) {
      const list = [];
      for (const element of this.sortColumnList) {
        if (element.dataField !== column.dataField) {
          list.push(element);
        }
      }
      this.sortColumnList = list;
    }
    this.sortColumnList.push({ dataField: column.dataField, sortDirection: column.sortDirection });
    this.selectedRowKeys = [];
    this.isAllSelected = false;
    this.openRowKeys = [];
    if (!this.isServerOperations) {
      this._sortDataSource();
    }
    this.gridPaginator.loadPage(1);
  }

  _sortDataSource() {
    let data = this.dataSourceClone.data;
    for (const element of this.sortColumnList) {
      data = this.utilityService.custSort(data, element.dataField, element.sortDirection);
    }
    this.dataSourceClone.data = data;
  }

  _removeAllSorting() {
    for (const element of this.columnsClone) {
      element.sortDirection = null;
    }
    this.sortColumnList = [];
  }

  _removeSortingFromColumn(column: Column) {
    column.sortDirection = null;
    const list = [];
    for (const element of this.sortColumnList) {
      if (element.dataField !== column.dataField) {
        list.push(element);
      }
    }
    this.sortColumnList = list;

    if (!this.isServerOperations) {
      this._resetDataSource();
      this._filterDataSource();
      for (const element of this.sortColumnList) {
        this.dataSourceClone.data = this.utilityService.custSort(this.dataSourceClone.data, element.dataField, element.sortDirection);
      }
    }
    this.gridPaginator.loadPage(1);
  }

  _resetDataSource() {
    this.dataSourceClone.data = this.dataSource.getValue().data;
    this.totalRow = this.dataSourceClone.data.length;
  }

  _onFilter(column: Column, isForceFilter: boolean = false) {
    if (column.filterOperator && column.filterOperator === FilterTypes.Reset) {
      column.filterOperator = undefined;
      column.filterValue = undefined;
      isForceFilter = true;
    }
    if (!isForceFilter && (column.filterValue === undefined || column.filterValue === null || column.filterValue.length === 0
      || column.filterOperator === undefined || column.filterOperator === null)) {
      return;
    }
    const currentFilterList = [];
    for (const element of this.columnsClone) {
      if (element.filterOperator === undefined || element.filterOperator === null
        || element.filterValue === undefined || element.filterValue === null || element.filterValue.toString().length === 0) {
        continue;
      }
      else {
        currentFilterList.push({
          dataField: element.dataField, filterOperator: element.filterOperator,
          filterValue: element.filterValue, dataType: element.dataType
        });
      }
    }
    this.filterColumnList = currentFilterList;
    this.selectedRowKeys = [];
    this.isAllSelected = false;
    this.openRowKeys = [];
    if (!this.isServerOperations) {
      this._filterDataSource();
      this._sortDataSource();
    }
    this.gridPaginator.loadPage(1);
  }

  _filterDataSource() {
    const data = this.filterService.filterData(this.filterColumnList, this.dataSource.getValue().data);
    this.dataSourceClone.data = data;
    this.totalRow = data.length;
  }

  _removeAllFilters() {
    for (const element of this.columnsClone) {
      element.filterOperator = null;
      element.filterValue = null;
    }
    this.filterColumnList = [];
  }

  _onClickExpandRow(data: any) {
    const keyValue = data[this.keyColumnName];
    if (this.expandRowOnClick === true) {
      return;
    }
    this._expandRow(keyValue);
  }

  _expandRow(keyValue: any) {
    if (this.singleRowExpand === true) {
      this.openRowKeys = [keyValue];
    }
    else {
      this.openRowKeys.push(keyValue);
    }
  }

  _onClickCollapseRow(data: any) {
    const keyValue = data[this.keyColumnName];
    if (this.expandRowOnClick === true) {
      return;
    }
    this._collapseRow(keyValue);
  }

  _collapseRow(keyValue: any) {
    const idx = this.openRowKeys.indexOf(keyValue);
    this.openRowKeys.splice(idx, 1);
  }

  _onClickSelectAll(event: any) {
    if (this.singleRowSelectEnable) {
      return;
    }
    if (event.target.checked) {
      this._selectAll();
    } else {
      this._deSelectAll();
    }
  }

  _deSelectAll() {
    const selectedRows = this.selectedRowKeys;
    this.selectedRowKeys = [];
    this.isAllSelected = false;
    if (this.onDeselect !== undefined) {
      const event = { data: selectedRows };
      this.onDeselect.emit(event);
    }
  }

  _selectAll() {
    const key = this.keyColumnName;
    const selectedKeys = [];
    if (this.isServerOperations) {
      for (const element of this.currentViewData) {
        selectedKeys.push(element[key]);
      }
    } else {
      for (const element of this.dataSourceClone.data) {
        selectedKeys.push(element[key]);
      }
    }
    this.selectedRowKeys = selectedKeys;
    this.isAllSelected = true;
    if (this.onSelect !== undefined) {
      const event = { data: selectedKeys };
      this.onSelect.emit(event);
    }
  }

  _onClickSelectRow(data: any, event: any) {
    const keyValue = data[this.keyColumnName];
    if (this.selectRowOnClick === true) {
      return;
    }
    this._selectRow(keyValue, event);
  }

  _selectRow(keyValue: any, event: any) {
    if (this.singleRowSelectEnable) {
      this.selectedRowKeys = [];
      if (event.target.checked) {
        this.selectedRowKeys.push(keyValue);
      }
    } else {
      if (event.target.checked) {
        this.selectedRowKeys.push(keyValue);
      } else {
        const idx = this.selectedRowKeys.indexOf(keyValue);
        this.selectedRowKeys.splice(idx, 1);
      }
    }
    if (event.target.checked) {
      if (this.onSelect !== undefined) {
        event.data = keyValue;
        this.onSelect.emit(event);
      }
    } else {
      this.isAllSelected = false;
      if (this.onDeselect !== undefined) {
        event.data = keyValue;
        this.onDeselect.emit(event);
      }
    }
  }

  _isSelected(data: any) {
    const keyValue = data[this.keyColumnName];
    return this.selectedRowKeys.indexOf(keyValue) > -1;
  }

  _isOpenChild(data: any) {
    const keyValue = data[this.keyColumnName];
    if (!this.enableMasterChild) {
      return false;
    }
    return this.openRowKeys.indexOf(keyValue) > -1;
  }

  _rowClick(event: any, data: any) {
    if (this.masterDetailTemplate && this.expandRowOnClick) {
      if (this._isOpenChild(data)) {
        this._collapseRow(data[this.keyColumnName]);
      } else {
        this._expandRow(data[this.keyColumnName]);
      }
    }
    if ((this.singleRowSelectEnable || this.multiRowSelectEnable) && this.selectRowOnClick) {
      if (this._isSelected(data[this.keyColumnName])) {
        this._selectRow(data[this.keyColumnName], { target: { checked: false } });
      } else {
        this._selectRow(data[this.keyColumnName], { target: { checked: true } });
      }
    }
    if (this.onRowClick) {
      event.data = data;
      this.onRowClick.emit(event);
    }
  }

  _onColumnChoosing(col: Column) {
    col.visible = !col.visible;
    this._setVisibleColumns();
  }

  _openColumnChooser() {
    if (!this.columnChooserOverlayRef.hasAttached()) {
      this.columnChooserOverlayRef.attach(this.columnChooserTemplatePortal);
    }
  }

  _closeColumnChooser() {
    this.columnChooserOverlayRef.detach();
  }

  _dropColumn(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columnsClone, event.previousIndex, event.currentIndex);
    this._setVisibleColumns();
  }

  /**
   * get selected row keys array
   */
  getSelectedRowKeys() {
    return this.selectedRowKeys;
  }

  /**
   * reset all
   */
  reset() {
    this._setColumns();
    this.filterColumnList = [];
    this.sortColumnList = [];
    this.selectedRowKeys = [];
    this.openRowKeys = [];
    this.isAllSelected = false;
    this.isOpenColumnChooser = false;
    this.currentStateName = '';
    this._closeColumnChooser();
    if (this.isServerOperations) {
      this.gridPaginator.loadPage(1);
    }
    else {
      this._resetDataSource();
      this.gridPaginator.loadPage(1);
    }
  }

  /**
   * select all rows
   */
  selectAll() {
    this._selectAll();
  }

  /**
   * de select all rows
   */
  deSelectAll() {
    this._deSelectAll();
  }

  /**
   * hide column by index
   * @param idx index number of column
   */
  hideColumnByIndex(idx: number) {
    this.columnsClone[idx].visible = false;
    this._setVisibleColumns();
  }

  /**
   * show column by index
   * @param idx index number of column
   */
  showColumnByIndex(idx: number) {
    this.columnsClone[idx].visible = true;
    this._setVisibleColumns();
  }

  /**
   * hide column by data field
   * @param dataField dataField value of column
   */
  hideColumnByDataField(dataField: string) {
    for (const element of this.columnsClone) {
      if (element.dataField === dataField) {
        element.visible = false;
      }
    }
    this._setVisibleColumns();
  }

  /**
   * show column by data field
   * @param dataField dataField value of column
   */
  showColumnByDataField(dataField: string) {
    for (const element of this.columnsClone) {
      if (element.dataField === dataField) {
        element.visible = true;
      }
    }
    this._setVisibleColumns();
  }

  /**
   * go to page
   * @param pageNumber page number
   */
  goToPage(pageNumber: number) {
    this.gridPaginator.loadPage(pageNumber);
  }

  /**
   * sort by column
   * @param dataField dataField value of column
   * @param direction desc | asc
   */
  sortByColumn(dataField: string, direction: SortDirections) {
    const sortColumn = this.utilityService.custFind(this.columnsClone, (element: Column) => {
      return element.dataField === dataField;
    });
    sortColumn.sortDirection = direction;
    this._onSort(sortColumn);
  }

  /**
   * filter by column
   * @param dataField dataField value of column
   * @param keyword search keyword
   * @param type FilterTypes
   */
  filterByColumn(dataField: string, keyword: string, type: FilterTypes) {
    const filterColumn = this.utilityService.custFind(this.columnsClone, (element: Column) => {
      return element.dataField === dataField;
    });
    filterColumn.filterString = keyword;
    filterColumn.filterType = type;
    this._onFilter(filterColumn, true);
  }

  /**
   * get total row count
   */
  getTotalRows() {
    return this.totalRow;
  }

  /**
   * get current page number
   */
  getCurrentPageNumber() {
    return this.gridPaginator.currentPage;
  }

  /**
   * get page size
   */
  getPageSize() {
    return this.pageSize;
  }

  /**
   * get total pages number
   */
  getTotalPages() {
    return this.gridPaginator.totalPages;
  }

  /**
   * close all child
   */
  closeAllChild() {
    this.openRowKeys = [];
  }

  /**
   * get filter column list
   */
  getFilterColumns() {
    return this.filterColumnList;
  }

  /**
   * get sort column list
   */
  getSortColumns() {
    return this.sortColumnList;
  }

  /**
   * get column list
   */
  getColumns() {
    return this._cloneColumns(this.columnsClone);
  }

  /**
   * set column list
   */
  setColumns(columns: Column[]) {
    this.columnsClone = this._cloneColumns(columns);
    const currentFilterColumnList = [];
    for (const element of this.columnsClone) {
      if (element.filterOperator && element.filterValue && element.filterValue.toString().length > 0) {
        currentFilterColumnList.push({
          dataField: element.dataField, filterOperator: element.filterOperator,
          filterValue: element.filterValue, dataType: element.dataType
        });
      }
    }
    this.filterColumnList = currentFilterColumnList;
    const currentSortColumnList = [];
    for (const element of this.columnsClone) {
      if (element.sortEnable && element.sortDirection) {
        currentSortColumnList.push({ dataField: element.dataField, sortDirection: element.sortDirection });
      }
    }
    this.sortColumnList = currentSortColumnList;
    if (!this.isServerOperations) {
      this._filterDataSource();
      this._sortDataSource();
    }
    this.gridPaginator.loadPage(1);
    this._setVisibleColumns();
    this.selectedRowKeys = [];
    this.openRowKeys = [];
  }

  _saveState() {
    const columns = this._cloneColumns(this.columnsClone);
    const currentStateName = this.currentStateName;
    let editedState;
    for (const element of this.stateList) {
      if (element.name === currentStateName) {
        element.columns = columns;
        editedState = element;
        this.modalService.open(NpDialogComponent, null, { type: 'alert', message: 'Saved successfully.' });
      }
    }
    if (this.onStatesUpdate) {
      this.onStatesUpdate.emit({ action: 'edit', state: editedState });
    }
  }

  _openDialogAddNewState() {
    const promptAddNewState = this.modalService.open(NpDialogComponent,
      null,
      { type: 'prompt', message: 'Add New State' });
    promptAddNewState.onClose.subscribe((data) => {
      this._addState(data);
    });
  }

  _addState(stateName: string) {
    if (!stateName || stateName.trim().length === 0) {
      return;
    }
    const name = stateName.trim();
    const state = this.stateList.filter((element: State) => { if (element.name === name) { return element; } });
    if (state && state.length > 0) {
      this.nameAlreadyExistError = true;
      return;
    } else {
      this.nameAlreadyExistError = false;
    }
    const columns = this._cloneColumns(this.columnsClone);
    const newState = new State(name, columns);
    this.stateList.push(newState);
    this.currentStateName = name;
    if (this.onStatesUpdate) {
      this.onStatesUpdate.emit({ action: 'add', state: newState });
    }
  }

  _deleteState() {
    const currentStateName = this.currentStateName;
    const list = [];
    let deletedState;
    for (const element of this.stateList) {
      if (element.name !== currentStateName) {
        list.push(element);
      } else {
        deletedState = element;
      }
    }
    this.stateList = list;

    if (this.stateList.length > 0) {
      this.currentStateName = this.stateList[0].name;
    } else {
      this.currentStateName = '';
    }
    this._loadState();
    if (this.onStatesUpdate) {
      this.onStatesUpdate.emit({ action: 'delete', state: deletedState });
    }
    this.modalService.open(NpDialogComponent, null, { type: 'alert', message: 'Deleted successfully.' });
  }

  _loadState() {
    const currentStateName = this.currentStateName;
    if (currentStateName === '') {
      this.reset();
      return;
    }
    this.loadStateByName(currentStateName);
  }

  loadStateByName(stateName: string) {
    const state = this.stateList.filter((element: State) => {
      if (element.name === stateName) { return element; }
    });
    if (state && state.length > 0) {
      this.currentStateName = stateName;
      this.setColumns(state[0].columns);
    } else {
      throw new Error('Datagrid state not found');
    }
  }

  private _cloneColumns(cols: Column[]) {
    const result = [];
    for (const element of cols) {
      result.push(new Column(element));
    }
    return result;
  }

  /**
   * get state list
   */
  getAllState() {
    return this.stateList;
  }

  /**
   * set state list
   * @param states state array
   */
  setAllState(states: State[]) {
    this.stateList = states;
  }

  /**
   * refresh current view data only
   */
  refresh() {
    this._onRefresh();
  }

  _onRefresh() {
    this.gridPaginator.refresh();
  }

  _onResetColumns() {
    this.reset();
  }

  _resizeColumn($event: any, column: Column) {
    let currentWidth = column.width;
    if (isNaN(currentWidth)) {
      currentWidth = $event.source.element.nativeElement.parentElement.offsetWidth;
    }
    column.width = (isNaN(currentWidth) ? 0 : currentWidth) + $event.distance.x;
    $event.source.reset();
  }

  _exportToFile() {
    const loadOpt = new LoadOptions();
    if (this.isServerExport) {
      if (this.isODataOperations) {
        loadOpt.odataQuery = this.oDataService.buildQuery(0, 0, this.sortColumnList, this.filterColumnList, 'allpages');
        loadOpt.isAllPages = true;
      } else {
        loadOpt.pageNumber = 1;
        loadOpt.pageSize = this.totalRow;
        loadOpt.sortColumns = this.sortColumnList;
        loadOpt.filterColumns = this.filterColumnList;
        loadOpt.isAllPages = true;
      }
      this.onServerExport.emit(loadOpt);
      return;
    }
    if (this.isServerOperations) {
      if (this.isODataOperations) {
        loadOpt.odataQuery = this.oDataService.buildQuery(0, 0, this.sortColumnList, this.filterColumnList, 'allpages');
        loadOpt.isAllPages = true;
      } else {
        loadOpt.pageNumber = 1;
        loadOpt.pageSize = this.totalRow;
        loadOpt.sortColumns = this.sortColumnList;
        loadOpt.filterColumns = this.filterColumnList;
        loadOpt.isAllPages = true;
      }
      this.onLoadData.emit(loadOpt);
    } else {
      this.fileService.downloadCSVFile(this.dataSourceClone.data, this.visibleColumns, this.dateFormat);
    }
  }

  /**
   * Remove all sorting
   */
  removeAllSorting() {
    this._removeAllSorting();
    this.gridPaginator.loadPage(1);
  }

  /**
   * Remove all filters
   */
  removeAllFilters() {
    this._removeAllFilters();
    this.gridPaginator.loadPage(1);
  }

  _showAllColumns() {
    this.columnsClone.forEach((element) => {
      element.visible = true;
    });
    this._setVisibleColumns();
  }

  _clearColumnSearch() {
    this.searchColumnsKeyword = null;
  }

  _allowRowSelection() {
    return this.singleRowSelectEnable || this.multiRowSelectEnable;
  }

  _getColSpanForChildRow() {
    return this.visibleColumns.length + (this._allowRowSelection() ? 1 : 0) + 1;
  }

  _trackBy(index: number): number {
    return index;
  }
}
