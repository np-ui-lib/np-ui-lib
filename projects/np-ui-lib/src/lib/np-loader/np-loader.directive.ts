import { Directive, ElementRef, Input, OnChanges, SimpleChanges, Renderer2, AfterContentInit } from '@angular/core';

@Directive({ selector: '[np-loader]' })
export class NpLoaderDirective implements OnChanges, AfterContentInit {

    @Input('np-loader') _show: boolean;
    @Input() loadingText: string;

    _loaderEle: any;
    _isActive: boolean = false;

    constructor(private elRef: ElementRef, private renderer: Renderer2) {
        var loader = this.renderer.createElement('div');
        this.renderer.addClass(loader, 'np-loader');
        this._loaderEle = this.renderer.createElement('div');
        this.renderer.addClass(this._loaderEle, 'np-loader-background');
        this.renderer.appendChild(this._loaderEle, loader);
    }

    ngAfterContentInit(): void {
        if (this.loadingText) {
            var loaderTextDiv = this.renderer.createElement('div');
            const loaderText = this.renderer.createText(this.loadingText);
            this.renderer.appendChild(loaderTextDiv, loaderText);
            this.renderer.addClass(loaderTextDiv, 'np-loader-text');
            this.renderer.appendChild(this._loaderEle, loaderTextDiv);
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes._show.currentValue == true) {
            this._showLoader();
        } else {
            this._hideLoader();
        }
    }

    _showLoader() {
        if (this._isActive) {
            return;
        }
        this._isActive = true;
        this.renderer.addClass(this.elRef.nativeElement, 'np-loader-target');
        this.renderer.appendChild(this.elRef.nativeElement, this._loaderEle);
    }

    _hideLoader() {
        if (!this._isActive) {
            return;
        }
        this._isActive = false;
        this.renderer.removeClass(this.elRef.nativeElement, 'np-loader-target');
        this.renderer.removeChild(this.elRef.nativeElement, this._loaderEle);
    }
}