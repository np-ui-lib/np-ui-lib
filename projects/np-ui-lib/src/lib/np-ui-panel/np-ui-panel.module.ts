import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpUiPanelComponent } from './np-ui-panel.component';

@NgModule({
  declarations: [NpUiPanelComponent],
  imports: [
    CommonModule
  ],
  exports: [NpUiPanelComponent]
})
export class NpUiPanelModule { }
