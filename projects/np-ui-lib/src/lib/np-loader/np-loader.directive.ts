import { Directive, ElementRef, Input, OnChanges, SimpleChanges, Renderer2, AfterContentInit, OnInit } from '@angular/core';

@Directive({ selector: '[np-loader]' })
export class NpLoaderDirective implements OnChanges, OnInit {

    @Input('np-loader') show: boolean;
    @Input() diameter = 32;
    @Input() strokeWidth = 2;
    @Input() loadingText: string;

    loaderEle: any;
    isactive = false;
    initialized = false;

    constructor(private elRef: ElementRef, private renderer: Renderer2) {

    }

    ngOnInit(): void {
        const loader = this.renderer.createElement('div');
        this.renderer.addClass(loader, 'np-loader');
        this.renderer.setStyle(loader, 'width', `${this.diameter}px`);
        this.renderer.setStyle(loader, 'height', `${this.diameter}px`);
        this.renderer.setStyle(loader, 'border-width', `${this.strokeWidth}px`);
        this.loaderEle = this.renderer.createElement('div');
        this.renderer.addClass(this.loaderEle, 'np-loader-backdrop');
        this.renderer.appendChild(this.loaderEle, loader);
        if (this.loadingText) {
            const loaderTextDiv = this.renderer.createElement('div');
            const loaderText = this.renderer.createText(this.loadingText);
            this.renderer.appendChild(loaderTextDiv, loaderText);
            this.renderer.addClass(loaderTextDiv, 'np-loader-text');
            this.renderer.appendChild(this.loaderEle, loaderTextDiv);
        }
        this.initialized = true;
    }

    ngOnChanges(changes: SimpleChanges): void {
        setTimeout(() => {
            if (this.initialized) {
                if (changes.show.currentValue === true) {
                    this._showLoader();
                } else {
                    this._hideLoader();
                }
            }
        }, 10);
    }

    _showLoader() {
        if (!this.initialized || this.isactive) {
            return;
        }
        this.renderer.addClass(this.elRef.nativeElement, 'np-loader-target');
        this.renderer.appendChild(this.elRef.nativeElement, this.loaderEle);
        this.isactive = true;
    }

    _hideLoader() {
        if (!this.initialized || !this.isactive) {
            return;
        }
        this.renderer.removeClass(this.elRef.nativeElement, 'np-loader-target');
        this.renderer.removeChild(this.elRef.nativeElement, this.loaderEle);
        this.isactive = false;
    }
}
