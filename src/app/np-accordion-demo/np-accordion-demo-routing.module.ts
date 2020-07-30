import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpAccordionDemoComponent } from './np-accordion-demo.component';


const routes: Routes = [
  {
    path: '',
    component: NpAccordionDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpAccordionDemoRoutingModule { }
