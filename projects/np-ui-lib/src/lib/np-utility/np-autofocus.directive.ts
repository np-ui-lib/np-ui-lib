import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[npAutoFocus]'
})
export class NpAutoFocusDirective {
    @Input('npAutoFocus')
    set indeterminate(value: boolean) {
        if (value) {
            setTimeout(() => {
                this.el.nativeElement.focus();
            }, 100);
        }
    }
    constructor(private el: ElementRef) {
    }
}
