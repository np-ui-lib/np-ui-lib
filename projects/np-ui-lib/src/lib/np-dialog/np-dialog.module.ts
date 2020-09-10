import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpDialogComponent } from './np-dialog.component';
import { FormsModule } from '@angular/forms';
import { NpModalModule } from '../np-modal/np-modal.module';

@NgModule({
  declarations: [NpDialogComponent],
  imports: [
    CommonModule,
    NpModalModule,
    FormsModule
  ],
  exports: [NpDialogComponent]
})
export class NpDialogModule { }
