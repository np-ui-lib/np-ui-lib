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

  @Input() min = 0;
  @Input() max = 100;
  @Input() step = 1;
  @Input() readOnly: boolean;
  @Input() autoFocus: boolean;
  @Input() tabIndex: number;
  @Input() styleClass: string;
  @Input() inputId = `np-slider_${NpSliderComponent.controlCount++}`;

  @Output() onChange: EventEmitter<any> = new EventEmitter();

  innerValue: number;
  isDisabled = false;
  private onChangeCallback: (_: any) => void = () => { };
  private onTouchedCallback: () => void = () => { };

  constructor() { }

  ngOnInit(): void {
  }

  get value(): number {
    return this.innerValue;
  }

  set value(v: number) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
      this.onTouchedCallback();
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

  _onChange($event) {
    if (this.isDisabled || this.readOnly) {
      return;
    }
    this.value = $event.target.value;
  }

  _onBlur() {
    this.onTouchedCallback();
  }
}
