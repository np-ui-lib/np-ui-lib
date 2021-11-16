import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  Renderer2,
} from "@angular/core";

@Directive({ selector: "[npBlockUi]" })
export class NpBlockUiDirective implements OnChanges {
  @Input("npBlockUi") visible: boolean;

  element: any;
  isActive = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    const icon = `<svg class="np-icon" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
        </svg>`;
    const blockUi = this.renderer.createElement("div");
    this.renderer.addClass(blockUi, "np-blockui");
    blockUi.innerHTML = icon;
    this.element = this.renderer.createElement("div");
    this.renderer.addClass(this.element, "np-blockui-backdrop");
    this.renderer.appendChild(this.element, blockUi);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.visible.currentValue === true) {
      this._show();
    } else {
      this._hide();
    }
  }

  _show(): void {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.renderer.addClass(this.elRef.nativeElement, "np-blockui-target");
    this.renderer.appendChild(this.elRef.nativeElement, this.element);
  }

  _hide(): void {
    if (!this.isActive) {
      return;
    }
    this.isActive = false;
    this.renderer.removeClass(this.elRef.nativeElement, "np-blockui-target");
    this.renderer.removeChild(this.elRef.nativeElement, this.element);
  }
}
