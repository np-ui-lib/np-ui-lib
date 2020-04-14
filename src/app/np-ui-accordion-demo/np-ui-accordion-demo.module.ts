import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpUiAccordionDemoRoutingModule } from './np-ui-accordion-demo-routing.module';
import { NpUiAccordionDemoComponent } from './np-ui-accordion-demo.component';
import { NpUiAccordionModule, NpUiPanelModule, NpUiSwitchModule } from 'projects/np-ui-lib/src/public-api';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NpUiAccordionDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    NpUiAccordionDemoRoutingModule,
    NpUiAccordionModule,
    NpUiPanelModule,
    NpUiSwitchModule
  ]
})
export class NpUiAccordionDemoModule { }
