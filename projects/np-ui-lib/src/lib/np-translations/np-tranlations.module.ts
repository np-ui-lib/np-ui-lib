import { NgModule } from '@angular/core';
import { NpTranslatePipe } from './np-translate.pipe';
import { NpTranslationsService } from './np-translations.service';

@NgModule({
    declarations: [NpTranslatePipe],
    exports: [NpTranslatePipe]
})
export class NpTranslationsModule { }
