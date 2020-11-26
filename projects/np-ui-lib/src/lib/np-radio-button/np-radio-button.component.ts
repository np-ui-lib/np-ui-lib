import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, forwardRef, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'np-radio-button',
  templateUrl: './np-radio-button.component.html',
  styleUrls: ['./np-radio-button.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NpRadioButtonComponent),
      multi: true
    }
  ]
})
export class NpRadioButtonComponent implements ControlValueAccessor {
  static controlCount = 1;

  @Input() label: string;
  @Input() value: any;
  @Input() readOnly: boolean;
  @Input() autoFocus: boolean;
  @Input() tabIndex: number;
  @Input() styleClass: string;
  @Input() inputId = `np-radio-button_${NpRadioButtonComponent.controlCount++}`;

  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Output() onFocus: EventEmitter<any> = new EventEmitter();
  @Output() onBlur: EventEmitter<any> = new EventEmitter();

  @ViewChild('control') inputViewChild: ElementRef;

  innerValue: any;
  isDisabled = false;
  focused = false;

  private onChangeCallback: (_: any) => void = () => { };
  private onTouchedCallback: () => void = () => { };

  constructor() { }

  get currentValue(): any {
    return this.innerValue ? this.innerValue : null;
  }

  set currentValue(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
      this.onTouchedCallback();
      this.onChange.emit(v);
    }
  }

  writeValue(v: any): void {
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

  _isSelected() {
    return this.value === this.currentValue;
  }

  _onKeyDown(event) {
    if (this.readOnly || this.isDisabled) {
      event.preventDefault();
    }
  }

  _onChange(event: any) {
    this.currentValue = this.value;
  }

}
