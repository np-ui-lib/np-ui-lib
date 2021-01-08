import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { NpAccordionComponent } from './np-accordion.component';
import { NpAccordionItemComponent } from './np-accordion-item/np-accordion-item.component';
import { NpAccordionContent } from './np-accordion-item/np-accordion-content.directive';

@NgModule({
  declarations: [NpAccordionComponent, NpAccordionItemComponent, NpAccordionContent],
  imports: [CommonModule, PortalModule],
  exports: [NpAccordionComponent, NpAccordionItemComponent, NpAccordionContent]
})
export class NpAccordionModule { }
