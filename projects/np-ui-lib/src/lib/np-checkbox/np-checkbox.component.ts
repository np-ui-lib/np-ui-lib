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
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "np-checkbox",
  templateUrl: "./np-checkbox.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NpCheckboxComponent),
      multi: true,
    },
  ],
})
export class NpCheckboxComponent implements ControlValueAccessor {
  private static controlCount = 1;

  @Input() label: string;
  @Input() indeterminate: boolean;
  @Input() readOnly: boolean;
  @Input() autoFocus: boolean;
  @Input() tabIndex: number;
  @Input() styleClass: string;
  @Input() inputId: string = `np-checkbox_${NpCheckboxComponent.controlCount++}`;

  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Output() onFocus: EventEmitter<any> = new EventEmitter();
  @Output() onBlur: EventEmitter<any> = new EventEmitter();

  @ViewChild("control") inputViewChild: ElementRef;

  innerValue: boolean;
  isDisabled: boolean = false;
  focused: boolean = false;

  private onChangeCallback: (_: any) => void = () => { };
  private onTouchedCallback: () => void = () => { };

  get value(): boolean {
    return this.innerValue ? this.innerValue : null;
  }

  set value(v: boolean) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.indeterminate = false;
      this.onChangeCallback(v);
      this.onChange.emit(v);
    }
  }

  writeValue(v: boolean): void {
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

  focus(): void {
    this.inputViewChild.nativeElement.focus();
  }

  _onBlur($event): void {
    this.focused = false;
    this.onTouchedCallback();
    this.onBlur.emit($event);
  }

  _onFocus($event): void {
    this.focused = true;
    this.onFocus.emit($event);
  }

  _onChange(event: any): void {
    this.value = event.target.checked;
  }

  _onKeyDown(event: KeyboardEvent): void {
    if (event.key === "Space" && (this.readOnly || this.isDisabled)) {
      event.preventDefault();
    }
  }

  _getInputId(): string {
    return this.inputId + "_input";
  }
}
