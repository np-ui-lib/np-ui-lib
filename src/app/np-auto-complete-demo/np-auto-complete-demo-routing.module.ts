import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpAutoCompleteDemoComponent } from './np-auto-complete-demo.component';

const routes: Routes = [{
  path: "",
  component: NpAutoCompleteDemoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpAutoCompleteDemoRoutingModule { }
