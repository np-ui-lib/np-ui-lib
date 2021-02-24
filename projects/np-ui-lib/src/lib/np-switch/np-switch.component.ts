import { Component, ViewEncapsulation, ChangeDetectionStrategy, forwardRef, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'np-switch',
  templateUrl: './np-switch.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NpSwitchComponent),
      multi: true
    }
  ]
})
export class NpSwitchComponent implements ControlValueAccessor {

  private static controlCount = 1;

  @Input() trueLabelText: string;
  @Input() falseLabelText: string;
  @Input() readOnly: boolean;
  @Input() autoFocus: boolean;
  @Input() tabIndex: number;
  @Input() styleClass: string;
  @Input() inputId = `np-switch_${NpSwitchComponent.controlCount++}`;

  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Output() onFocus: EventEmitter<any> = new EventEmitter();
  @Output() onBlur: EventEmitter<any> = new EventEmitter();

  @ViewChild('control') inputViewChild: ElementRef;

  innerValue: boolean;
  isDisabled = false;
  focused = false;
  private onChangeCallback: (_: any) => void = () => { };
  private onTouchedCallback: () => void = () => { };

  get value(): boolean {
    return this.innerValue;
  }

  set value(v: boolean) {
    if (v !== this.innerValue) {
      this.innerValue = v;
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

  focus() {
    this.inputViewChild.nativeElement.focus();
  }

  _onClickSwitch($event) {
    if (this.isDisabled || this.readOnly) {
      return;
    }
    this.value = $event.target.checked;
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

  _getInputId() {
    return this.inputId + "_input";
  }
}
