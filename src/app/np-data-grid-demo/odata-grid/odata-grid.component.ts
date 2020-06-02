import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { DataSource, DataTypes, LoadOptions, Column, NpDataGridComponent, State, SortDirections, FilterTypes } from 'np-ui-lib';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-odata-grid',
  templateUrl: './odata-grid.component.html'
})
export class OdataGridComponent implements OnInit {

  gridColumns: any[];
  gridDataSource: BehaviorSubject<DataSource>;

  @ViewChild("birthDateColumnTemplate", { static: true }) birthDateColumnTemplate: TemplateRef<any>;
  @ViewChild("summaryTemplate", { static: true }) summaryTemplate: TemplateRef<any>;

  @ViewChild("serverSideGrid", { static: true }) serverSideGrid: NpDataGridComponent;

  odataQuery: string = "";

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.gridColumns = [
      new Column({ dataField: "UserName", visible: true, caption: "User Name", dataType: DataTypes.String, sortEnable: true, filterEnable: true }),
      new Column({ dataField: "FirstName", visible: true, caption: "First Name", dataType: DataTypes.String, sortEnable: true, filterEnable: true }),
      new Column({ dataField: "LastName", visible: true, caption: "Last Name", dataType: DataTypes.String }),
      new Column({ dataField: "Age", visible: true, dataType: DataTypes.Number, sortEnable: true, filterEnable: true, styleClass: "np-text-danger", rightAlignText: true })];

    this.gridDataSource = new BehaviorSubject(null);
  }

  onLoadData(options: LoadOptions) {
    this.http.get("https://services.odata.org/TripPinRESTierService/(S(mvnapyb1qiwt4drfwdtigsrq))/People?" + options.odataQuery)
      .subscribe((data: any) => {
        if (data && data.value) {
          var result = new DataSource(data.value, data.count, { totalCount: data.count }, options.isAllPages);
          this.gridDataSource.next(result);
        }
      });
  }

}
