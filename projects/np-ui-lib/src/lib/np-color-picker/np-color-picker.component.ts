import {
  Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation, forwardRef, ViewChild, TemplateRef, ViewContainerRef, ElementRef, AfterViewInit, AfterContentInit
} from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";
import { Overlay, OverlayRef, OverlayPositionBuilder, ConnectedPosition } from "@angular/cdk/overlay";
import { TemplatePortal } from "@angular/cdk/portal";

@Component({
  selector: 'np-color-picker',
  templateUrl: 'np-color-picker.component.html',
  styleUrls: ['np-color-picker.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NpColorPickerComponent),
      multi: true
    }
  ]
})
export class NpColorPickerComponent implements ControlValueAccessor, AfterViewInit, AfterContentInit {

  _isOpen: boolean = false;
  _stripColor: string;
  _currentCursorColor: string;
  _xColorCursor: string;
  _yColorCursor: string;
  _isShowCursorDiv: boolean = false;
  _innerValue: any;
  _isDisabled: boolean = false;
  private onChangeCallback: (_: any) => void;
  private onTouchedCallback: () => void;

  @Input() colors: string[];
  @Input() placeholder: string = "";
  @Input() hideColorInput: boolean;
  @Input() defaultOpen: boolean;
  @Input() styleClass: string;
  @Output() onChange: EventEmitter<any> = new EventEmitter();

  @ViewChild("templatePortalContent") templatePortalContent: TemplateRef<any>;
  private templatePortal: TemplatePortal<any>;
  private overlayRef: OverlayRef;

  constructor(public overlay: Overlay,
    private _viewContainerRef: ViewContainerRef,
    private overlayPositionBuilder: OverlayPositionBuilder,
    private elementRef: ElementRef) {
  }

