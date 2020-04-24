import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpTooltipDemoComponent } from './np-tooltip-demo.component';


const routes: Routes = [{
  path: '',
  component: NpTooltipDemoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpTooltipDemoRoutingModule { }
