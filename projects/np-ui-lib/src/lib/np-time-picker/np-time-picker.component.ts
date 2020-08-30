import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation, forwardRef, ViewChild } from '@angular/core';
import { TemplateRef, ViewContainerRef, ElementRef, AfterViewInit, AfterContentInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Overlay, OverlayRef, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { TopBottomOverlayPositions } from '../np-utility/np-constants';

@Component({
  selector: 'np-time-picker',
  templateUrl: 'np-time-picker.component.html',
  styleUrls: ['np-time-picker.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NpTimePickerComponent),
      multi: true
    }
  ]
})
export class NpTimePickerComponent implements ControlValueAccessor, AfterViewInit, AfterContentInit {
  static controlCount = 1;

  @Input() defaultOpen = false;
  @Input() is24Hours = false;
  @Input() showNowButton = false;
  @Input() hideSeconds = false;
  @Input() placeholder = '';
  @Input() readonly: boolean;
  @Input() autoFocus: boolean;
  @Input() styleClass: string;
  @Input() inputId = `np-time-picker_${NpTimePickerComponent.controlCount++}`;

  @Output() onChange: EventEmitter<any> = new EventEmitter();

  @ViewChild('templatePortalContent') templatePortalContent: TemplateRef<any>;

  hours: number[] = [];
  minutes: number[] = [];
  seconds: number[] = [];
  isOpen = false;
  selectedHour: number;
  selectedMinute: number;
  selectedSecond: number;
  selectedAMPM = 'AM';
  pattern: any;
  innerValue: string;
  isDisabled = false;
  private templatePortal: TemplatePortal<any>;
  private overlayRef: OverlayRef;
  private onChangeCallback: (_: any) => void = () => { };
  private onTouchedCallback: () => void = () => { };


  constructor(
    public overlay: Overlay,
    private viewContainerRef: ViewContainerRef,
    private overlayPositionBuilder: OverlayPositionBuilder,
    private elementRef: ElementRef
  ) {
  }

  ngAfterViewInit(): void {
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions(TopBottomOverlayPositions);
    this.overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
      backdropClass: 'np-time-picker-backdrop',
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      panelClass: this.styleClass
    });
    this.templatePortal = new TemplatePortal(
      this.templatePortalContent,
      this.viewContainerRef
    );
    this.overlayRef.backdropClick().subscribe(() => this._close());
  }

  get value(): string {
    return this.innerValue ? this.innerValue : null;
  }

  set value(v: string) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
      this.onTouchedCallback();
      this.onChange.emit(v);
    }
  }

  writeValue(v: string): void {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this._extractValues();
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

  ngAfterContentInit() {
    this.hours = [];
    if (this.is24Hours) {
      this.pattern = new RegExp('^([0-9]|0[0-9]|1[0-9]|2[0-3]):([0-9]|0[0-9]|[0-5][0-9]):([0-9]|0[0-9]|[0-5][0-9])$');
      for (let i = 0; i < 24; i++) {
        this.hours.push(i);
      }
    }
    else {
      this.pattern = new RegExp('^(1[0-1]|0?[1-9]):([0-9]|0[0-9]|[0-5][0-9]):([0-9]|0[0-9]|[0-5][0-9]) ?(AM|PM)$');
      for (let i = 0; i < 12; i++) {
        this.hours.push(i);
      }
    }
    for (let i = 0; i < 60; i++) {
      this.minutes.push(i);
      this.seconds.push(i);
    }
  }

  _minusHour() {
    this.selectedHour = this.selectedHour === null || this.selectedHour === 0 ? (this.is24Hours ? 23 : 11) : this.selectedHour - 1;
    this._setValue();
  }

  _minusMinute() {
    this.selectedMinute = this.selectedMinute === null || this.selectedMinute === 0 ? 59 : this.selectedMinute - 1;
    if (this.selectedMinute === 59) {
      this.selectedHour = this.selectedHour === null || this.selectedHour === 0 ? (this.is24Hours ? 23 : 11) : this.selectedHour - 1;
    }
    this._setValue();
  }

  _minusSecond() {
    this.selectedSecond = this.selectedSecond === null || this.selectedSecond === 0 ? 59 : this.selectedSecond - 1;
    if (this.selectedSecond === 59) {
      this.selectedMinute = this.selectedMinute === null || this.selectedMinute === 0 ? 59 : this.selectedMinute - 1;
      if (this.selectedMinute === 59) {
        this.selectedHour = this.selectedHour === null || this.selectedHour === 0 ? (this.is24Hours ? 23 : 11) : this.selectedHour - 1;
      }
    }
    this._setValue();
  }

  _addHour() {
    if (this.selectedHour > (this.is24Hours ? 23 : 11)) {
      this.selectedHour = (this.is24Hours ? 23 : 11);
    }
    this.selectedHour = this.selectedHour === null || this.selectedHour === (this.is24Hours ? 23 : 11) ? 0 : this.selectedHour + 1;
    this._setValue();
  }

  _addMinute() {
    if (this.selectedMinute > 59) {
      this.selectedMinute = 59;
    }
    this.selectedMinute = this.selectedMinute === null || this.selectedMinute === 59 ? 0 : this.selectedMinute + 1;
    if (this.selectedMinute === 0) {
      this.selectedHour = this.selectedHour === null || this.selectedHour === (this.is24Hours ? 23 : 11) ? 0 : this.selectedHour + 1;
    }
    this._setValue();
  }

  _addSecond() {
    if (this.selectedSecond > 59) {
      this.selectedSecond = 59;
    }
    this.selectedSecond = this.selectedSecond === null || this.selectedSecond === 59 ? 0 : this.selectedSecond + 1;
    if (this.selectedSecond === 0) {
      this.selectedMinute = this.selectedMinute === null || this.selectedMinute === 59 ? 0 : this.selectedMinute + 1;
      if (this.selectedMinute === 0) {
        this.selectedHour = this.selectedHour === null || this.selectedHour === (this.is24Hours ? 23 : 11) ? 0 : this.selectedHour + 1;
      }
    }
    this._setValue();
  }

  _changeTime($event: any, arg: string) {
    if (arg === 'hour') {
      this.selectedHour = Number($event.target.value);
    }
    else if (arg === 'minute') {
      this.selectedMinute = Number($event.target.value);
    }
    else if (arg === 'second') {
      this.selectedSecond = Number($event.target.value);
    }
    else if (arg === 'AMPM') {
      this.selectedAMPM = $event.target.value;
    }
    this._setValue();
  }

  _setValue() {
    if (this.is24Hours) {
      this.value = `${(this.selectedHour ? this.selectedHour : 0)}:${(this.selectedMinute ? this.selectedMinute : 0)}:${(this.hideSeconds ? 0 : (this.selectedSecond ? this.selectedSecond : 0))}`;
    } else {
      this.value = `${(this.selectedHour ? this.selectedHour : 0)}:${(this.selectedMinute ? this.selectedMinute : 0)}:${(this.hideSeconds ? 0 : (this.selectedSecond ? this.selectedSecond : 0))} ${this.selectedAMPM}`;
    }
  }

  private timeConvert12to24(time: string) {
    const PM: boolean = time.match('PM') ? true : false;
    const timeArray: string[] = time.split(':');
    const min: string = timeArray[1];
    let hour: string;
    let sec: string;
    if (PM) {
      hour = (12 + parseInt(timeArray[0], 10)).toString();
      sec = timeArray[2].replace('PM', '');
    } else {
      hour = timeArray[0];
      sec = timeArray[2].replace('AM', '');
    }
    return `${hour}:${min}:${sec}`;
  }

  private timeConvert24to12(time: string) {
    const values = time.split(':');
    const hour24 = Number(values[0]);
    const hour12 = hour24 % 12 || 12;
    const ampm = (hour24 < 12 || hour24 === 24) ? 'AM' : 'PM';
    return `${hour12}:${values[1]}:${values[2]} ${ampm}`;
  }

  _toggleTimePicker() {
    if (this.isOpen) {
      this._close();
    } else {
      this._open();
    }
  }

  _open() {
    if (this.defaultOpen === true || this.isDisabled || this.readonly) {
      return;
    }
    this.isOpen = true;
    if (!this.overlayRef.hasAttached()) {
      this.overlayRef.attach(this.templatePortal);
    }
  }

  _close() {
    if (this.defaultOpen) {
      return;
    }
    this.isOpen = false;
    this.overlayRef.detach();
    this.onTouchedCallback();
    this.elementRef.nativeElement.querySelector('input').focus();
  }

  _extractValues() {
    if (this.value === undefined || this.value === null || !this.pattern.test(this.value)) {
      this._clearSelectedValue();
      return;
    }
    if (this.is24Hours === true) {
      const result24 = this.timeConvert12to24(this.value);
      const timeArray24 = result24.split(':');
      this.selectedHour = Number(timeArray24[0]);
      this.selectedMinute = Number(timeArray24[1]);
      this.selectedSecond = Number(timeArray24[2]);
    } else {
      const result = this.value.split(' ');
      this.selectedAMPM = result[1].toLowerCase() === 'am' ? 'AM' : 'PM';
      const timeArray = result[0].split(':');
      this.selectedHour = Number(timeArray[0]);
      this.selectedMinute = Number(timeArray[1]);
      this.selectedSecond = Number(timeArray[2]);
    }

    let isChanged = false;
    if (this.selectedHour > (this.is24Hours ? 23 : 11)) {
      isChanged = true;
      this.selectedHour = (this.is24Hours ? 23 : 11);
    }
    if (this.selectedMinute > 59) {
      isChanged = true;
      this.selectedMinute = 59;
    }
    if (this.selectedSecond > 59) {
      isChanged = true;
      this.selectedSecond = 59;
    }
    if (isChanged) {
      this._setValue();
    }
  }

  _selectNowTime() {
    const today = new Date();
    let nowTime = `${today.getHours()}:${today.getMinutes()}:${(this.hideSeconds ? 0 : today.getSeconds())}`;
    if (!this.is24Hours) {
      nowTime = this.timeConvert24to12(nowTime);
    }
    this.value = nowTime;
    this._extractValues();
    this._close();
  }

  get24hrsTimeFormat() {
    if (this.is24Hours) {
      return this.value;
    }
    return this.timeConvert12to24(this.value);
  }

  get12hrsTimeFormat() {
    if (this.is24Hours) {
      return this.timeConvert24to12(this.value);
    }
    return this.value;
  }

  _clear() {
    if (this.isDisabled || this.readonly) {
      return;
    }
    this.value = null;
    this._clearSelectedValue();
    this._close();
  }

  _clearSelectedValue() {
    this.selectedHour = null;
    this.selectedMinute = null;
    this.selectedSecond = null;
  }

  _changeAMPM() {
    this.selectedAMPM = this.selectedAMPM === 'AM' ? 'PM' : 'AM';
    this._setValue();
  }

  _onKeydown(event: KeyboardEvent) {
    if (event.key === 'Tab') {
      this._close();
    }
  }

  _onInputChange($event) {
    let time = $event.target.value.trim();
    time = time.toUpperCase();
    let isValid = true;
    if (this.is24Hours) {
      const regex = new RegExp('^([0-9]|0[0-9]|1[0-9]|2[0-3]):([0-9]|0[0-9]|[0-5][0-9]):([0-9]|0[0-9]|[0-5][0-9])$');
      isValid = regex.test(time);
    } else {
      const regex = new RegExp('^(1[0-1]|0?[1-9]):([0-9]|0[0-9]|[0-5][0-9]):([0-9]|0[0-9]|[0-5][0-9]) ?(AM|PM)$');
      isValid = regex.test(time);
    }
    if (!isValid) {
      $event.target.value = '';
    }
    this.value = isValid ? time : null;
    this._extractValues();
  }
}
