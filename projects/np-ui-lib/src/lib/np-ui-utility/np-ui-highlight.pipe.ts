import { Injectable, Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'npUiHighLight'
})
@Injectable()
export class NpUiHightLightPipe implements PipeTransform {
    transform(text: string, subtext: string): any {
        if (subtext) {
            const re = new RegExp(subtext, 'gi');
            text = text.replace(re, "<b>" + subtext + "</b>");
        }
        return text;
    }
}