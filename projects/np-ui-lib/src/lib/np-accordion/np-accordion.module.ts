import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpAccordionComponent } from './np-accordion.component';
import { NpAccordionItemComponent } from './np-accordion-item/np-accordion-item.component';

@NgModule({
  declarations: [NpAccordionComponent, NpAccordionItemComponent],
  imports: [
    CommonModule
  ],
  exports: [NpAccordionComponent, NpAccordionItemComponent]
})
export class NpAccordionModule { }
