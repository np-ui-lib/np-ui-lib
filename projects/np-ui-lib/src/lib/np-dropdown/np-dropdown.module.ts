import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpDropdownComponent } from './np-dropdown.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { NpUtilityModule } from '../np-utility/np-utility.module';

@NgModule({
  declarations: [NpDropdownComponent],
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule,
    NpUtilityModule
  ],
  exports: [NpDropdownComponent]
})
export class NpDropdownModule { }
