import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpUiAccordionDemoRoutingModule } from './np-ui-accordion-demo-routing.module';
import { NpUiAccordionDemoComponent } from './np-ui-accordion-demo.component';
import { NpUiAccordionModule, NpUiPanelModule } from 'projects/np-ui-lib/src/public-api';


@NgModule({
  declarations: [NpUiAccordionDemoComponent],
  imports: [
    CommonModule,
    NpUiAccordionDemoRoutingModule,
    NpUiAccordionModule,
    NpUiPanelModule
  ]
})
export class NpUiAccordionDemoModule { }
