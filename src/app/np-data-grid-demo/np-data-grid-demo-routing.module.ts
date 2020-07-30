import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NpDataGridDemoComponent } from './np-data-grid-demo.component';

import { ClientGridComponent } from './client-grid/client-grid.component';
import { ServerGridComponent } from './server-grid/server-grid.component';
import { SortingGridComponent } from './sorting-grid/sorting-grid.component';
import { FilterGridComponent } from './filter-grid/filter-grid.component';
import { CelltemplateGridComponent } from './celltemplate-grid/celltemplate-grid.component';
import { ToolbarGridComponent } from './toolbar-grid/toolbar-grid.component';
import { ColumnsGridComponent } from './columns-grid/columns-grid.component';
import { RowSelectGridComponent } from './row-select-grid/row-select-grid.component';
import { MasterChildGridComponent } from './master-detail-grid/master-detail-grid.component';
import { SummaryGridComponent } from './summary-grid/summary-grid.component';
import { StateManagementGridComponent } from './state-management-grid/state-management-grid.component';
import { OtherGridComponent } from './other-grid/other-grid.component';
import { ClientGridAllComponent } from './client-grid-all/client-grid-all.component';
import { ServerGridAllComponent } from './server-grid-all/server-grid-all.component';
import { OdataGridComponent } from './odata-grid/odata-grid.component';
import { InsideTabGridComponent } from './inside-tab-grid/inside-tab-grid.component';

const routes: Routes = [
  {
    path: '',
    component: NpDataGridDemoComponent,
    children: [
      { path: 'client-grid', component: ClientGridComponent },
      { path: 'server-grid', component: ServerGridComponent },
      { path: 'sorting-grid', component: SortingGridComponent },
      { path: 'filter-grid', component: FilterGridComponent },
      { path: 'celltemplate-grid', component: CelltemplateGridComponent },
      { path: 'toolbar-grid', component: ToolbarGridComponent },
      { path: 'columns-grid', component: ColumnsGridComponent },
      { path: 'row-select-grid', component: RowSelectGridComponent },
      { path: 'master-detail-grid', component: MasterChildGridComponent },
      { path: 'summary-grid', component: SummaryGridComponent },
      { path: 'state-management-grid', component: StateManagementGridComponent },
      { path: 'other-grid', component: OtherGridComponent },
      { path: 'client-grid-all', component: ClientGridAllComponent },
      { path: 'server-grid-all', component: ServerGridAllComponent },
      { path: 'odata-grid', component: OdataGridComponent },
      { path: 'inside-tab-grid', component: InsideTabGridComponent },
      { path: '**', redirectTo: 'client-grid' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpDataGridDemoRoutingModule { }
