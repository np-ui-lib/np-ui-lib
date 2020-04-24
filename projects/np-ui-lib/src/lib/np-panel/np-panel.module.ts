import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpPanelComponent } from './np-panel.component';

@NgModule({
  declarations: [NpPanelComponent],
  imports: [
    CommonModule
  ],
  exports: [NpPanelComponent]
})
export class NpPanelModule { }
