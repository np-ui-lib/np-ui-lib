import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpDialogComponent } from './np-dialog.component';
import { FormsModule } from '@angular/forms';
import { NpModalModule } from '../np-modal/np-modal.module';
import { NpTranslationsModule } from '../np-translations/np-tranlations.module';

@NgModule({
  declarations: [NpDialogComponent],
  imports: [
    CommonModule,
    NpModalModule,
    FormsModule,
    NpTranslationsModule
  ],
  entryComponents: [NpDialogComponent],
  exports: [NpDialogComponent]
})
export class NpDialogModule { }
