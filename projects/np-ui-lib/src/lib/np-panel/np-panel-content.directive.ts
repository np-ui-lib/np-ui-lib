import { Directive, TemplateRef } from '@angular/core';

@Directive({
    selector: '[npPanelContent]',
})
export class NpPanelContent {
    constructor(public template: TemplateRef<any>) { }
}
