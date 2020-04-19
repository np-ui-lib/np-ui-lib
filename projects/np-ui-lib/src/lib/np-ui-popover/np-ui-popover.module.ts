import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpUiPopoverComponent } from './np-ui-popover.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { NpUiPopoverDirective } from './np-ui-popover.directive';

@NgModule({
  declarations: [NpUiPopoverComponent, NpUiPopoverDirective],
  imports: [
    CommonModule,
    OverlayModule
  ],
  exports: [NpUiPopoverDirective],
  entryComponents: [NpUiPopoverComponent]
})
export class NpUiPopoverModule { }
