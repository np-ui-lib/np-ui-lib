import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpUiDropdownComponent } from './np-ui-dropdown.component';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  declarations: [NpUiDropdownComponent],
  imports: [
    CommonModule,
    FormsModule,
    OverlayModule,
    PortalModule
  ],
  exports: [NpUiDropdownComponent]
})
export class NpUiDropdownModule { }
