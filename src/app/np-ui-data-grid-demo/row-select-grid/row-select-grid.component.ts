import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSource, DataTypes, NpUiDataGridComponent, Column } from 'projects/np-ui-lib/src/public-api';
import { DataService } from '../data.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-row-select-grid',
  templateUrl: './row-select-grid.component.html'
})
export class RowSelectGridComponent implements OnInit {

  gridColumns: any[];
  gridDataSource: BehaviorSubject<DataSource> = new BehaviorSubject(null);

  @ViewChild("singleSelectGrid", { static: true }) singleSelectGrid: NpUiDataGridComponent;
  @ViewChild("multiSelectGrid", { static: true }) multiSelectGrid: NpUiDataGridComponent;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.gridColumns = [
      new Column({ dataField: "Id", visible: true, caption: "Id", dataType: DataTypes.Number }),
      new Column({ dataField: "FirstName", visible: true, caption: "First Name", dataType: DataTypes.String }),
      new Column({ dataField: "LastName", visible: true, caption: "Last Name", dataType: DataTypes.String }),
      new Column({ dataField: "BirthDate", visible: true, caption: "Birth Date", dataType: DataTypes.Date }),
      new Column({ dataField: "Age", visible: true, caption: "Age", dataType: DataTypes.Number }),
      new Column({ dataField: "Active", visible: true, caption: "Is Active?", dataType: DataTypes.Boolean })];

    this.dataService.getAll().subscribe((data: any) => {

      var dataSource = new DataSource(data, 0, { totalCount: 10000 });
      this.gridDataSource.next(dataSource);
    });
  }

  onSelectRow($event) {
    alert("selected rows:" + $event.data);
  }

  onDeselectRow($event) {
    alert("de selected rows:" + $event.data);
  }

  getSelectedRows() {
    var selectedRows = this.singleSelectGrid.getSelectedRowKeys();
    alert(selectedRows);
  }

  getMultiSelectedRows() {
    var selectedRows = this.multiSelectGrid.getSelectedRowKeys();
    alert(selectedRows);
  }

  deSelectAll() {
    this.multiSelectGrid.deSelectAll();
  }

  selectAll() {
    this.multiSelectGrid.selectAll();
  }

}
