import {
  Component, Input, ViewEncapsulation, ChangeDetectionStrategy, forwardRef, Output,
  EventEmitter, ElementRef, ViewChild
} from '@angular/core';
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
export class NpSliderComponent {
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
  @Output() onFocus: EventEmitter<any> = new EventEmitter();
  @Output() onBlur: EventEmitter<any> = new EventEmitter();

  @ViewChild('control') inputViewChild: ElementRef;

  lable: number;
  innerValue: number;
  isDisabled = false;
  focused = false;
  style: any;
  private onChangeCallback: (_: any) => void = () => { };
  private onTouchedCallback: () => void = () => { };

  get value(): number {
    return this.innerValue;
  }

  set value(v: number) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.lable = v;
      this.onChangeCallback(v);
      this.onTouchedCallback();
      this.onChange.emit(v);
    }
  }

  writeValue(v: number): void {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.lable = v;
      this._setLeftPosition(v);
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
      $event.preventDefault();
      return;
    }
    this.value = $event.target.value;
  }

  _onInput($event) {
    if (this.isDisabled || this.readOnly) {
      $event.preventDefault();
      return;
    }
    this.lable = $event.target.value;
    this._setLeftPosition(this.lable);
  }

  _onKeyDown($event) {
    if (this.readOnly) {
      $event.preventDefault();
      return;
    }
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

  _setLeftPosition(value: number) {
    const val = ((value - this.min) * 100) / (this.max - this.min);
    this.style = val < 50 ? { left: `${val}%` } : { right: `${100 - val}%` };
  }
}
