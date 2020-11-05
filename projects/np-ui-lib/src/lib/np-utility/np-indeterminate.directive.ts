import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[npIndeterminate]' })
export class NpIndeterminateDirective {
    @Input('npIndeterminate')
    set indeterminate(value: boolean) {
        this.elem.nativeElement.indeterminate = value;
    }
    constructor(private elem: ElementRef) {
    }
}
