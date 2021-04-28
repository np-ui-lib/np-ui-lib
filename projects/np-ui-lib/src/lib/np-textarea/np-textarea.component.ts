import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import {
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  Validator,
} from "@angular/forms";

@Component({
  selector: "np-textarea",
  templateUrl: "./np-textarea.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NpTextareaComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => NpTextareaComponent),
      multi: true,
    },
  ],
})
export class NpTextareaComponent implements ControlValueAccessor, Validator {
  private static controlCount = 1;

  @Input() rows: number;
  @Input() cols: number;
  @Input() resize = true;
  @Input() minLength: number;
  @Input() maxLength: number;
  @Input() placeholder = "";
  @Input() readOnly: boolean;
  @Input() autoFocus: boolean;
  @Input() tabIndex: number;
  @Input() styleClass: string;
  @Input() inputId = `np-textarea_${NpTextareaComponent.controlCount++}`;

  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Output() onFocus: EventEmitter<any> = new EventEmitter();
  @Output() onBlur: EventEmitter<any> = new EventEmitter();

  @ViewChild("control") inputViewChild: ElementRef;

  innerValue: string;
  isDisabled = false;
  focused = false;

  private onChangeCallback: (_: any) => void = () => {};
  private onTouchedCallback: () => void = () => {};

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
    if (
      this.minLength !== undefined &&
      this.value &&
      this.value.length < this.minLength
    ) {
      return {
        minLength: {
          valid: false,
        },
      };
    }
    if (
      this.maxLength !== undefined &&
      this.value &&
      this.value.length > this.maxLength
    ) {
      return {
        maxLength: {
          valid: false,
        },
      };
    }
  }

  focus() {
    this.inputViewChild.nativeElement.focus();
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
}
