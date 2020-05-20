import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpFileUploadComponent } from './np-file-upload.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NpFileUploadComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [NpFileUploadComponent]
})
export class NpFileUploadModule { }
