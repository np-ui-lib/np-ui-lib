import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NpFrameworkCssDemoComponent } from './np-framework-css-demo.component';

const routes: Routes = [{
  path: '',
  component: NpFrameworkCssDemoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpFrameworkCssDemoRoutingModule { }
