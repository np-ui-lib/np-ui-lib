import { Directive, TemplateRef } from '@angular/core';

@Directive({
    selector: '[npAccordionContent]',
})
export class NpAccordionContent {
    constructor(public template: TemplateRef<any>) { }
}
