import {
  Component,
  Input,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  forwardRef,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "np-slider",
  templateUrl: "./np-slider.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NpSliderComponent),
      multi: true,
    },
  ],
})
export class NpSliderComponent {
  private static controlCount = 1;

  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() step: number = 1;
  @Input() readOnly: boolean;
  @Input() autoFocus: boolean;
  @Input() tabIndex: number;
  @Input() styleClass: string;
  @Input() inputId: string = `np-slider_${NpSliderComponent.controlCount++}`;

  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Output() onFocus: EventEmitter<any> = new EventEmitter();
  @Output() onBlur: EventEmitter<any> = new EventEmitter();

  @ViewChild("control") inputViewChild: ElementRef;

  labelText: number;
  innerValue: number;
  isDisabled: boolean = false;
  focused: boolean = false;
  style: any;
  private onChangeCallback: (_: any) => void = () => { };
  private onTouchedCallback: () => void = () => { };

  get value(): number {
    return this.innerValue;
  }

  set value(v: number) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.labelText = v;
      this.onChangeCallback(v);
      this.onChange.emit(v);
    }
  }

  writeValue(v: number): void {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.labelText = v;
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

  focus(): void {
    this.inputViewChild.nativeElement.focus();
  }

  _onChange($event: any): void {
    if (this.isDisabled || this.readOnly) {
      $event.preventDefault();
      return;
    }
    this.value = $event.target.value;
  }

  _onInput($event: any): void {
    if (this.isDisabled || this.readOnly) {
      $event.preventDefault();
      return;
    }
    this.labelText = $event.target.value;
    this._setLeftPosition(this.labelText);
  }

  _onKeyDown($event: any): void {
    if (this.readOnly) {
      $event.preventDefault();
      return;
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

  _setLeftPosition(value: number): void {
    const val = ((value - this.min) * 100) / (this.max - this.min);
    this.style = val < 50 ? { left: `${val}%` } : { right: `${100 - val}%` };
  }
}
