import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpBreadcrumbDemoComponent } from './np-breadcrumb-demo.component';

const routes: Routes = [
  {
    path: "",
    component: NpBreadcrumbDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpBreadcrumbDemoRoutingModule { }
