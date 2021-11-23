import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  Renderer2,
  OnInit,
} from "@angular/core";

@Directive({ selector: "[npLoader]" })
export class NpLoaderDirective implements OnChanges, OnInit {
  @Input("npLoader") show: boolean;
  @Input() diameter: number = 32;
  @Input() strokeWidth: number = 4;
  @Input() loadingText: string;

  loaderEle: any;
  isActive: boolean = false;
  initialized: boolean = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    const loader = this.renderer.createElement("div");
    this.renderer.setAttribute(loader, "role", "progressbar");
    this.renderer.setAttribute(loader, "aria-busy", "true");
    this.renderer.addClass(loader, "np-loader");
    this.renderer.setStyle(loader, "width", `${this.diameter}px`);
    this.renderer.setStyle(loader, "height", `${this.diameter}px`);
    this.renderer.setStyle(loader, "border-width", `${this.strokeWidth}px`);
    this.loaderEle = this.renderer.createElement("div");
    this.renderer.addClass(this.loaderEle, "np-loader-backdrop");
    this.renderer.appendChild(this.loaderEle, loader);
    if (this.loadingText) {
      const loaderTextDiv = this.renderer.createElement("div");
      const loaderText = this.renderer.createText(this.loadingText);
      this.renderer.appendChild(loaderTextDiv, loaderText);
      this.renderer.addClass(loaderTextDiv, "np-loader-text");
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

  _showLoader(): void {
    if (!this.initialized || this.isActive) {
      return;
    }
    this.renderer.addClass(this.elRef.nativeElement, "np-loader-target");
    this.renderer.appendChild(this.elRef.nativeElement, this.loaderEle);
    this.isActive = true;
  }

  _hideLoader(): void {
    if (!this.initialized || !this.isActive) {
      return;
    }
    this.renderer.removeClass(this.elRef.nativeElement, "np-loader-target");
    this.renderer.removeChild(this.elRef.nativeElement, this.loaderEle);
    this.isActive = false;
  }
}
