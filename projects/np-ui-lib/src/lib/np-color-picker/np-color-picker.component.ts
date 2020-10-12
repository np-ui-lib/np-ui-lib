import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation, forwardRef, ViewChild, } from '@angular/core';
import { TemplateRef, ViewContainerRef, ElementRef, AfterViewInit, AfterContentInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Overlay, OverlayRef, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { TopBottomOverlayPositions } from '../np-utility/np-constants';

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
  static controlCount = 1;

  @Input() colors: string[];
  @Input() hideColorInput: boolean;
  @Input() defaultOpen: boolean;
  @Input() placeholder = '';
  @Input() readOnly: boolean;
  @Input() autoFocus: boolean;
  @Input() tabIndex: number;
  @Input() styleClass: string;
  @Input() inputId = `np-color-picker_${NpColorPickerComponent.controlCount++}`;

  @Output() onChange: EventEmitter<any> = new EventEmitter();

  @ViewChild('templatePortalContent') templatePortalContent: TemplateRef<any>;

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
  isShowCursorDiv = false;
  innerValue: string;
  isDisabled = false;

  private templatePortal: TemplatePortal<any>;
  private overlayRef: OverlayRef;
  private onChangeCallback: (_: any) => void = () => { };
  private onTouchedCallback: () => void = () => { };

  ngAfterContentInit() {
    if (!this.colors) {
      this.colors = ['#FF0000', '#FF7F00', '#FFFF00', '#7FFF00', '#00FF00', '#00FF7F', '#00FFFF', '#007FFF', '#0000FF',
        '#7F00FF', '#FF00FF', '#FF007F', '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4',
        '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548',
        '#9e9e9e', '#607d8b', '#000000'];
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
      this.onChangeCallback(v);
      this.onTouchedCallback();
      this.onChange.emit(v);
    }
  }

  writeValue(v: string): void {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.stripColor = v;
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
    this.isShowCursorDiv = false;
    this.isOpen = false;
    this.overlayRef.detach();
    this.elementRef.nativeElement.querySelector('input').focus();
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

    ctx1.fillStyle = this.stripColor ? this.stripColor : (this.value ? this.value : '#FF0000');
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
    this.stripColor = this._getColorFromClickevent(e, '.np-color-picker-strip');
    this._updateBlockCanvas();
  }

  _clickBlockColor(e: any) {
    this.value = this._getColorFromClickevent(e, '.np-color-picker-block');
  }

  _rgbStringToHex(rgbStr: string) {
    const rgbArray = rgbStr.split(',');
    return this._rgbToHex(rgbArray[0], rgbArray[1], rgbArray[2]);
  }

  _rgbToHex(r: any, g: any, b: any) {
    const red = this._convertToHex(r);
    const green = this._convertToHex(g);
    const blue = this._convertToHex(b);
    return `#${red}${green}${blue}`;
  }

  _convertToHex(rgb: any) {
    let hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      hex = `0${hex}`;
    }
    return hex;
  }

  _onMouseLeaveStrip() {
    this.isShowCursorDiv = false;
  }

  _onMouseLeaveBlock() {
    this.isShowCursorDiv = false;
  }

  _onMouseOverStrip(e: any) {
    this.isShowCursorDiv = true;
    this.xColorCursor = `${e.pageX}px`;
    this.yColorCursor = `${e.pageY}px`;
    this.currentCursorColor = this._getColorFromClickevent(e, '.np-color-picker-strip');
  }

  _onMouseOverBlock(e: any) {
    this.isShowCursorDiv = true;
    this.xColorCursor = `${e.pageX}px`;
    this.yColorCursor = `${e.pageY}px`;
    this.currentCursorColor = this._getColorFromClickevent(e, '.np-color-picker-block');
  }

  _onClickColorBlock(color: string) {
    if (color === undefined || color === null) {
      this.value = null;
      return;
    }
    this.value = color;
    this.stripColor = color;
    this._updateBlockCanvas();
  }

  _currentHexToRGB() {
    return this._hexToRgb(this.value);
  }

  _hexToRgb(hex: string) {
    if (!hex) {
      return '';
    }
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return `${r},${g},${b}`;
  }

  getSelectedRGB() {
    return this._hexToRgb(this.value);
  }

  setSelectedRGB(value: string) {
    this.value = this._rgbStringToHex(value);
  }

  _clear() {
    if (this.isDisabled || this.readOnly) {
      return;
    }
    this.value = null;
    this._close();
  }

  _onInputChange(event: { target: { value: string; }; }) {
    if (event.target.value && event.target.value.charAt(0) !== '#') {
      this.value = `#${event.target.value}`;
    } else {
      this.value = event.target.value;
    }
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
    const imageData = ctx2.getImageData(x, y, 1, 1).data;
    return this._rgbToHex(imageData[0], imageData[1], imageData[2]);
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

  _onBlur() {
    this.onTouchedCallback();
  }
}
