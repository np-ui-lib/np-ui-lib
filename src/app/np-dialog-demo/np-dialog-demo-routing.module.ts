import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpDialogDemoComponent } from './np-dialog-demo.component';

const routes: Routes = [{
  path: '',
  component: NpDialogDemoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpDialogDemoRoutingModule { }
