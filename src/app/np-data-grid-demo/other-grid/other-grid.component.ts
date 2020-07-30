import { Component, OnInit } from '@angular/core';
import { DataSource, DataTypes, Column } from 'np-ui-lib';
import { DataService } from '../data.service';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-other-grid',
  templateUrl: './other-grid.component.html'
})
export class OtherGridComponent implements OnInit {

  gridColumns: any[];
  gridDataSource: BehaviorSubject<DataSource> = new BehaviorSubject(null);

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.gridColumns = [
      new Column({ dataField: 'Id', visible: true, caption: 'Id', dataType: DataTypes.Number, width: 200 }),
      new Column({ dataField: 'FirstName', visible: true, caption: 'First Name', dataType: DataTypes.String, width: 200 }),
      new Column({ dataField: 'LastName', visible: true, caption: 'Last Name', dataType: DataTypes.String, width: 200 }),
      new Column({ dataField: 'BirthDate', visible: true, caption: 'Birth Date', dataType: DataTypes.Date, width: 200 }),
      new Column({ dataField: 'Age', visible: true, caption: 'Age', dataType: DataTypes.Number, width: 200 }),
      new Column({ dataField: 'Active', visible: true, caption: 'Is Active?', dataType: DataTypes.Boolean, width: 200 })];

    this.dataService.getAll().subscribe((data: any) => {

      const dataSource = new DataSource(data, 0, { totalCount: 10000 });
      this.gridDataSource.next(dataSource);
    });
  }
}
