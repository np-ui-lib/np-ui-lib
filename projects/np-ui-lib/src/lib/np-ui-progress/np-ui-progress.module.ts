import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpUiProgressComponent } from './np-ui-progress.component';

@NgModule({
  declarations: [NpUiProgressComponent],
  imports: [
    CommonModule
  ],
  exports: [NpUiProgressComponent]
})
export class NpUiProgressModule { }
