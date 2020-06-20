import { Component, OnInit, Input, ViewEncapsulation, ChangeDetectionStrategy, forwardRef, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'np-slider',
  templateUrl: './np-slider.component.html',
  styleUrls: ['./np-slider.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NpSliderComponent),
      multi: true
    }
  ]
})
export class NpSliderComponent implements OnInit {
  static controlCount = 1;
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() step: number = 1;
  @Input() styleClass: string;
  @Input() inputId: string = `np-slider_${NpSliderComponent.controlCount++}`;
  @Input() readonly: boolean;
  @Output() onChange: EventEmitter<any> = new EventEmitter();

  _innerValue: number;
  _isDisabled: boolean = false;
  private onChangeCallback: (_: any) => void = () => { };
  private onTouchedCallback: () => void = () => { };

  constructor() { }

  ngOnInit(): void {
  }

  get value(): number {
    return this._innerValue;
  };

  set value(v: number) {
    if (v !== this._innerValue) {
      this._innerValue = v;
      this.onChangeCallback(v);
      this.onTouchedCallback();
      this.onChange.emit(v);
    }
  }

  writeValue(v: number): void {
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

  _onChange($event) {
    if (this._isDisabled || this.readonly) {
      return;
    }
    this.value = $event.target.value;
  }

}
