import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, forwardRef, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator } from '@angular/forms';

@Component({
  selector: 'np-input-text',
  templateUrl: './np-input-text.component.html',
  styleUrls: ['./np-input-text.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NpInputTextComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => NpInputTextComponent),
      multi: true,
    }
  ]
})
export class NpInputTextComponent implements ControlValueAccessor, Validator {
  static controlCount = 1;

  @Input() minLength: number;
  @Input() maxLength: number;
  @Input() pattern: string;
  @Input() prefixLabel: string;
  @Input() suffixLabel: string;
  @Input() placeholder = '';
  @Input() readOnly: boolean;
  @Input() autoFocus: boolean;
  @Input() tabIndex: number;
  @Input() styleClass: string;
  @Input() inputId = `np-input-text_${NpInputTextComponent.controlCount++}`;

  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Output() onFocus: EventEmitter<any> = new EventEmitter();
  @Output() onBlur: EventEmitter<any> = new EventEmitter();

  @ViewChild('control') inputViewChild: ElementRef;

  innerValue: string;
  isDisabled = false;
  focused = false;

  private onChangeCallback: (_: any) => void = () => { };
  private onTouchedCallback: () => void = () => { };

  constructor() { }

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

  validate() {
    if (this.minLength !== undefined && this.value && this.value.length < this.minLength) {
      return {
        minLength: {
          valid: false,
        },
      };
    }
    if (this.maxLength !== undefined && this.value && this.value.length > this.maxLength) {
      return {
        maxLength: {
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

  _onInputChange(event) {
    this.value = event.target.value;
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
