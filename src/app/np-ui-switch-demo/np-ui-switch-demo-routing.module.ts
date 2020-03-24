import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpUiSwitchDemoComponent } from './np-ui-switch-demo.component';


const routes: Routes = [
  {
    path: '',
    component: NpUiSwitchDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpUiSwitchDemoRoutingModule { }
