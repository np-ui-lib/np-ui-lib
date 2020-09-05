import { Directive, TemplateRef } from '@angular/core';

@Directive({
    selector: '[npTabContent]',
})
export class NpTabContent {
    constructor(public template: TemplateRef<any>) { }
}
