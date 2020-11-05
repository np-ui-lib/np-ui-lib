import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpFileUploadComponent } from './np-file-upload.component';
import { NpUtilityModule } from '../np-utility/np-utility.module';

@NgModule({
  declarations: [NpFileUploadComponent],
  imports: [
    CommonModule,
    NpUtilityModule
  ],
  exports: [NpFileUploadComponent]
})
export class NpFileUploadModule { }
