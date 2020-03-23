import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataSource, DataTypes, Column } from 'projects/np-ui-lib/src/public-api';
import { DataService } from '../data.service';

@Component({
  selector: 'app-columns-grid',
  templateUrl: './columns-grid.component.html'
})
export class ColumnsGridComponent implements OnInit {


  gridColumns: any[];
  gridDataSource: BehaviorSubject<DataSource> = new BehaviorSubject(null);

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.gridColumns = [
      new Column({ dataField: "Id", visible: true, caption: "Id", dataType: DataTypes.Number, sortEnable: true, filterEnable: true }),
      new Column({ dataField: "FirstName", visible: true, caption: "First Name", dataType: DataTypes.String, sortEnable: true, filterEnable: true }),
      new Column({ dataField: "LastName", visible: true, caption: "Last Name", dataType: DataTypes.String, sortEnable: true, filterEnable: true }),
      new Column({ dataField: "BirthDate", visible: true, caption: "Birth Date", dataType: DataTypes.Date, sortEnable: true, filterEnable: true }),
      new Column({ dataField: "Age", visible: true, caption: "Age", dataType: DataTypes.Number, sortEnable: true, filterEnable: true, rightAlignText: true }),
      new Column({ dataField: "Active", visible: true, caption: "Is Active?", dataType: DataTypes.Boolean, sortEnable: true, filterEnable: true, styleClass: "txt-red" })];

    this.dataService.getAll().subscribe((data: any) => {
      var dataSource = new DataSource(data, 0, { totalCount: 10000 });
      this.gridDataSource.next(dataSource);
    });
  }

  onCellClick(event, column, data) {
    alert("Column: " + column.dataField + " , rowKey:" + data.Id);
  }
}
