import { Component, ViewEncapsulation, ChangeDetectionStrategy, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'np-switch',
  templateUrl: './np-switch.component.html',
  styleUrls: ['./np-switch.component.css'],
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
  static controlCount = 1;

  @Input() trueLabelText: string;
  @Input() falseLabelText: string;
  @Input() readOnly: boolean;
  @Input() autoFocus: boolean;
  @Input() tabIndex: number;
  @Input() styleClass: string;
  @Input() inputId = `np-switch_${NpSwitchComponent.controlCount++}`;

  @Output() onChange: EventEmitter<any> = new EventEmitter();

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
      this.onTouchedCallback();
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

  _onClickSwitch($event) {
    if (this.isDisabled || this.readOnly) {
      return;
    }
    this.value = $event.target.checked;
  }

  _onFocus() {
    this.focused = true;
  }

  _onBlur() {
    this.focused = false;
    this.onTouchedCallback();
  }
}
