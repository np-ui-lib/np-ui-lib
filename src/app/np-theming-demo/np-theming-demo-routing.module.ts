import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpThemingDemoComponent } from './np-theming-demo.component';

const routes: Routes = [
  {
    path: '',
    component: NpThemingDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpThemingDemoRoutingModule { }
