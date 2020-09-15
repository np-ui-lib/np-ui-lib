import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpFileUploadComponent } from './np-file-upload.component';

@NgModule({
  declarations: [NpFileUploadComponent],
  imports: [
    CommonModule
  ],
  exports: [NpFileUploadComponent]
})
export class NpFileUploadModule { }
