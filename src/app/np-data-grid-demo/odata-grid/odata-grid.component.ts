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

  odataQuery: string;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.gridColumns = [
      new Column({ dataField: "ProductID", visible: true, caption: "ID", dataType: DataTypes.Number, sortEnable: true, filterEnable: true }),
      new Column({ dataField: "ProductName", visible: true, caption: "Product Name", dataType: DataTypes.String, sortEnable: true, filterEnable: true }),
      new Column({ dataField: "UnitPrice", visible: true, caption: "Unit Price", dataType: DataTypes.Number, sortEnable: true, filterEnable: true }),
      new Column({ dataField: "UnitsInStock", visible: true, caption: "Units In Stock", dataType: DataTypes.Number, sortEnable: true, filterEnable: true, styleClass: "np-text-danger" })];

    this.gridDataSource = new BehaviorSubject(null);
  }

  onLoadData(options: LoadOptions) {
    setTimeout(() => {
      this.odataQuery = options.odataQuery;
    }, 0);
    this.http.get("https://services.odata.org/V4/Northwind/Northwind.svc/Products?" + options.odataQuery)
      .subscribe((data: any) => {
        if (data && data.value) {
          var result = new DataSource(data.value, data["@odata.count"], { totalCount: data["@odata.count"] }, options.isAllPages);
          this.gridDataSource.next(result);
        }
      });
  }

}
