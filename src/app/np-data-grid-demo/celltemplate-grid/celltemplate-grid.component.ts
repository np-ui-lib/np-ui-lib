import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataSource, DataTypes, Column } from 'np-ui-lib';
import { DataService } from '../data.service';

@Component({
  selector: 'app-celltemplate-grid',
  templateUrl: './celltemplate-grid.component.html'
})
export class CelltemplateGridComponent implements OnInit {

  htmlText = `<ng-template #activeColumnTemplate let-row="row">
  <np-switch [(ngModel)]="row.Active" trueLabelText="Yes" falseLabelText="No" [readOnly]="true"></np-switch>
</ng-template>`;
  templateText = `@ViewChild('actionButtonsTemplate', { static: true }) actionButtonsTemplate: TemplateRef<any>;`;
  columnText = `new Column({ dataField: 'Active', visible: true, caption: 'Is Active?', 
  dataType: DataTypes.Boolean, sortEnable: true, filterEnable: true, cellTemplate: this.activeColumnTemplate }),`;

  gridColumns: any[];
  gridDataSource: BehaviorSubject<DataSource> = new BehaviorSubject(null);

  @ViewChild('actionButtonsTemplate', { static: true }) actionButtonsTemplate: TemplateRef<any>;
  @ViewChild('birthDateColumnTemplate', { static: true }) birthDateColumnTemplate: TemplateRef<any>;
  @ViewChild('activeColumnTemplate', { static: true }) activeColumnTemplate: TemplateRef<any>;
  @ViewChild('avatarColumnTemplate', { static: true }) avatarColumnTemplate: TemplateRef<any>;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {

    this.gridColumns = [
      new Column({ dataField: 'Id', visible: true, caption: 'Id', dataType: DataTypes.Number, sortEnable: true, filterEnable: true, width: 100 }),
      new Column({ visible: true, caption: 'Photo', cellTemplate: this.avatarColumnTemplate, width: 35 }),
      new Column({ dataField: 'FirstName', visible: true, caption: 'First Name', dataType: DataTypes.String, sortEnable: true, filterEnable: true }),
      new Column({ dataField: 'LastName', visible: true, caption: 'Last Name', dataType: DataTypes.String, sortEnable: true, filterEnable: true }),
      new Column({ dataField: 'BirthDate', visible: true, caption: 'Birth Date', dataType: DataTypes.Date, sortEnable: true, filterEnable: true, cellTemplate: this.birthDateColumnTemplate }),
      new Column({ dataField: 'Age', visible: true, caption: 'Age', dataType: DataTypes.Number, sortEnable: true, filterEnable: true }),
      new Column({
        dataField: 'Active', visible: true, caption: 'Is Active?', dataType: DataTypes.Boolean, sortEnable: true, filterEnable: true,
        cellTemplate: this.activeColumnTemplate, width: 100, trueFilterText: 'Yes', falseFilterText: 'No'
      }),
      new Column({ visible: true, cellTemplate: this.actionButtonsTemplate, width: 80 })];

    this.dataService.getAll().subscribe((data: any) => {

      const dataSource = new DataSource(data, 0, { totalCount: 10000 });
      this.gridDataSource.next(dataSource);
    });
  }

  onActionClick(row, actionType, event) {
    alert('Action type is : ' + actionType + ', Row key value: ' + row.Id);
  }

}
