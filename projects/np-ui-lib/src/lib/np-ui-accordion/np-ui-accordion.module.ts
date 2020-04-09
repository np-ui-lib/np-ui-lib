import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpUiAccordionComponent } from './np-ui-accordion.component';
import { NpUiPanelModule } from '../np-ui-panel/np-ui-panel.module';

@NgModule({
  declarations: [NpUiAccordionComponent],
  imports: [
    CommonModule,
    NpUiPanelModule
  ],
  exports: [NpUiAccordionComponent]
})
export class NpUiAccordionModule { }
