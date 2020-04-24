import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpAccordionDemoRoutingModule } from './np-accordion-demo-routing.module';
import { NpAccordionDemoComponent } from './np-accordion-demo.component';
import { NpAccordionModule, NpPanelModule, NpSwitchModule } from 'np-ui-lib';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NpAccordionDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    NpAccordionDemoRoutingModule,
    NpAccordionModule,
    NpPanelModule,
    NpSwitchModule
  ]
})
export class NpAccordionDemoModule { }
