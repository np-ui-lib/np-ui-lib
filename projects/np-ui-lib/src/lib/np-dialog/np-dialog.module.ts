import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpDialogComponent } from './np-dialog.component';
import { NpModalModule } from '../np-modal/np-modal.module';
import { FormsModule } from '@angular/forms';

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
