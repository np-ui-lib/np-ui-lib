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
  _innerValue: boolean;
  _isDisabled: boolean = false;
  private onChangeCallback: (_: any) => void = () => { };
  private onTouchedCallback: () => void = () => { };

  @Input() trueLabelText: string;
  @Input() falseLabelText: string;
  @Input() styleClass: string;
  @Input() readonly: boolean;
  @Input() inputId: string = `np-switch_${NpSwitchComponent.controlCount++}`;
  @Output() onChange: EventEmitter<any> = new EventEmitter();

  get value(): boolean {
    return this._innerValue;
  };

  set value(v: boolean) {
    if (v !== this._innerValue) {
      this._innerValue = v;
      this.onChangeCallback(v);
      this.onTouchedCallback();
      this.onChange.emit(v);
    }
  }

  writeValue(v: boolean): void {
    if (v !== this._innerValue) {
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

  _onClickSwitch($event) {
    if (this._isDisabled || this.readonly) {
      return;
    }
    this.value = $event.target.checked;
  }
}
