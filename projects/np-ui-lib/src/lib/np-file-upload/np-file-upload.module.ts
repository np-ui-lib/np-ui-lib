import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpFileUploadComponent } from './np-file-upload.component';
import { NpUtilityModule } from '../np-utility/np-utility.module';
import { NpTranslationsModule } from '../np-translations/np-tranlations.module';

@NgModule({
  declarations: [NpFileUploadComponent],
  imports: [
    CommonModule,
    NpUtilityModule,
    NpTranslationsModule
  ],
  exports: [NpFileUploadComponent]
})
export class NpFileUploadModule { }
