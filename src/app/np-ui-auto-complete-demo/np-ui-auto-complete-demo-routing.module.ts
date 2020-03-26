import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpUiAutoCompleteDemoComponent } from './np-ui-auto-complete-demo.component';

const routes: Routes = [{
  path: "",
  component: NpUiAutoCompleteDemoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpUiAutoCompleteDemoRoutingModule { }
