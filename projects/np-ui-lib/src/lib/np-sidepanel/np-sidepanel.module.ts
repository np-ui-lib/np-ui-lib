import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpSidepanelComponent } from './np-sidepanel.component';
import { NpSidepanelHeaderComponent } from './np-sidepanel-header.component';
import { NpSidepanelFooterComponent } from './np-sidepanel-footer.component';

@NgModule({
  declarations: [NpSidepanelComponent, NpSidepanelHeaderComponent, NpSidepanelFooterComponent],
  imports: [
    CommonModule
  ],
  exports: [NpSidepanelComponent, NpSidepanelHeaderComponent, NpSidepanelFooterComponent]
})
export class NpSidepanelModule { }
