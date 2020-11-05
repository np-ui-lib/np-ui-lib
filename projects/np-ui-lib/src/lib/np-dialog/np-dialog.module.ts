import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpDialogComponent } from './np-dialog.component';
import { FormsModule } from '@angular/forms';
import { NpModalModule } from '../np-modal/np-modal.module';
import { NpUtilityModule } from '../np-utility/np-utility.module';

@NgModule({
  declarations: [NpDialogComponent],
  imports: [
    CommonModule,
    NpModalModule,
    FormsModule,
    NpUtilityModule
  ],
  exports: [NpDialogComponent]
})
export class NpDialogModule { }
