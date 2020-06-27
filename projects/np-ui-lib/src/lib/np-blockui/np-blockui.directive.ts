import { Directive, ElementRef, Input, OnChanges, SimpleChanges, Renderer2 } from '@angular/core';

@Directive({ selector: '[np-blockui]' })
export class NpBlockUiDirective implements OnChanges {

    @Input('np-blockui') visible: boolean;

    _element: any;
    _isActive: boolean = false;

    constructor(private elRef: ElementRef, private renderer: Renderer2) {
        var icon = '<svg class="np-icon" viewBox="0 0 24 24">' +
            '<path d="M0 0h24v24H0z" fill="none"/>' +
            '<path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>' +
            '</svg>';
        var blockui = this.renderer.createElement('div');
        this.renderer.addClass(blockui, 'np-blockui');
        blockui.innerHTML = icon;
        this._element = this.renderer.createElement('div');
        this.renderer.addClass(this._element, 'np-blockui-background');
        this.renderer.appendChild(this._element, blockui);
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.visible.currentValue == true) {
            this._show();
        } else {
            this._hide();
        }
    }

    _show() {
        if (this._isActive) {
            return;
        }
        this._isActive = true;
        this.renderer.addClass(this.elRef.nativeElement, 'np-blockui-target');
        this.renderer.appendChild(this.elRef.nativeElement, this._element);
    }

    _hide() {
        if (!this._isActive) {
            return;
        }
        this._isActive = false;
        this.renderer.removeClass(this.elRef.nativeElement, 'np-blockui-target');
        this.renderer.removeChild(this.elRef.nativeElement, this._element);
    }
}