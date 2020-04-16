import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpUiTagsDemoComponent } from './np-ui-tags-demo.component';


const routes: Routes = [
  {
    path: '',
    component: NpUiTagsDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpUiTagsDemoRoutingModule { }
