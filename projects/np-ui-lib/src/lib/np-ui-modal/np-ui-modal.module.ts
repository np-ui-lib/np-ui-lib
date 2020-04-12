import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpUiModalComponent } from './np-ui-modal.component';
import { NpUiModalHeaderComponent } from './np-ui-modal-header.component';
import { NpUiModalContentComponent } from './np-ui-modal-content.component';
import { NpUiModalFooterComponent } from './np-ui-modal-footer.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  declarations: [NpUiModalComponent,
    NpUiModalHeaderComponent,
    NpUiModalContentComponent,
    NpUiModalFooterComponent],
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule
  ],
  exports: [NpUiModalComponent,
    NpUiModalHeaderComponent,
    NpUiModalContentComponent,
    NpUiModalFooterComponent]
})
export class NpUiModalModule { }
