import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpDropdownComponent } from './np-dropdown.component';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  declarations: [NpDropdownComponent],
  imports: [
    CommonModule,
    FormsModule,
    OverlayModule,
    PortalModule
  ],
  exports: [NpDropdownComponent]
})
export class NpDropdownModule { }
