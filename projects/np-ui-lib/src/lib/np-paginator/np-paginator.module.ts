import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpPaginatorComponent } from './np-paginator.component';
import { NpTranslationsModule } from '../np-translations/np-tranlations.module';

@NgModule({
  declarations: [NpPaginatorComponent],
  imports: [
    CommonModule,
    NpTranslationsModule
  ],
  exports: [NpPaginatorComponent]
})
export class NpPaginatorModule { }
