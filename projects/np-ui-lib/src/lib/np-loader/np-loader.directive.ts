import { Directive, ElementRef, Input, OnChanges, SimpleChanges, Renderer2, AfterContentInit } from '@angular/core';

@Directive({ selector: '[np-loader]' })
export class NpLoaderDirective implements OnChanges, AfterContentInit {

    @Input('np-loader') show: boolean;
    @Input() loadingText: string;

    loaderEle: any;
    isActive = false;

    constructor(private elRef: ElementRef, private renderer: Renderer2) {
        const loader = this.renderer.createElement('div');
        this.renderer.addClass(loader, 'np-loader');
        this.loaderEle = this.renderer.createElement('div');
        this.renderer.addClass(this.loaderEle, 'np-loader-background');
        this.renderer.appendChild(this.loaderEle, loader);
    }

    ngAfterContentInit(): void {
        if (this.loadingText) {
            const loaderTextDiv = this.renderer.createElement('div');
            const loaderText = this.renderer.createText(this.loadingText);
            this.renderer.appendChild(loaderTextDiv, loaderText);
            this.renderer.addClass(loaderTextDiv, 'np-loader-text');
            this.renderer.appendChild(this.loaderEle, loaderTextDiv);
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.show.currentValue === true) {
            this._showLoader();
        } else {
            this._hideLoader();
        }
    }

    _showLoader() {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        this.renderer.addClass(this.elRef.nativeElement, 'np-loader-target');
        this.renderer.appendChild(this.elRef.nativeElement, this.loaderEle);
    }

    _hideLoader() {
        if (!this.isActive) {
            return;
        }
        this.isActive = false;
        this.renderer.removeClass(this.elRef.nativeElement, 'np-loader-target');
        this.renderer.removeChild(this.elRef.nativeElement, this.loaderEle);
    }
}
