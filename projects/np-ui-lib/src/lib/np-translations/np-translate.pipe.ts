import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { NpTranslationsService } from './np-translations.service';
@Pipe({
    name: 'npTranslate'
})
@Injectable()
export class NpTranslatePipe implements PipeTransform {
    constructor(private translationService: NpTranslationsService) {

    }
    transform(key: string): string {
        return this.translationService.translate(key);
    }
}