  ngAfterContentInit() {
    if (!this.colors) {
      this.colors = ['#FF0000', '#FF7F00', '#FFFF00', '#7FFF00', '#00FF00', '#00FF7F', '#00FFFF', '#007FFF', '#0000FF',
        '#7F00FF', '#FF00FF', '#FF007F', '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4',
        '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548',
        '#9e9e9e', '#607d8b', '#000000'];
    }
  }
  ngAfterViewInit() {
    var position: ConnectedPosition[] = [
      {
        originX: "start",
        originY: "bottom",
        overlayX: "start",
        overlayY: "top"
      },
      {
        originX: "start",
        originY: "top",
        overlayX: "start",
        overlayY: "bottom"
      }
    ];
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions(position);
    this.overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
      backdropClass: "np-cp-backdrop",
      scrollStrategy: this.overlay.scrollStrategies.reposition()
    });
    this.templatePortal = new TemplatePortal(
      this.templatePortalContent,
      this._viewContainerRef
    );
    this.overlayRef.backdropClick().subscribe(() => this._close());

    if (this.defaultOpen) {
      setTimeout(() => {
        this._updateStripCanvas();
        this._updateBlockCanvas();
      }, 10);
    }
  }

  get value(): any {
    return this._innerValue ? this._innerValue : null;
  };

  set value(v: any) {
    if (v !== this._innerValue) {
      this._innerValue = v;
      this._stripColor = v;
      this.onChangeCallback(v);
      this.onTouchedCallback();
      if (this.onChange) {
        this.onChange.emit(v);
      }
    }
  }

  writeValue(v: any): void {
    if (v !== this._innerValue) {
      this._innerValue = v;
      this._stripColor = v;
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this._isDisabled = isDisabled;
  }

  _toggleColorPicker() {
    if (this._isOpen) {
      this._close();
    } else {
      this._open();
    }
  }

  _open() {
    if (this.defaultOpen == true || this._isDisabled) {
      return;
    }
    this._isOpen = true;
    this._stripColor = this.value;
    this.onTouchedCallback();
    if (!this.overlayRef.hasAttached()) {
      this.overlayRef.attach(this.templatePortal);
    }
    setTimeout(() => {
      this._updateStripCanvas();
      this._updateBlockCanvas();
    }, 10);
  }

  _close() {
    if (this.defaultOpen) {
      return;
    }
    this._isShowCursorDiv = false;
    this._isOpen = false;
    this.overlayRef.detach();
  }

  _updateStripCanvas() {
    var strip;
    if (this.defaultOpen) {
      strip = <HTMLCanvasElement>this.elementRef.nativeElement.querySelector('.np-cp-canvas-strip');
    } else {
      strip = <HTMLCanvasElement>this.overlayRef.overlayElement.querySelector('.np-cp-canvas-strip');
    }
    var ctx2 = strip.getContext('2d');
    ctx2.rect(0, 0, 25, 170);
    var grd1 = ctx2.createLinearGradient(0, 0, 0, 170);
    grd1.addColorStop(0, '#FF0000');
    grd1.addColorStop(0.09, '#FF7F00');
    grd1.addColorStop(0.18, '#FFFF00');
    grd1.addColorStop(0.27, '#7FFF00');
    grd1.addColorStop(0.36, '#00FF00');
    grd1.addColorStop(0.45, '#00FF7F');
    grd1.addColorStop(0.54, '#00FFFF');
    grd1.addColorStop(0.63, '#007FFF');
    grd1.addColorStop(0.72, '#0000FF');
    grd1.addColorStop(0.81, '#7F00FF');
    grd1.addColorStop(0.90, '#FF00FF');
    grd1.addColorStop(1, '#FF007F');
    ctx2.fillStyle = grd1;
    ctx2.fill();
  }

  _updateBlockCanvas() {
    var block;
    if (this.defaultOpen) {
      block = <HTMLCanvasElement>this.elementRef.nativeElement.querySelector('.np-cp-canvas-block');
    } else {
      block = <HTMLCanvasElement>this.overlayRef.overlayElement.querySelector('.np-cp-canvas-block');
    }
    var ctx1 = block.getContext('2d');

    ctx1.fillStyle = this._stripColor ? this._stripColor : (this.value ? this.value : "#FF0000");
    ctx1.fillRect(0, 0, 170, 170);

    var grdWhite = ctx1.createLinearGradient(0, 0, 170, 0);
    grdWhite.addColorStop(0, 'rgba(255,255,255,1)');
    grdWhite.addColorStop(1, 'rgba(255,255,255,0)');
    ctx1.fillStyle = grdWhite;
    ctx1.fillRect(0, 0, 170, 170);

    var grdBlack = ctx1.createLinearGradient(0, 0, 0, 170);
    grdBlack.addColorStop(0, 'rgba(0,0,0,0)');
    grdBlack.addColorStop(1, 'rgba(0,0,0,1)');
    ctx1.fillStyle = grdBlack;
    ctx1.fillRect(0, 0, 170, 170);
  }

  _clickStripeColor(e: any) {
    this._stripColor = this._getColorFromClickevent(e, '.np-cp-canvas-strip');
    this._updateBlockCanvas();
  }

  _clickBlockColor(e: any) {
    this.value = this._getColorFromClickevent(e, '.np-cp-canvas-block');
  }

  _fullColorHex(r: number, g: number, b: number) {
    var red = this._rgbToHex(r);
    var green = this._rgbToHex(g);
    var blue = this._rgbToHex(b);
    return `#${red}${green}${blue}`;
  };

  _rgbToHex(rgb: number) {
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      hex = `0${hex}`;
    }
    return hex;
  };

  _onMouseLeaveStrip() {
    this._isShowCursorDiv = false;
  }

  _onMouseLeaveBlock() {
    this._isShowCursorDiv = false;
  }

  _onMouseOverStrip(e: any) {
    this._isShowCursorDiv = true;
    this._xColorCursor = `${e.pageX}px`;
    this._yColorCursor = `${e.pageY}px`;
    this._currentCursorColor = this._getColorFromClickevent(e, '.np-cp-canvas-strip');
  }

  _onMouseOverBlock(e: any) {
    this._isShowCursorDiv = true;
    this._xColorCursor = `${e.pageX}px`;
    this._yColorCursor = `${e.pageY}px`;
    this._currentCursorColor = this._getColorFromClickevent(e, '.np-cp-canvas-block');
  }

  _onClickColorBlock(color: string) {
    if (color == undefined || color == null) {
      this.value = null;
      return;
    }
    this.value = color;
    this._stripColor = color;
    this._updateBlockCanvas();
  }

  _currentHexToRGB() {
    return this._hexToRgb(this.value);
  }

  _hexToRgb(hexColor) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);
    var rgb = result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
    return rgb ? `${rgb.r}, ${rgb.g}, ${rgb.b}` : "";
  }

  getSelectedRGB() {
    return this._hexToRgb(this.value);
  }

  _clear() {
    if (this._isDisabled) {
      return;
    }
    this.value = null;
    this._close();
  }

  _onInputChange(event) {
    if (this.value && !this.value.includes('#')) {
      this.value = `#${event.target.value}`;
    } else {
      this.value = event.target.value;
    }
  }

  _getColorFromClickevent(e: any, clickedElement: string) {
    var strip;
    if (this.defaultOpen) {
      strip = <HTMLCanvasElement>this.elementRef.nativeElement.querySelector(clickedElement);
    } else {
      strip = <HTMLCanvasElement>this.overlayRef.overlayElement.querySelector(clickedElement);
    }
    var ctx2 = strip.getContext('2d');
    var x = e.offsetX;
    var y = e.offsetY;
    var imageData = ctx2.getImageData(x, y, 1, 1).data;
    return this._fullColorHex(imageData[0], imageData[1], imageData[2]);
  }
}
