import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpTagsComponent } from './np-tags.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { NpUtilityModule } from '../np-utility/np-utility.module';

@NgModule({
  declarations: [NpTagsComponent],
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule,
    NpUtilityModule
  ],
  exports: [NpTagsComponent]
})
export class NpTagsModule { }
