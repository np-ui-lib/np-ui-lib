import { Component, Input, Output, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy, forwardRef, ElementRef, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NG_VALIDATORS, Validator } from '@angular/forms';

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

  @Input() steps = 1;
  @Input() min: number;
  @Input() max: number;
  @Input() pattern: string;
  @Input() prefixLabel: string;
  @Input() suffixLabel: string;
  @Input() showControls = true;
  @Input() placeholder = '';
  @Input() readOnly: boolean;
  @Input() autoFocus: boolean;
  @Input() tabIndex: number;
  @Input() styleClass: string;
  @Input() inputId = `np-number-box_${NpNumberBoxComponent.controlCount++}`;

  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Output() onFocus: EventEmitter<any> = new EventEmitter();
  @Output() onBlur: EventEmitter<any> = new EventEmitter();

  @ViewChild('control') inputViewChild: ElementRef;

  innerValue: number;
  isDisabled = false;
  focused = false;
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
    if (this.isDisabled || this.readOnly) {
      return;
    }
    this.value = this.value + this.steps;
  }

  _minus() {
    if (this.isDisabled || this.readOnly) {
      return;
    }
    this.value = this.value - this.steps;
  }

  _onMouseDownPlus() {
    const that = this;
    this._clearTimeout();
    this.timeout = setTimeout(() => {
      that._onMouseDownPlus();
    }, 200);
    that._add();
  }

  _onMouseUpPlus() {
    this._clearTimeout();
    this.inputViewChild.nativeElement.focus();
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
    this.inputViewChild.nativeElement.focus();
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
      this.value = Number(event.target.value);
    }
  }

  validate() {
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
    if (this.pattern) {
      const regex = new RegExp(this.pattern);
      if (this.value && !regex.test(this.value.toString())) {
        return {
          pattern: {
            valid: false,
          },
        };
      }
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
