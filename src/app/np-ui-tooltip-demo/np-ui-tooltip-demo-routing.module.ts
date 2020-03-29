import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpUiTooltipDemoComponent } from './np-ui-tooltip-demo.component';


const routes: Routes = [{
  path: '',
  component: NpUiTooltipDemoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpUiTooltipDemoRoutingModule { }
