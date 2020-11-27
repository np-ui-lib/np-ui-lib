import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpTagsDemoComponent } from './np-tags-demo.component';

const routes: Routes = [
  {
    path: '',
    component: NpTagsDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpTagsDemoRoutingModule { }
