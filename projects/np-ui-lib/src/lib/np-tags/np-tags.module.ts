import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpTagsComponent } from './np-tags.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { NpTranslationsModule } from '../np-translations/np-tranlations.module';
import { NpAutofocusModule } from '../np-utility/np-autofocus.module';
import { NpOrderByModule } from '../np-utility/np-orderby.module';
import { NpHightlightModule } from '../np-utility/np-highlight.module';

@NgModule({
  declarations: [NpTagsComponent],
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule,
    NpAutofocusModule,
    NpTranslationsModule,
    NpOrderByModule,
    NpHightlightModule
  ],
  exports: [NpTagsComponent]
})
export class NpTagsModule { }
