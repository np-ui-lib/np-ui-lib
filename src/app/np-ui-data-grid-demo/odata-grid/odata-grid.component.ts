import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { DataSource, DataTypes, LoadOptions, Column, NpUiDataGridComponent, State, SortDirections, FilterTypes } from 'np-ui-lib';
import { DataService } from '../data.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-odata-grid',
  templateUrl: './odata-grid.component.html'
})
export class OdataGridComponent implements OnInit {

  gridColumns: any[];
  gridDataSource: BehaviorSubject<DataSource>;

  @ViewChild("birthDateColumnTemplate", { static: true }) birthDateColumnTemplate: TemplateRef<any>;
  @ViewChild("summaryTemplate", { static: true }) summaryTemplate: TemplateRef<any>;

  @ViewChild("serverSideGrid", { static: true }) serverSideGrid: NpUiDataGridComponent;

  odataQuery: string = "";

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.gridColumns = [
      new Column({ dataField: "Id", visible: true, caption: "Id", dataType: DataTypes.Number, sortEnable: true, filterEnable: true }),
      new Column({ dataField: "FirstName", visible: true, caption: "First Name", dataType: DataTypes.String, sortEnable: true, filterEnable: true }),
      new Column({ dataField: "LastName", visible: true, caption: "Last Name", dataType: DataTypes.String }),
      new Column({ dataField: "BirthDate", visible: true, caption: "Birth Date", dataType: DataTypes.Date, filterEnable: true, cellTemplate: this.birthDateColumnTemplate }),
      new Column({ dataField: "Age", visible: true, dataType: DataTypes.Number, sortEnable: true, filterEnable: true, styleClass: "np-text-danger", rightAlignText: true }),
      new Column({ dataField: "Active", visible: true, caption: "Is Active?", dataType: DataTypes.Boolean, filterEnable: true, })];
    this.gridDataSource = new BehaviorSubject(null);

    this.setStateForServerSideGrid();
  }

  onLoadData(options: LoadOptions) {
    this.odataQuery = options.odataQuery;
    this.dataService.getDataUsingLoadOptions(options).subscribe((data: any) => {
      var result = new DataSource(data.data, data.total, { totalCount: 10000 });
      this.gridDataSource.next(result);
    });
  }

  setStateForServerSideGrid() {
    var columns = [
      new Column({ dataField: "Id", visible: true, width: 100, caption: "Id", dataType: DataTypes.Number, sortEnable: true, filterEnable: true }),
      new Column({ dataField: "FirstName", visible: true, width: 150, caption: "First Name", dataType: DataTypes.String, sortEnable: true, filterEnable: true, sortDirection: SortDirections.Ascending }),
      new Column({ dataField: "LastName", visible: true, width: 150, caption: "Last Name", dataType: DataTypes.String }),
      new Column({ dataField: "BirthDate", visible: true, width: 150, caption: "Birth Date", dataType: DataTypes.Date, filterEnable: true, cellTemplate: this.birthDateColumnTemplate }),
      new Column({ dataField: "Age", visible: true, width: 100, dataType: DataTypes.Number, sortEnable: true, filterEnable: true, styleClass: "np-text-danger", filterValue: "50", filterOperator: FilterTypes.GreaterThan }),
      new Column({ dataField: "Active", visible: true, width: 150, caption: "Is Active?", dataType: DataTypes.Boolean, filterEnable: true, })];
    var state = new State("Age more than 50", columns);
    this.serverSideGrid.setAllState([state]);
  }
}
