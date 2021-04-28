import { Component, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { DataSource, DataTypes, Column } from "np-ui-lib";
import { DataService } from "../data.service";

@Component({
  selector: "app-toolbar-grid",
  templateUrl: "./toolbar-grid.component.html",
})
export class ToolbarGridComponent implements OnInit {
  gridColumns: any[];
  gridDataSource: BehaviorSubject<DataSource> = new BehaviorSubject(null);

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.gridColumns = [
      new Column({
        dataField: "Id",
        visible: true,
        caption: "Id",
        dataType: DataTypes.Number,
        sortEnable: true,
        filterEnable: true,
      }),
      new Column({
        dataField: "FirstName",
        visible: false,
        caption: "First Name",
        dataType: DataTypes.String,
        sortEnable: true,
        filterEnable: true,
      }),
      new Column({
        dataField: "LastName",
        visible: true,
        caption: "Last Name",
        dataType: DataTypes.String,
        sortEnable: true,
        filterEnable: true,
      }),
      new Column({
        dataField: "BirthDate",
        visible: true,
        caption: "Birth Date",
        dataType: DataTypes.Date,
        sortEnable: true,
        filterEnable: true,
      }),
      new Column({
        dataField: "Age",
        visible: true,
        caption: "Age",
        dataType: DataTypes.Number,
        sortEnable: true,
        filterEnable: true,
      }),
      new Column({
        dataField: "Active",
        visible: true,
        caption: "Is Active?",
        dataType: DataTypes.Boolean,
        sortEnable: true,
        filterEnable: true,
      }),
    ];

    this.dataService.getAll().subscribe((data: any) => {
      const dataSource = new DataSource(data, 0, { totalCount: 10000 });
      this.gridDataSource.next(dataSource);
    });
  }
}
