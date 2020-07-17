import { Component, Input, Output, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NG_VALIDATORS, Validator, FormControl } from '@angular/forms';

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
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => NpNumberBoxComponent),
      multi: true,
    }
  ]
})
export class NpNumberBoxComponent implements ControlValueAccessor, Validator {
  static controlCount = 1;

  @Input() placeholder = '';
  @Input() styleClass: string;
  @Input() steps = 1;
  @Input() min: number;
  @Input() max: number;
  @Input() format: string;
  @Input() showControls = true;
  @Input() inputId = `np-number-box_${NpNumberBoxComponent.controlCount++}`;
  @Input() readonly: boolean;
  @Output() onChange: EventEmitter<any> = new EventEmitter();

  innerValue: number;
  isDisabled = false;
  private timeout: any;
  private onChangeCallback: (_: any) => void = () => { };
  private onTouchedCallback: () => void = () => { };

  get value(): number {
    return this.innerValue !== undefined ? this.innerValue : null;
  }

  set value(v: number) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
      this.onTouchedCallback();
      this.onChange.emit(v);
    }
  }

  writeValue(v: number): void {
    if (v !== this.innerValue) {
      this.innerValue = v;
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

  _add() {
    if (this.isDisabled || this.readonly) {
      return;
    }
    this.value = this.value + this.steps;
  }

  _minus() {
    if (this.isDisabled || this.readonly) {
      return;
    }
    this.value = this.value - this.steps;
  }

  _onMouseDownAdd() {
    const that = this;
    this._clearTimeout();
    this.timeout = setTimeout(() => {
      that._onMouseDownAdd();
    }, 200);
    that._add();
  }

  _onMouseUpAdd() {
    this._clearTimeout();
  }

  _onMouseDownMinus() {
    const that = this;
    this._clearTimeout();
    this.timeout = setTimeout(() => {
      that._onMouseDownMinus();
    }, 200);
    that._minus();
  }

  _onMouseUpMinus() {
    this._clearTimeout();
  }

  _clearTimeout() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  _onInputChange(event) {
    if (isNaN(parseFloat(event.target.value))) {
      this.value = null;
    } else {
      this.value = event.target.value;
    }
  }

  validate(control: FormControl) {
    if (this.min !== undefined && this.value < this.min) {
      return {
        min: {
          valid: false,
        },
      };
    }
    if (this.max !== undefined && this.value > this.max) {
      return {
        max: {
          valid: false,
        },
      };
    }
    if (this.format) {
      const regex = this._createValidationRegEx();
      if (this.value && !regex.test(this.value.toString())) {
        return {
          format: {
            valid: false,
          },
        };
      }
    }
  }

  _createValidationRegEx() {
    const format = this.format
      .replace(/[^#\.\,]/g, '')
      .replace(/#/g, '\\d')
      .replace(/\./g, '\\.');
    return new RegExp('^' + format + '$', 'g');
  }
}
