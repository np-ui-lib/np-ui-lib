import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpTagsComponent } from './np-tags.component';
import { NpHightLightPipe } from '../np-utility/np-highlight.pipe';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { NpUtility } from '../np-utility/np-utility.module';

@NgModule({
  declarations: [NpTagsComponent],
  imports: [
    CommonModule,
    FormsModule,
    OverlayModule,
    PortalModule,
    NpUtility
  ],
  providers: [NpHightLightPipe],
  exports: [NpTagsComponent]
})
export class NpTagsModule { }
