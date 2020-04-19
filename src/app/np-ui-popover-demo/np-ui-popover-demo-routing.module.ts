import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpUiPopoverDemoComponent } from './np-ui-popover-demo.component';

const routes: Routes = [
  {
    path: '',
    component: NpUiPopoverDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpUiPopoverDemoRoutingModule { }
