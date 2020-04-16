import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpUiTagsComponent } from './np-ui-tags.component';
import { NpUiHightLightPipe } from '../np-ui-utility/np-ui-highlight.pipe';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { NpUiUtility } from '../np-ui-utility/np-ui-utility.module';

@NgModule({
  declarations: [NpUiTagsComponent],
  imports: [
    CommonModule,
    FormsModule,
    OverlayModule,
    PortalModule,
    NpUiUtility
  ],
  providers: [NpUiHightLightPipe],
  exports: [NpUiTagsComponent]
})
export class NpUiTagsModule { }
