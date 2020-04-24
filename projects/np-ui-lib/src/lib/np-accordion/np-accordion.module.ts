import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpAccordionComponent } from './np-accordion.component';
import { NpPanelModule } from '../np-panel/np-panel.module';

@NgModule({
  declarations: [NpAccordionComponent],
  imports: [
    CommonModule,
    NpPanelModule
  ],
  exports: [NpAccordionComponent]
})
export class NpAccordionModule { }
