import { Component, OnInit } from '@angular/core';
import { DataTypes, DataSource, LoadOptions, Column } from 'np-ui-lib';
import { BehaviorSubject } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sorting-grid',
  templateUrl: './sorting-grid.component.html'
})
export class SortingGridComponent implements OnInit {

  gridColumns: any[];
  gridDataSource: BehaviorSubject<DataSource>;
  serverGridDataSource: BehaviorSubject<DataSource>;
  multiColumnSortEnable: boolean = false;
  currentLoadOptions: LoadOptions;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.gridColumns = [
      new Column({ dataField: "Id", visible: true, caption: "Id", dataType: DataTypes.Number, sortEnable: true }),
      new Column({ dataField: "FirstName", visible: true, caption: "First Name", dataType: DataTypes.String, sortEnable: true }),
      new Column({ dataField: "LastName", visible: true, caption: "Last Name", dataType: DataTypes.String, sortEnable: true }),
      new Column({ dataField: "BirthDate", visible: true, caption: "Birth Date", dataType: DataTypes.Date, sortEnable: true }),
      new Column({ dataField: "Age", visible: true, caption: "Age", dataType: DataTypes.Number, sortEnable: true }),
      new Column({ dataField: "Active", visible: true, caption: "Is Active?", dataType: DataTypes.Boolean, sortEnable: true })];

    this.gridDataSource = new BehaviorSubject(null);
    this.serverGridDataSource = new BehaviorSubject(null);

    this.onLoadData();
  }

  onLoadData() {
    this.dataService.getAll().subscribe((data: any) => {

      var dataSource = new DataSource(data, 0, { totalCount: 10000 });
      this.gridDataSource.next(dataSource);
    });
  }

  onLoadDataServerGrid(options: LoadOptions) {
    setTimeout(() => {
      this.currentLoadOptions = options;
    }, 0);
    this.dataService.getDataUsingLoadOptions(options).subscribe((data: any) => {
      var result = new DataSource(data.data, data.total, { totalCount: 10000 }, options.isAllPages);
      this.serverGridDataSource.next(result);
    });
  }
}
