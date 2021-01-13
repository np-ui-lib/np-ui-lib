import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpDirectivesDemoComponent } from './np-directives-demo.component';

const routes: Routes = [
  {
    path: '',
    component: NpDirectivesDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpDirectivesDemoRoutingModule { }
