import {
    NgModule, Directive, ElementRef, AfterViewInit, OnDestroy, TemplateRef,
    ViewContainerRef, Renderer2, EventEmitter, Output, ContentChild, Input
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Directive({
    selector: '[npDefer]'
})
export class NpDeferDirective implements AfterViewInit, OnDestroy {

    @Output() onLoad: EventEmitter<any> = new EventEmitter();

    @ContentChild(TemplateRef) template: TemplateRef<any>;

    documentScrollListener: Function;

    isLoaded = false;

    constructor(public el: ElementRef, public renderer: Renderer2, public viewContainer: ViewContainerRef) { }

    ngAfterViewInit() {
        if (this.shouldLoad()) {
            this.load();
        }
        if (!this.isLoaded) {
            this.documentScrollListener = this.renderer.listen('window', 'scroll', () => {
                if (this.shouldLoad()) {
                    this.load();
                }
            });
        }
    }

    shouldLoad(): boolean {
        if (this.isLoaded) {
            return false;
        }
        else {
            let rect = this.el.nativeElement.getBoundingClientRect();
            let docElement = document.documentElement;
            let winHeight = docElement.clientHeight;
            return (winHeight >= rect.top);
        }
    }

    load(): void {
        this.viewContainer.createEmbeddedView(this.template);
        this.isLoaded = true;
        this.documentScrollListener = null;
        this.onLoad.emit();
    }

    ngOnDestroy() {
        this.isLoaded = false;
    }
}

@NgModule({
    imports: [CommonModule],
    exports: [NpDeferDirective],
    declarations: [NpDeferDirective]
})
export class NpDeferModule { }