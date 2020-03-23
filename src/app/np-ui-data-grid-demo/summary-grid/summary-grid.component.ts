import { Component, OnInit } from '@angular/core';
import { DataSource, DataTypes, Column } from 'projects/np-ui-lib/src/public-api';
import { DataService } from '../data.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-summary-grid',
  templateUrl: './summary-grid.component.html'
})
export class SummaryGridComponent implements OnInit {

  gridColumns: any[];
  gridDataSource: BehaviorSubject<DataSource> = new BehaviorSubject(null);

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
      
      // Here summary object is passed in data source.
      var dataSource = new DataSource(data, 0, { totalCount: 10000 });
      this.gridDataSource.next(dataSource);
    });
  }

}
