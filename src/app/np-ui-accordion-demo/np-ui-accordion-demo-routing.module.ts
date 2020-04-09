import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpUiAccordionDemoComponent } from './np-ui-accordion-demo.component';


const routes: Routes = [
  {
    path: "",
    component: NpUiAccordionDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpUiAccordionDemoRoutingModule { }
