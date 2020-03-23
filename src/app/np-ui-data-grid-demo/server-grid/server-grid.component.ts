import { Component, OnInit } from '@angular/core';
import { DataSource, DataTypes, LoadOptions, Column } from 'projects/np-ui-lib/src/public-api';
import { DataService } from '../data.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-server-grid',
  templateUrl: './server-grid.component.html'
})
export class ServerGridComponent implements OnInit {

  gridColumns: any[];
  gridDataSource: BehaviorSubject<DataSource> = new BehaviorSubject(null);
  currentLoadOptions: LoadOptions = new LoadOptions();

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
  }

  onLoadData(options: LoadOptions) {
    this.currentLoadOptions = options;
    this.dataService.getDataUsingLoadOptions(options).subscribe((data: any) => {
      var result = new DataSource(data.data, data.total, { totalCount: 10000 }, options.isAllPages);
      this.gridDataSource.next(result);
    });
  }
}
