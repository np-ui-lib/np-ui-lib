import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation, forwardRef, ViewChild, } from '@angular/core';
import { TemplateRef, ViewContainerRef, ElementRef, AfterViewInit, AfterContentInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Overlay, OverlayRef, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { TopBottomOverlayPositions } from '../np-utility/np-constants';

@Component({
  selector: 'np-color-picker',
  templateUrl: 'np-color-picker.component.html',
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
  static controlCount = 1;

  /* forma can be 'hex' or 'rgb' */
  @Input() format = 'hex';
  @Input() colors: string[];
  @Input() defaultOpen: boolean;
  @Input() readOnly: boolean;
  @Input() autoFocus: boolean;
  @Input() tabIndex: number;
  @Input() styleClass: string;
  @Input() inputId = `np-color-picker_${NpColorPickerComponent.controlCount++}`;

  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Output() onFocus: EventEmitter<any> = new EventEmitter();
  @Output() onBlur: EventEmitter<any> = new EventEmitter();

  @ViewChild('templatePortalContent') templatePortalContent: TemplateRef<any>;
  @ViewChild('control') inputViewChild: ElementRef;

  constructor(
    public overlay: Overlay,
    private viewContainerRef: ViewContainerRef,
    private overlayPositionBuilder: OverlayPositionBuilder,
    private elementRef: ElementRef) {
  }

  isOpen = false;
  stripColor: string;
  currentCursorColor: string;
  xColorCursor: string;
  yColorCursor: string;
  innerValue: string;
  isDisabled = false;
  currentHex = '';
  currentR: number;
  currentG: number;
  currentB: number;
  focused = false;

  private templatePortal: TemplatePortal<any>;
  private overlayRef: OverlayRef;
  private onChangeCallback: (_: any) => void = () => { };
  private onTouchedCallback: () => void = () => { };

  ngAfterContentInit() {
    if (!this.colors) {
      if (this.format === 'hex') {
        this.colors = ['#FF0000', '#FF7F00', '#FFFF00', '#7FFF00', '#00FF00', '#00FF7F', '#00FFFF', '#007FFF', '#0000FF',
          '#7F00FF', '#FF00FF', '#FF007F', '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4',
          '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548',
          '#9e9e9e', '#607d8b', '#000000'];
      } else {
        this.colors = ['rgb(255,0,0)', 'rgb(255,127,0)', 'rgb(255,255,0)', 'rgb(127,255,0)', 'rgb(0,255,0)', 'rgb(0,255,127)',
          'rgb(0,255,255)', 'rgb(0,127,255)', 'rgb(0,0,255)', 'rgb(127,0,255)', 'rgb(255,0,255)', 'rgb(255,0,127)',
          'rgb(244,67,54)', 'rgb(244,67,54)', 'rgb(156,39,176)', 'rgb(103,58,183)', 'rgb(63,81,181)', 'rgb(33,150,243)',
          'rgb(3,169,244)', 'rgb(0,188,212)', 'rgb(0,150,136)', 'rgb(76,175,80)', 'rgb(139,195,74)', 'rgb(205,220,57)',
          'rgb(255,235,59)', 'rgb(255,193,7)', 'rgb(255,152,0)', 'rgb(255,87,34)', 'rgb(121,85,72)', 'rgb(158,158,158)',
          'rgb(96,125,139)', 'rgb(0,0,0)'];
      }
    }
  }
  ngAfterViewInit() {
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions(TopBottomOverlayPositions);
    this.overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
      backdropClass: 'np-color-picker-backdrop',
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      panelClass: this.styleClass
    });
    this.templatePortal = new TemplatePortal(
      this.templatePortalContent,
      this.viewContainerRef
    );
    this.overlayRef.backdropClick().subscribe(() => this._close());

    if (this.defaultOpen) {
      setTimeout(() => {
        this._updateStripCanvas();
        this._updateBlockCanvas();
      }, 10);
    }
  }

  get value(): string {
    return this.innerValue ? this.innerValue : null;
  }

  set value(v: string) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.stripColor = v;
      this._setCurrentValues(v);
      this.onChangeCallback(v);
      this.onChange.emit(v);
    }
  }

  writeValue(v: string): void {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.stripColor = v;
      this._setCurrentValues(v);
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  _toggleColorPicker() {
    if (this.isOpen) {
      this._close();
    } else {
      this._open();
    }
  }

  _open() {
    if (this.defaultOpen === true || this.isDisabled || this.readOnly) {
      return;
    }
    this.isOpen = true;
    this.stripColor = this.value;
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
    this.isOpen = false;
    this.overlayRef.detach();
    this.inputViewChild.nativeElement.focus();
  }

  _updateStripCanvas() {
    let strip: HTMLCanvasElement;
    if (this.defaultOpen) {
      strip = (this.elementRef.nativeElement.querySelector('.np-color-picker-strip') as HTMLCanvasElement);
    } else {
      strip = (this.overlayRef.overlayElement.querySelector('.np-color-picker-strip') as HTMLCanvasElement);
    }
    const ctx2 = strip.getContext('2d');
    ctx2.rect(0, 0, 25, 170);
    const grd1 = ctx2.createLinearGradient(0, 0, 0, 170);
    grd1.addColorStop(0, 'rgba(255, 0, 0, 1)');
    grd1.addColorStop(0.17, 'rgba(255, 255, 0, 1)');
    grd1.addColorStop(0.34, 'rgba(0, 255, 0, 1)');
    grd1.addColorStop(0.51, 'rgba(0, 255, 255, 1)');
    grd1.addColorStop(0.68, 'rgba(0, 0, 255, 1)');
    grd1.addColorStop(0.85, 'rgba(255, 0, 255, 1)');
    grd1.addColorStop(1, 'rgba(255, 0, 0, 1)');
    ctx2.fillStyle = grd1;
    ctx2.fill();
  }

  _updateBlockCanvas() {
    let block: HTMLCanvasElement;
    if (this.defaultOpen) {
      block = (this.elementRef.nativeElement.querySelector('.np-color-picker-block') as HTMLCanvasElement);
    } else {
      block = (this.overlayRef.overlayElement.querySelector('.np-color-picker-block') as HTMLCanvasElement);
    }
    const ctx1 = block.getContext('2d');

    ctx1.fillStyle = this.stripColor ? this.stripColor : (this.value ? this.value : 'rgb(255,0,0)');
    ctx1.fillRect(0, 0, 170, 170);

    const grdWhite = ctx1.createLinearGradient(0, 0, 170, 0);
    grdWhite.addColorStop(0, 'rgba(255,255,255,1)');
    grdWhite.addColorStop(1, 'rgba(255,255,255,0)');
    ctx1.fillStyle = grdWhite;
    ctx1.fillRect(0, 0, 170, 170);

    const grdBlack = ctx1.createLinearGradient(0, 0, 0, 170);
    grdBlack.addColorStop(0, 'rgba(0,0,0,0)');
    grdBlack.addColorStop(1, 'rgba(0,0,0,1)');
    ctx1.fillStyle = grdBlack;
    ctx1.fillRect(0, 0, 170, 170);
  }

  _clickStripeColor(e: any) {
    const imageData = this._getColorFromClickevent(e, '.np-color-picker-strip');
    this.stripColor = this.format === 'rgb'
      ? `rgb(${imageData[0]},${imageData[1]},${imageData[2]})`
      : this._rgbToHex(imageData[0], imageData[1], imageData[2]);
    this._updateBlockCanvas();
  }

  _clickBlockColor(e: any) {
    const imageData = this._getColorFromClickevent(e, '.np-color-picker-block');
    this.value = this.format === 'rgb'
      ? `rgb(${imageData[0]},${imageData[1]},${imageData[2]})`
      : this._rgbToHex(imageData[0], imageData[1], imageData[2]);
  }

  _rgbToHex(r: any, g: any, b: any) {
    const red = this._convertNumberToHex(r);
    const green = this._convertNumberToHex(g);
    const blue = this._convertNumberToHex(b);
    return `#${red}${green}${blue}`;
  }

  _convertNumberToHex(num: any) {
    let hex = Number(num).toString(16);
    if (hex.length < 2) {
      hex = `0${hex}`;
    }
    return hex;
  }

  _hexToRgb(hex: string) {
    if (!hex) {
      return null;
    }
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return { r, g, b };
  }

  _onClickColorBlock(color: string) {
    this.value = color;
    this.stripColor = this.value;
    this._updateBlockCanvas();
  }

  _clear() {
    if (this.isDisabled || this.readOnly) {
      return;
    }
    this.value = null;
    this._close();
  }

  _getColorFromClickevent(e: any, clickedElement: string) {
    let strip: HTMLCanvasElement;
    if (this.defaultOpen) {
      strip = (this.elementRef.nativeElement.querySelector(clickedElement) as HTMLCanvasElement);
    } else {
      strip = (this.overlayRef.overlayElement.querySelector(clickedElement) as HTMLCanvasElement);
    }
    const ctx2 = strip.getContext('2d');
    const x = e.offsetX;
    const y = e.offsetY;
    return ctx2.getImageData(x, y, 1, 1).data;
  }

  _onKeydown(event: KeyboardEvent) {
    if (event.key === 'Tab' || event.key === 'Escape') {
      this._close();
    }
    if (event.key === 'ArrowDown') {
      this._open();
      event.preventDefault();
    }
  }

  _onChangeHex(event) {
    let val = event.target.value;
    if (val && val.charAt(0) !== '#') {
      val = `#${event.target.value}`;
    }
    if (this.format === 'hex') {
      this.value = val;
    } else {
      const rgb = this._hexToRgb(val);
      this.value = `rgb(${rgb.r},${rgb.g},${rgb.b})`;
    }
    this._updateBlockCanvas();
  }

  _onChangeR(event) {
    if (this.format === 'hex') {
      this.value = this._rgbToHex(event.target.value, this.currentG, this.currentB);
    } else {
      this.value = `rgb(${event.target.value},${this.currentG},${this.currentB})`;
    }
    this._updateBlockCanvas();
  }

  _onChangeG(event) {
    if (this.format === 'hex') {
      this.value = this._rgbToHex(this.currentR, event.target.value, this.currentB);
    } else {
      this.value = `rgb(${this.currentR},${event.target.value},${this.currentB})`;
    }
    this._updateBlockCanvas();
  }

  _onChangeB(event) {
    if (this.format === 'hex') {
      this.value = this._rgbToHex(this.currentR, this.currentG, event.target.value);
    } else {
      this.value = `rgb(${this.currentR},${this.currentG},${event.target.value})`;
    }
    this._updateBlockCanvas();
  }

  _setCurrentValues(val: string) {
    if (!val) {
      this.currentHex = '';
      this.currentR = null;
      this.currentG = null;
      this.currentB = null;
      return;
    }
    if (this.format === 'hex') {
      this.currentHex = val;
      const rgb = this._hexToRgb(val);
      if (rgb) {
        this.currentR = rgb.r;
        this.currentG = rgb.g;
        this.currentB = rgb.b;
      }
    } else {
      const rgb = val.replace('rgb', '').replace('(', '').replace(')', '').replace(' ', '');
      const rgbAray = rgb.split(',');
      this.currentR = Number(rgbAray[0]);
      this.currentG = Number(rgbAray[1]);
      this.currentB = Number(rgbAray[2]);
      this.currentHex = this._rgbToHex(this.currentR, this.currentG, this.currentB);
    }
  }

  _onBlur($event) {
    this.focused = false;
    this.onTouchedCallback();
    this.onBlur.emit($event);
  }

  _onFocus($event) {
    this.focused = true;
    this.onFocus.emit($event);
  }

  focus() {
    this.inputViewChild.nativeElement.focus();
  }
}
