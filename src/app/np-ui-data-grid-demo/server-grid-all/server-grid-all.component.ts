import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DataSource, NpUiDataGridComponent, DataTypes, SortDirections, State, FilterTypes, LoadOptions, Column } from 'projects/np-ui-lib/src/public-api';
import { DataService } from '../data.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-server-grid-all',
  templateUrl: './server-grid-all.component.html'
})
export class ServerGridAllComponent implements OnInit {

  gridColumns: any[];
  gridDataSource: BehaviorSubject<DataSource>;

  _toggleColumn: boolean = true;
  showFilters: boolean = true;

  @ViewChild("actionButtonsTemplate", { static: true }) actionButtonsTemplate: TemplateRef<any>;
  @ViewChild("birthDateColumnTemplate", { static: true }) birthDateColumnTemplate: TemplateRef<any>;
  @ViewChild("summaryTemplate", { static: true }) summaryTemplate: TemplateRef<any>;

  @ViewChild("serverSideGrid", { static: true }) serverSideGrid: NpUiDataGridComponent;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.gridColumns = [
      new Column({ dataField: "Id", visible: true, caption: "Id", dataType: DataTypes.Number, sortEnable: true, filterEnable: true, onCellClick: this.cellClicked }),
      new Column({ dataField: "FirstName", visible: true, caption: "First Name", dataType: DataTypes.String, sortEnable: true, filterEnable: true }),
      new Column({ dataField: "LastName", visible: true, caption: "Last Name", dataType: DataTypes.String }),
      new Column({ dataField: "BirthDate", visible: true, caption: "Birth Date", dataType: DataTypes.Date, sortEnable: true, filterEnable: true, cellTemplate: this.birthDateColumnTemplate }),
      new Column({ dataField: "Age", visible: true, dataType: DataTypes.Number, sortEnable: true, filterEnable: true, styleClass: "color-red", rightAlignText: true }),
      new Column({ dataField: "Active", visible: true, caption: "Is Active?", dataType: DataTypes.Boolean, filterEnable: true, }),
      new Column({ visible: true, cellTemplate: this.actionButtonsTemplate })];
    this.gridDataSource = new BehaviorSubject(null);

    this.setStateForServerSideGrid();
  }

  onLoadData(options: LoadOptions) {
    this.dataService.getDataUsingLoadOptions(options).subscribe((data: any) => {
      var result = new DataSource(data.data, data.total, { totalCount: data.total }, options.isAllPages);
      this.gridDataSource.next(result);
    });
  }

  cellClicked(event: any, column: any, row: any) {
    alert("column " + column.dataField + " clicked. Value is " + row[column.dataField]);
  }

  onActionClick(rowData: any, event: any, $event) {
    $event.stopPropagation();
    if (event == "Edit") {
      alert('Edit button click for row: ' + rowData.Id);
    }
    if (event == "Delete") {
      alert('Delete button click for row: ' + rowData.Id);
    }
  }

  getSelectedRowKeys() {
    var keys = this.serverSideGrid.getSelectedRowKeys();
    alert(keys);
  }

  toggleFirstColumn() {
    this._toggleColumn = !this._toggleColumn;
    if (this._toggleColumn) {
      this.serverSideGrid.showColumnByIndex(0);
    } else {
      this.serverSideGrid.hideColumnByIndex(0);
    }
  }

  changeColumns() {
    var columns = this.serverSideGrid.getColumns();
    columns[0].sortDirection = SortDirections.Descending;
    columns[1].filterOperator = FilterTypes.StartsWith;
    columns[1].filterValue = "Nilav";
    columns[2].visible = false;
    this.serverSideGrid.setColumns(columns);    
  }

  setStateForServerSideGrid() {
    var columns = [
      new Column({ dataField: "Id", visible: true, width: 100, caption: "Id", dataType: DataTypes.Number, sortEnable: true, filterEnable: true, onCellClick: this.cellClicked }),
      new Column({ dataField: "FirstName", visible: true, width: 150, caption: "First Name", dataType: DataTypes.String, sortEnable: true, filterEnable: true, sortDirection: SortDirections.Descending }),
      new Column({ dataField: "LastName", visible: true, width: 150, caption: "Last Name", dataType: DataTypes.String }),
      new Column({ dataField: "BirthDate", visible: true, width: 150, caption: "Birth Date", dataType: DataTypes.Date, filterEnable: true, cellTemplate: this.birthDateColumnTemplate }),
      new Column({ dataField: "Age", visible: true, width: 100, dataType: DataTypes.Number, sortEnable: true, filterEnable: true, styleClass: "color-red", filterValue: "50", filterOperator: FilterTypes.GreaterThan }),
      new Column({ dataField: "Active", visible: true, width: 150, caption: "Is Active?", dataType: DataTypes.Boolean, filterEnable: true, }),
      new Column({ visible: false, cellTemplate: this.actionButtonsTemplate })];
    var state = new State("Age more than 50", columns);
    this.serverSideGrid.setAllState([state]);
  }

  onInit() {
    console.log("grid initializing at" + new Date().toTimeString());
  }

  onAfterInit() {
    console.log("grid initialized at" + new Date().toTimeString());
  }

  goToPage(num) {
    this.serverSideGrid.goToPage(num);
  }

  clearFilters() {
    this.serverSideGrid.removeAllFilters();
  }

  clearSortings() {
    this.serverSideGrid.removeAllSortings();
  }

  reset() {
    this.serverSideGrid.reset();
  }

  updateFirstName() {
    var keys = this.serverSideGrid.getSelectedRowKeys();
    if (keys && keys.length > 0) {
      this.dataService.updateFirstName(keys).subscribe((data: any) => { });
    }
  }

  refresh() {
    this.serverSideGrid.refresh();
  }
}
