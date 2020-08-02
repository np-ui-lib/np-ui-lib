import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-grid-doc',
  templateUrl: './data-grid-doc.component.html',
  styleUrls: ['./data-grid-doc.component.css']
})
export class DataGridDocComponent implements OnInit {

  importText = 'import { NpDataGridModule } from \'np-ui-lib\';';
  htmlText = `<np-data-grid [columns]="gridColumns" [dataSource]="gridDataSource">
</np-data-grid>`;
  columnText = `[
  new Column({ dataField: 'Id', visible: true, caption: 'Id',
    dataType: DataTypes.Number }),
  ...
]`;
  childRowText = `<ng-template #masterDetailTemplate let-row="row">
  <span><b>Name:</b>{{row.FirstName}} {{row.LastName}}</span>
  <span><b>Birth Date:</b>{{row.BirthDate | date:'dd/MM/yyyy'}}</span>
</ng-template>`;
  summaryTempText = `<ng-template #summaryTemplate let-summary="summary">
  <span>Total:{{summary ? summary.totalCount : 0}}</span>
</ng-template>`;

  constructor() { }

  ngOnInit(): void {
  }

}
