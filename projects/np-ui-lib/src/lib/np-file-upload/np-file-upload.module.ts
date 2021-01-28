import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpFileUploadComponent } from './np-file-upload.component';
import { NpTranslationsModule } from '../np-translations/np-tranlations.module';
import { NpAutofocusModule } from '../np-utility/np-autofocus.module';

@NgModule({
  declarations: [NpFileUploadComponent],
  imports: [
    CommonModule,
    NpAutofocusModule,
    NpTranslationsModule
  ],
  exports: [NpFileUploadComponent]
})
export class NpFileUploadModule { }
