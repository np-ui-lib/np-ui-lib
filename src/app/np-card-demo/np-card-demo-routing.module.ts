import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpCardDemoComponent } from './np-card-demo.component';

const routes: Routes = [{
  path: "",
  component: NpCardDemoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpCardDemoRoutingModule { }
