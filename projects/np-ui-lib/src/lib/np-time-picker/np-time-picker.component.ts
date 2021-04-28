import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  forwardRef,
  ViewChild,
} from "@angular/core";
import {
  TemplateRef,
  ViewContainerRef,
  ElementRef,
  AfterViewInit,
  AfterContentInit,
} from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";
import {
  Overlay,
  OverlayRef,
  OverlayPositionBuilder,
} from "@angular/cdk/overlay";
import { TemplatePortal } from "@angular/cdk/portal";
import { TopBottomOverlayPositions } from "../np-utility/np-constants";

@Component({
  selector: "np-time-picker",
  templateUrl: "np-time-picker.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NpTimePickerComponent),
      multi: true,
    },
  ],
})
export class NpTimePickerComponent
  implements ControlValueAccessor, AfterViewInit, AfterContentInit {
  private static controlCount = 1;

  @Input() defaultOpen = false;
  @Input() is24Hours = false;
  @Input() showNowButton = false;
  @Input() hideSeconds = false;
  @Input() placeholder = "";
  @Input() readOnly: boolean;
  @Input() autoFocus: boolean;
  @Input() tabIndex: number;
  @Input() styleClass: string;
  @Input() inputId = `np-time-picker_${NpTimePickerComponent.controlCount++}`;

  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Output() onFocus: EventEmitter<any> = new EventEmitter();
  @Output() onBlur: EventEmitter<any> = new EventEmitter();

  @ViewChild("templatePortalContent") templatePortalContent: TemplateRef<any>;
  @ViewChild("control") inputViewChild: ElementRef;

  hours: number[] = [];
  minutes: number[] = [];
  seconds: number[] = [];
  isOpen = false;
  selectedHour: number;
  selectedMinute: number;
  selectedSecond: number;
  selectedAMPM = "AM";
  pattern: any;
  innerValue: string;
  isDisabled = false;
  focused = false;
  private templatePortal: TemplatePortal<any>;
  private overlayRef: OverlayRef;
  private onChangeCallback: (_: any) => void = () => {};
  private onTouchedCallback: () => void = () => {};

  constructor(
    public overlay: Overlay,
    private viewContainerRef: ViewContainerRef,
    private overlayPositionBuilder: OverlayPositionBuilder,
    private elementRef: ElementRef
  ) {}

  ngAfterViewInit(): void {
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions(TopBottomOverlayPositions);
    this.overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
      backdropClass: "np-time-picker-backdrop",
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      panelClass: this.styleClass,
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
    const hoursList = [];
    this.pattern = new RegExp(this._getRegEx());
    if (this.is24Hours) {
      for (let i = 0; i < 24; i++) {
        hoursList.push(i);
      }
    } else {
      for (let i = 0; i < 12; i++) {
        hoursList.push(i);
      }
    }
    this.hours = hoursList;
    const minuteAndSeconds = [];
    for (let i = 0; i < 60; i++) {
      minuteAndSeconds.push(i);
    }
    this.minutes = minuteAndSeconds;
    this.seconds = minuteAndSeconds;
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

  focus() {
    this.inputViewChild.nativeElement.focus();
  }

  _minusHour() {
    this.selectedHour =
      this.selectedHour === null || this.selectedHour === 0
        ? this.is24Hours
          ? 23
          : 11
        : this.selectedHour - 1;
    this._setValue();
  }

  _minusMinute() {
    this.selectedMinute =
      this.selectedMinute === null || this.selectedMinute === 0
        ? 59
        : this.selectedMinute - 1;
    if (this.selectedMinute === 59) {
      this.selectedHour =
        this.selectedHour === null || this.selectedHour === 0
          ? this.is24Hours
            ? 23
            : 11
          : this.selectedHour - 1;
    }
    this._setValue();
  }

  _minusSecond() {
    this.selectedSecond =
      this.selectedSecond === null || this.selectedSecond === 0
        ? 59
        : this.selectedSecond - 1;
    if (this.selectedSecond === 59) {
      this.selectedMinute =
        this.selectedMinute === null || this.selectedMinute === 0
          ? 59
          : this.selectedMinute - 1;
      if (this.selectedMinute === 59) {
        this.selectedHour =
          this.selectedHour === null || this.selectedHour === 0
            ? this.is24Hours
              ? 23
              : 11
            : this.selectedHour - 1;
      }
    }
    this._setValue();
  }

  _addHour() {
    if (this.selectedHour > (this.is24Hours ? 23 : 11)) {
      this.selectedHour = this.is24Hours ? 23 : 11;
    }
    this.selectedHour =
      this.selectedHour === null ||
      this.selectedHour === (this.is24Hours ? 23 : 11)
        ? 0
        : this.selectedHour + 1;
    this._setValue();
  }

  _addMinute() {
    if (this.selectedMinute > 59) {
      this.selectedMinute = 59;
    }
    this.selectedMinute =
      this.selectedMinute === null || this.selectedMinute === 59
        ? 0
        : this.selectedMinute + 1;
    if (this.selectedMinute === 0) {
      this.selectedHour =
        this.selectedHour === null ||
        this.selectedHour === (this.is24Hours ? 23 : 11)
          ? 0
          : this.selectedHour + 1;
    }
    this._setValue();
  }

  _addSecond() {
    if (this.selectedSecond > 59) {
      this.selectedSecond = 59;
    }
    this.selectedSecond =
      this.selectedSecond === null || this.selectedSecond === 59
        ? 0
        : this.selectedSecond + 1;
    if (this.selectedSecond === 0) {
      this.selectedMinute =
        this.selectedMinute === null || this.selectedMinute === 59
          ? 0
          : this.selectedMinute + 1;
      if (this.selectedMinute === 0) {
        this.selectedHour =
          this.selectedHour === null ||
          this.selectedHour === (this.is24Hours ? 23 : 11)
            ? 0
            : this.selectedHour + 1;
      }
    }
    this._setValue();
  }

  _changeTime($event: any, arg: string) {
    if (arg === "hour") {
      this.selectedHour = Number($event.target.value);
    } else if (arg === "minute") {
      this.selectedMinute = Number($event.target.value);
    } else if (arg === "second") {
      this.selectedSecond = Number($event.target.value);
    } else if (arg === "AMPM") {
      this.selectedAMPM = $event.target.value;
    }
    this._setValue();
  }

  _setValue() {
    if (this.is24Hours) {
      this.value = `${this._getHours()}:${this._getMinutes()}${this._getSeconds()}`;
    } else {
      this.value = `${this._getHours()}:${this._getMinutes()}${this._getSeconds()} ${
        this.selectedAMPM
      }`;
    }
  }

  _getHours() {
    return this.selectedHour
      ? this.selectedHour.toString().padStart(2, "0")
      : "00";
  }

  _getMinutes() {
    return this.selectedMinute
      ? this.selectedMinute.toString().padStart(2, "0")
      : "00";
  }

  _getSeconds() {
    return this.hideSeconds
      ? ""
      : ":" +
          (this.selectedSecond
            ? this.selectedSecond.toString().padStart(2, "0")
            : "00");
  }

  private timeConvert12to24(time: string) {
    const PM: boolean = time.match("PM") ? true : false;
    const timeArray: string[] = time.split(":");
    const min: string = timeArray[1];
    let hour: string;
    let sec: string;
    if (PM) {
      hour = (12 + parseInt(timeArray[0], 10)).toString();
      sec = timeArray[2].replace("PM", "");
    } else {
      hour = timeArray[0];
      sec = timeArray[2].replace("AM", "");
    }
    return `${hour}:${min}:${sec}`;
  }

  private timeConvert24to12(time: string) {
    const values = time.split(":");
    const hour24 = Number(values[0]);
    const hour12 = hour24 % 12 || 12;
    const ampm = hour24 < 12 || hour24 === 24 ? "AM" : "PM";
    return `${hour12
      .toString()
      .padStart(2, "0")}:${values[1]
      .toString()
      .padStart(2, "0")}:${values[2].toString().padStart(2, "0")} ${ampm}`;
  }

  _toggleTimePicker() {
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
    this.inputViewChild.nativeElement.focus();
  }

  _extractValues() {
    if (
      this.value === undefined ||
      this.value === null ||
      !this.pattern.test(this.value)
    ) {
      this._clearSelectedValue();
      return;
    }
    if (this.is24Hours === true) {
      const result24 = this.timeConvert12to24(this.value);
      const timeArray24 = result24.split(":");
      this.selectedHour = Number(timeArray24[0]);
      this.selectedMinute = Number(timeArray24[1]);
      if (!this.hideSeconds) {
        this.selectedSecond = Number(timeArray24[2]);
      }
    } else {
      const result = this.value.split(" ");
      this.selectedAMPM = result[1].toLowerCase() === "am" ? "AM" : "PM";
      const timeArray = result[0].split(":");
      this.selectedHour = Number(timeArray[0]);
      this.selectedMinute = Number(timeArray[1]);
      if (!this.hideSeconds) {
        this.selectedSecond = Number(timeArray[2]);
      }
    }

    let isChanged = false;
    if (this.selectedHour > (this.is24Hours ? 23 : 11)) {
      isChanged = true;
      this.selectedHour = this.is24Hours ? 23 : 11;
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
    let nowTime = `${today
      .getHours()
      .toString()
      .padStart(2, "0")}:${today.getMinutes().toString().padStart(2, "0")}${
      this.hideSeconds
        ? ""
        : ":" + today.getSeconds().toString().padStart(2, "0")
    }`;
    if (!this.is24Hours) {
      nowTime = this.timeConvert24to12(nowTime);
    }
    this.value = nowTime;
    this._extractValues();
    this._close();
  }

  _clear() {
    if (this.isDisabled || this.readOnly) {
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
    this.selectedAMPM = this.selectedAMPM === "AM" ? "PM" : "AM";
    this._setValue();
  }

  _onKeydown(event: KeyboardEvent) {
    if (event.key === "Tab" || event.key === "Escape") {
      this._close();
    }
    if (event.key === "ArrowDown") {
      this._open();
      event.preventDefault();
    }
  }

  _onInputChange($event) {
    let time = $event.target.value.trim();
    time = time.toUpperCase();
    const isValid = this.pattern.test(time);
    if (!isValid) {
      $event.target.value = "";
    }
    this.value = isValid ? time : null;
    this._extractValues();
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

  _getRegEx() {
    if (this.is24Hours) {
      if (this.hideSeconds) {
        return "^(0[0-9]|1[0-9]|2[0-3]):(0[0-9]|[0-5][0-9])$";
      } else {
        return "^(0[0-9]|1[0-9]|2[0-3]):(0[0-9]|[0-5][0-9]):(0[0-9]|[0-5][0-9])$";
      }
    } else {
      if (this.hideSeconds) {
        return "^(0[0-9]|1[0-1]):(0[0-9]|[0-5][0-9]) ?(AM|PM)$";
      } else {
        return "^(0[0-9]|1[0-1]):(0[0-9]|[0-5][0-9]):(0[0-9]|[0-5][0-9]) ?(AM|PM)$";
      }
    }
  }
}
