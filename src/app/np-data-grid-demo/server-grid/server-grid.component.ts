import { Component, OnInit } from '@angular/core';
import { DataSource, DataTypes, LoadOptions, Column } from 'np-ui-lib';
import { DataService } from '../data.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-server-grid',
  templateUrl: './server-grid.component.html'
})
export class ServerGridComponent implements OnInit {

  htmlText = `<np-data-grid [columns]="gridColumns" [dataSource]="gridDataSource" [isServerOperations]="true" (onLoadData)="onLoadData($event)">
</np-data-grid>`;
  gridDataSourceText = `gridDataSource: BehaviorSubject<DataSource> = new BehaviorSubject(null);

onLoadData(options: LoadOptions) {
  this.dataService.getDataUsingLoadOptions(options).subscribe((data: any) => {
    const result = new DataSource(data.data, data.total, null, options.isAllPages);
    this.gridDataSource.next(result);
  });
}`;

  gridColumns: any[];
  gridDataSource: BehaviorSubject<DataSource> = new BehaviorSubject(null);
  currentLoadOptions: LoadOptions = new LoadOptions();

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
  }

  onLoadData(options: LoadOptions) {
    setTimeout(() => {
      this.currentLoadOptions = options;
    }, 0);
    this.dataService.getDataUsingLoadOptions(options).subscribe((data: any) => {
      const result = new DataSource(data.data, data.total, null, options.isAllPages);
      this.gridDataSource.next(result);
    });
  }
}
