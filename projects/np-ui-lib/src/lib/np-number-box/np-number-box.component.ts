import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  forwardRef,
  ElementRef,
  ViewChild,
} from "@angular/core";
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  NG_VALIDATORS,
  Validator,
} from "@angular/forms";

@Component({
  selector: "np-number-box",
  templateUrl: "./np-number-box.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NpNumberBoxComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => NpNumberBoxComponent),
      multi: true,
    },
  ],
})
export class NpNumberBoxComponent implements ControlValueAccessor, Validator {
  private static controlCount = 1;

  @Input() steps: number = 1;
  @Input() min: number;
  @Input() max: number;
  @Input() pattern: string;
  @Input() prefixLabel: string;
  @Input() suffixLabel: string;
  @Input() showControls: boolean = true;
  @Input() placeholder: string = "";
  @Input() readOnly: boolean;
  @Input() autoFocus: boolean;
  @Input() tabIndex: number;
  @Input() styleClass: string;
  @Input() inputId: string = `np-number-box_${NpNumberBoxComponent.controlCount++}`;

  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Output() onFocus: EventEmitter<any> = new EventEmitter();
  @Output() onBlur: EventEmitter<any> = new EventEmitter();

  @ViewChild("control") inputViewChild: ElementRef;

  innerValue: number;
  isDisabled: boolean = false;
  focused: boolean = false;
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

  validate(): any {
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

  focus(): void {
    this.inputViewChild.nativeElement.focus();
  }

  _add(): void {
    if (this.isDisabled || this.readOnly) {
      return;
    }
    this.value = this.value + this.steps;
  }

  _minus(): void {
    if (this.isDisabled || this.readOnly) {
      return;
    }
    this.value = this.value - this.steps;
  }

  _onMouseDownPlus(): void {
    const that = this;
    this._clearTimeout();
    this.timeout = setTimeout(() => {
      that._onMouseDownPlus();
    }, 200);
    that._add();
  }

  _onMouseUpPlus(): void {
    this._clearTimeout();
    this.inputViewChild.nativeElement.focus();
  }

  _onMouseDownMinus(): void {
    const that = this;
    this._clearTimeout();
    this.timeout = setTimeout(() => {
      that._onMouseDownMinus();
    }, 200);
    that._minus();
  }

  _onMouseUpMinus(): void {
    this._clearTimeout();
    this.inputViewChild.nativeElement.focus();
  }

  _clearTimeout(): void {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  _onInputChange(event: any): void {
    if (isNaN(parseFloat(event.target.value))) {
      this.value = null;
    } else {
      this.value = Number(event.target.value);
    }
  }

  _onBlur($event: any): void {
    this.focused = false;
    this.onTouchedCallback();
    this.onBlur.emit($event);
  }

  _onFocus($event: any): void {
    this.focused = true;
    this.onFocus.emit($event);
  }
}
