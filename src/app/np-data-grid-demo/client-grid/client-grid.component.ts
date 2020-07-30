import { Component, OnInit } from '@angular/core';
import { DataSource, DataTypes, Column } from 'np-ui-lib';
import { DataService } from '../data.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-client-grid',
  templateUrl: './client-grid.component.html'
})
export class ClientGridComponent implements OnInit {

  htmlText = `<np-data-grid [columns]="gridColumns" [dataSource]="gridDataSource">
</np-data-grid>`;
  gridColumnText = `this.gridColumns = [
    new Column({ dataField: 'Id', visible: true, caption: 'Id', dataType: DataTypes.Number }),
    new Column({ dataField: 'FirstName', visible: true, caption: 'First Name', dataType: DataTypes.String }),
    new Column({ dataField: 'LastName', visible: true, caption: 'Last Name', dataType: DataTypes.String }),
    new Column({ dataField: 'BirthDate', visible: true, caption: 'Birth Date', dataType: DataTypes.Date }),
    new Column({ dataField: 'Age', visible: true, caption: 'Age', dataType: DataTypes.Number }),
    new Column({ dataField: 'Active', visible: true, caption: 'Is Active?', dataType: DataTypes.Boolean })
];`;
  gridDataSourceText = `gridDataSource: BehaviorSubject<DataSource> = new BehaviorSubject(null);

this.dataService.getAll().subscribe((data: any) => {
  // for client side pass total as 0, as it will calculate total from length of array.
  const dataSource = new DataSource(data, 0, null, options.isAllPages);
  this.gridDataSource.next(dataSource);
});`;

  gridColumns: any[];
  gridDataSource: BehaviorSubject<DataSource> = new BehaviorSubject(null);

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
      // for client side pass total as 0, as it will calculate total from length of array.
      const dataSource = new DataSource(data, 0, { totalCount: 10000 });
      this.gridDataSource.next(dataSource);
    });
  }
}
