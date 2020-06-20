import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[indeterminate]' })
export class NpIndeterminate {
    @Input()
    set indeterminate(value: boolean) {
        this.elem.nativeElement.indeterminate = value;
    }
    constructor(private elem: ElementRef) {
    }
}