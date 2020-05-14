import { Component, Input, Output, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'np-number-box',
  templateUrl: './np-number-box.component.html',
  styleUrls: ['./np-number-box.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NpNumberBoxComponent),
      multi: true
    }
  ]
})
export class NpNumberBoxComponent implements ControlValueAccessor {

  _isDisabled: boolean = false;
  _innerValue: number;

  @Input() placeholder: string = "";
  @Input() styleClass: string;
  @Input() counts: number = 1;
  @Input() min: number;
  @Input() max: number;
  @Output() onChange: EventEmitter<any> = new EventEmitter();

  private intervalOnMouseUp: any;
  private onChangeCallback: (_: any) => void;
  private onTouchedCallback: () => void;

  get value(): number {
    return this._innerValue ? this._innerValue : 0;
  }

  set value(v: number) {
    if (v !== this._innerValue) {
      this._innerValue = v;
      this.onChangeCallback(v);
      this.onTouchedCallback();
      this.onChange.emit(v);
    }
  }

  writeValue(v: number): void {
    if (v !== this._innerValue && this._isValid(v)) {
      this._innerValue = v;
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

  _add() {
    var newVal = this.value + this.counts;
    if (this._isValid(newVal)) {
      this.value = newVal;
    }
  }

  _minus() {
    var newVal = this.value - this.counts;
    if (this._isValid(newVal)) {
      this.value = newVal;
    }
  }

  _isValid(val: number) {
    if (this.min != undefined && val < this.min) {
      return false;
    }
    if (this.max != undefined && val > this.max) {
      return false;
    }
    return true;
  }

  _onBlur() {
    if (!this._isValid(this.value)) {
      this.value = 0;
    }
  }

  _onMouseDownAdd() {
    var that = this;
    this.intervalOnMouseUp = setInterval(function () {
      that._add();
    }, 100);
  }

  _onMouseUpAdd() {
    clearInterval(this.intervalOnMouseUp);
  }

  _onMouseDownMinus() {
    var that = this;
    this.intervalOnMouseUp = setInterval(function () {
      that._minus();
    }, 100);
  }

  _onMouseUpMinus() {
    clearInterval(this.intervalOnMouseUp);
  }

}
