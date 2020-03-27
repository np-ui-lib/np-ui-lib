import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpUiPanelDemoComponent } from './np-ui-panel-demo.component';


const routes: Routes = [
  {
    path: '',
    component: NpUiPanelDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpUiPanelDemoRoutingModule { }
