import { Injectable, Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'npUiHighLight'
})
@Injectable()
export class NpUiHightLightPipe implements PipeTransform {
    transform(text: string, subtext: string, className?: string): any {
        if (subtext) {
            const re = new RegExp(subtext, 'gi');
            const cssClass = className ? className : 'np-ui-highlight';
            text = text.replace(re, "<span class='" + cssClass + "'>" + subtext + "</span>");
        }
        return text;
    }
}