import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataTypes, DataSource, LoadOptions, Column } from 'np-ui-lib';
import { DataService } from '../data.service';

@Component({
  selector: 'app-filter-grid',
  templateUrl: './filter-grid.component.html'
})
export class FilterGridComponent implements OnInit {

  gridColumns: any[];
  gridDataSource: BehaviorSubject<DataSource>;
  serverGridDataSource: BehaviorSubject<DataSource>;
  showFilters = true;
  currentLoadOptions: LoadOptions;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.gridColumns = [
      new Column({ dataField: 'Id', visible: true, caption: 'Id', dataType: DataTypes.Number, filterEnable: true }),
      new Column({ dataField: 'FirstName', visible: true, caption: 'First Name', dataType: DataTypes.String, filterEnable: true }),
      new Column({ dataField: 'LastName', visible: true, caption: 'Last Name', dataType: DataTypes.String, filterEnable: true }),
      new Column({ dataField: 'BirthDate', visible: true, caption: 'Birth Date', dataType: DataTypes.Date, filterEnable: true }),
      new Column({ dataField: 'Age', visible: true, caption: 'Age', dataType: DataTypes.Number, filterEnable: true }),
      new Column({ dataField: 'Active', visible: true, caption: 'Is Active?', dataType: DataTypes.Boolean, filterEnable: true })];

    this.gridDataSource = new BehaviorSubject(null);
    this.serverGridDataSource = new BehaviorSubject(null);

    this.onLoadData();
  }

  onLoadData() {
    this.dataService.getAll().subscribe((data: any) => {
      const dataSource = new DataSource(data, 0, { totalCount: 10000 });
      this.gridDataSource.next(dataSource);
    });
  }

  onLoadDataServerGrid(options: LoadOptions) {
    setTimeout(() => {
      this.currentLoadOptions = options;
    }, 0);
    this.dataService.getDataUsingLoadOptions(options).subscribe((data: any) => {
      const result = new DataSource(data.data, data.total, { totalCount: 10000 }, options.isAllPages);
      this.serverGridDataSource.next(result);
    });
  }
}
