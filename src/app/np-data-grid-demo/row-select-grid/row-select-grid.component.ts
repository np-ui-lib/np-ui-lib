import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSource, DataTypes, NpDataGridComponent, Column } from 'np-ui-lib';
import { DataService } from '../data.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-row-select-grid',
  templateUrl: './row-select-grid.component.html'
})
export class RowSelectGridComponent implements OnInit {

  gridColumns: any[];
  gridDataSource: BehaviorSubject<DataSource> = new BehaviorSubject(null);

  @ViewChild('singleSelectGrid', { static: true }) singleSelectGrid: NpDataGridComponent;
  @ViewChild('multiSelectGrid', { static: true }) multiSelectGrid: NpDataGridComponent;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.gridColumns = [
      new Column({ dataField: 'Id', visible: true, caption: 'Id', dataType: DataTypes.Number }),
      new Column({ dataField: 'FirstName', visible: true, caption: 'First Name', dataType: DataTypes.String }),
      new Column({ dataField: 'LastName', visible: true, caption: 'Last Name', dataType: DataTypes.String }),
      new Column({ dataField: 'BirthDate', visible: true, caption: 'Birth Date', dataType: DataTypes.Date }),
      new Column({ dataField: 'Age', visible: true, caption: 'Age', dataType: DataTypes.Number }),
      new Column({ dataField: 'Active', visible: true, caption: 'Is Active?', dataType: DataTypes.Boolean })];

    this.dataService.getAll().subscribe((data: any) => {

      const dataSource = new DataSource(data, 0, { totalCount: 10000 });
      this.gridDataSource.next(dataSource);
    });
  }

  onSelectRow($event) {
    console.log('Selected rows:' + $event.data);
  }

  onDeselectRow($event) {
    console.log('Deselected rows:' + $event.data);
  }

  getSelectedRows() {
    const selectedRows = this.singleSelectGrid.getSelectedRowKeys();
    alert(selectedRows);
  }

  getMultiSelectedRows() {
    const selectedRows = this.multiSelectGrid.getSelectedRowKeys();
    alert(selectedRows);
  }

  deselectAll() {
    this.multiSelectGrid.deselectAll();
  }

  selectAll() {
    this.multiSelectGrid.selectAll();
  }

}
