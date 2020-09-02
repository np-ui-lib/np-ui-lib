import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpPopoverComponent } from './np-popover.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { NpPopoverDirective } from './np-popover.directive';
import { NpUtilityModule } from '../np-utility/np-utility.module';

@NgModule({
  declarations: [NpPopoverComponent, NpPopoverDirective],
  imports: [
    CommonModule,
    OverlayModule,
    NpUtilityModule
  ],
  exports: [NpPopoverDirective],
  entryComponents: [NpPopoverComponent]
})
export class NpPopoverModule { }
