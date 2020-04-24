import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpUiDropdownDemoComponent } from './np-ui-dropdown-demo.component';


const routes: Routes = [
  {
    path: '',
    component: NpUiDropdownDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpUiDropdownDemoRoutingModule { }
