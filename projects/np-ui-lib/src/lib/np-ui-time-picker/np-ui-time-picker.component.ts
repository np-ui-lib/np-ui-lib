import { Component, Input, Output, EventEmitter, HostListener, ElementRef, ViewEncapsulation, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'np-ui-time-picker',
  templateUrl: 'np-ui-time-picker.component.html',
  styleUrls: ['np-ui-time-picker.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NpUiTimePickerComponent),
      multi: true
    }
  ]
})
export class NpUiTimePickerComponent implements ControlValueAccessor {

  _hours: number[] = [];
  _minutes: number[] = [];
  _seconds: number[] = [];
  _isOpen = false;
  _selectedHour: number;
  _selectedMinute: number;
  _selectedSecond: number;
  _selectedAMPM = 'AM';
  _pattern: any;
  _innerValue: any;
  _isDisabled: boolean = false;
  private onChangeCallback: (_: any) => void;
  private onTouchedCallback: () => void;

  @Input() defaultOpen: boolean = false;
  @Input() is24Hours: boolean = false;
  @Input() showNowButton: boolean = false;
  @Input() hideSeconds: boolean = false;
  @Input() placeholder: string = "";
  @Input() styleClass: string;

  @Output() onChange: EventEmitter<any> = new EventEmitter();

  constructor(private elRef: ElementRef) {
    this._pattern = new RegExp("^(([0-9]{1,2}:[0-9]{1,2}:[0-9]{1,2}) ([AaPp][Mm]))$");
    for (var i = 0; i < 12; i++) {
      this._hours.push(i);
    }
    for (var i = 0; i < 60; i++) {
      this._minutes.push(i);
      this._seconds.push(i);
    }
  }

  @HostListener('document:click', ['$event'])
  clickOutSide(event: any) {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this._close();
    }
  }

  get value(): any {
    return this._innerValue ? this._innerValue : null;
  };

  set value(v: any) {
    if (v !== this._innerValue) {
      this._innerValue = v;
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
    this._isDisabled = isDisabled;
  }

  ngOnChanges(changes: any) {
    if (changes.is24Hours) {
      this._hours = [];
      if (changes.is24Hours.currentValue == true) {
        this._pattern = new RegExp("^([0-9]{1,2}:[0-9]{1,2}:[0-9]{1,2})$");
        for (var i = 0; i < 24; i++) {
          this._hours.push(i);
        }
      } else {
        this._pattern = new RegExp("^(([0-9]{1,2}:[0-9]{1,2}:[0-9]{1,2}) ([AaPp][Mm]))$");
        for (var i = 0; i < 12; i++) {
          this._hours.push(i);
        }
      }
    }
  }

  _minusHour() {
    this._selectedHour = this._selectedHour == 0 ? (this.is24Hours ? 23 : 11) : this._selectedHour - 1;
    this._setValue();
  }

  _minusMinute() {
    this._selectedMinute = this._selectedMinute == 0 ? 59 : this._selectedMinute - 1;
    if (this._selectedMinute == 59) {
      this._selectedHour = this._selectedHour == 0 ? (this.is24Hours ? 23 : 11) : this._selectedHour - 1;
    }
    this._setValue();
  }

  _minusSecond() {
    this._selectedSecond = this._selectedSecond == 0 ? 59 : this._selectedSecond - 1;
    if (this._selectedSecond == 59) {
      this._selectedMinute = this._selectedMinute == 0 ? 59 : this._selectedMinute - 1;
      if (this._selectedMinute == 59) {
        this._selectedHour = this._selectedHour == 0 ? (this.is24Hours ? 23 : 11) : this._selectedHour - 1;
      }
    }
    this._setValue();
  }

  _addHour() {
    if (this._selectedHour > (this.is24Hours ? 23 : 11)) {
      this._selectedHour = (this.is24Hours ? 23 : 11);
    }
    this._selectedHour = this._selectedHour == (this.is24Hours ? 23 : 11) ? 0 : this._selectedHour + 1;
    this._setValue();
  }

  _addMinute() {
    if (this._selectedMinute > 59) {
      this._selectedMinute = 59;
    }
    this._selectedMinute = this._selectedMinute == 59 ? 0 : this._selectedMinute + 1;
    if (this._selectedMinute == 0) {
      this._selectedHour = this._selectedHour == (this.is24Hours ? 23 : 11) ? 0 : this._selectedHour + 1;
    }
    this._setValue();
  }

  _addSecond() {
    if (this._selectedSecond > 59) {
      this._selectedSecond = 59;
    }
    this._selectedSecond = this._selectedSecond == 59 ? 0 : this._selectedSecond + 1;
    if (this._selectedSecond == 0) {
      this._selectedMinute = this._selectedMinute == 59 ? 0 : this._selectedMinute + 1;
      if (this._selectedMinute == 0) {
        this._selectedHour = this._selectedHour == (this.is24Hours ? 23 : 11) ? 0 : this._selectedHour + 1;
      }
    }
    this._setValue();
  }

  _changeTime($event: any, arg: string) {
    if (arg == "hour") {
      this._selectedHour = parseInt($event.target.value);
    }
    else if (arg == "minute") {
      this._selectedMinute = parseInt($event.target.value);
    }
    else if (arg == "second") {
      this._selectedSecond = parseInt($event.target.value);
    }
    else if (arg == "AMPM") {
      this._selectedAMPM = $event.target.value;
    }
    this._setValue();
  }

  _setValue() {
    if (this.is24Hours) {
      this.value = (this._selectedHour ? this._selectedHour : 0) + ":" + (this._selectedMinute ? this._selectedMinute : 0) + ":" + (this.hideSeconds ? 0 : (this._selectedSecond ? this._selectedSecond : 0));
    } else {
      this.value = (this._selectedHour ? this._selectedHour : 0) + ":" + (this._selectedMinute ? this._selectedMinute : 0) + ":" + (this.hideSeconds ? 0 : (this._selectedSecond ? this._selectedSecond : 0)) + " " + this._selectedAMPM;
    }
  }

  private timeConvert12to24(time: string) {
    var PM: boolean = time.match('PM') ? true : false;
    var timeArray: string[] = time.split(':');
    var min: string = timeArray[1];
    var hour: string;
    var sec: string;
    if (PM) {
      hour = (12 + parseInt(timeArray[0], 10)).toString();
      sec = timeArray[2].replace('PM', '');
    } else {
      hour = timeArray[0];
      sec = timeArray[2].replace('AM', '');
    }
    return hour + ':' + min + ':' + sec;
  }

  private timeConvert24to12(time: string) {
    var values = time.split(":");
    var hour24 = parseInt(values[0]);
    var hour12 = hour24 % 12 || 12;
    var ampm = (hour24 < 12 || hour24 === 24) ? "AM" : "PM";
    return hour12 + ":" + values[1] + ":" + values[2] + " " + ampm;
  }

  _toggleTimePicker() {
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
    this.onTouchedCallback();
  }

  _close() {
    if (this.defaultOpen) {
      return;
    }
    this._isOpen = false;
  }

  _extractValues() {
    if (this.value == undefined || this.value == null || !this._pattern.test(this.value)) {
      this._clearSelectedValue();
      return;
    }
    if (this.is24Hours == true) {
      var result24 = this.timeConvert12to24(this.value);
      var timeArray24 = result24.split(":");
      this._selectedHour = parseInt(timeArray24[0]);
      this._selectedMinute = parseInt(timeArray24[1]);
      this._selectedSecond = parseInt(timeArray24[2]);
    } else {
      var result = this.value.split(" ");
      this._selectedAMPM = result[1].toLowerCase() == "am" ? "AM" : "PM";
      var timeArray = result[0].split(":");
      this._selectedHour = parseInt(timeArray[0]);
      this._selectedMinute = parseInt(timeArray[1]);
      this._selectedSecond = parseInt(timeArray[2]);
    }

    var isChanged = false;
    if (this._selectedHour > (this.is24Hours ? 23 : 11)) {
      isChanged = true;
      this._selectedHour = (this.is24Hours ? 23 : 11);
    }
    if (this._selectedMinute > 59) {
      isChanged = true;
      this._selectedMinute = 59;
    }
    if (this._selectedSecond > 59) {
      isChanged = true;
      this._selectedSecond = 59;
    }
    if (isChanged) {
      this._setValue();
    }
  }

  _selectNowTime() {
    var today = new Date();
    var nowTime = today.getHours() + ":" + today.getMinutes() + ":" + (this.hideSeconds ? 0 : today.getSeconds());
    if (!this.is24Hours) {
      nowTime = this.timeConvert24to12(nowTime);
    }
    this.value = nowTime;
    this._extractValues();
    this._isOpen = false;
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
    if (this._isDisabled) {
      return;
    }
    this.value = null;
    this._clearSelectedValue();
    this._close();
  }

  _clearSelectedValue() {
    this._selectedHour = null;
    this._selectedMinute = null;
    this._selectedSecond = null;
  }
}
