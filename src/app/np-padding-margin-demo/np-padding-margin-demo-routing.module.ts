import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NpPaddingMarginDemoComponent } from './np-padding-margin-demo.component';

const routes: Routes = [{
  path: '',
  component: NpPaddingMarginDemoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpPaddingMarginDemoRoutingModule { }
