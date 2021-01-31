import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpTimelineDemoComponent } from './np-timeline-demo.component';

const routes: Routes = [{
  path: '',
  component: NpTimelineDemoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpTimelineDemoRoutingModule { }
