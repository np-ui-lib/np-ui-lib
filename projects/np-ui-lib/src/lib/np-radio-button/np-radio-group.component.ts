import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  QueryList,
  ViewEncapsulation,
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { NpRadioButtonComponent } from "./np-radio-button.component";

@Component({
  selector: "np-radio-group",
  templateUrl: "./np-radio-group.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NpRadioGroupComponent),
      multi: true,
    },
  ],
})
export class NpRadioGroupComponent implements ControlValueAccessor {
  private static controlCount = 1;

  @Input() name: string;
  // Orientation can be 'horizontal' or 'vertical'
  @Input() orientation = "horizontal";
  @Input() readOnly: boolean;
  @Input() tabIndex: number;
  @Input() styleClass: string;
  @Input() inputId = `np-radio-group_${NpRadioGroupComponent.controlCount++}`;
  @Input() set autoFocus(value: boolean) {
    if (value) {
      this.focus();
    }
  }

  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Output() onFocus: EventEmitter<any> = new EventEmitter();
  @Output() onBlur: EventEmitter<any> = new EventEmitter();

  @ContentChildren(NpRadioButtonComponent)
  radioButtons: QueryList<NpRadioButtonComponent>;

  innerValue: any;
  isDisabled = false;

  private onChangeCallback: (_: any) => void = () => { };
  private onTouchedCallback: () => void = () => { };

  constructor(private el: ElementRef) { }

  get value(): any {
    return this.innerValue ? this.innerValue : null;
  }

  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
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

  focus() {
    setTimeout(() => {
      if (!this.value) {
        const radio = this.el.nativeElement.querySelector(
          "#" + this.radioButtons.first.inputId
        );
        if (radio) {
          radio.querySelector(".np-radio-button-input").focus();
        }
      }
      this.radioButtons.forEach((item: any) => {
        if (item.value === this.value) {
          const radio = this.el.nativeElement.querySelector("#" + item.inputId);
          if (radio) {
            radio.querySelector(".np-radio-button-input").focus();
          }
        }
      });
    }, 100);
  }

  _onKeyDown(event: KeyboardEvent) {
    if (
      (event.key === "ArrowRight" ||
        event.key === "ArrowLeft" ||
        event.key === "ArrowUp" ||
        event.key === "ArrowDown") &&
      (this.readOnly || this.isDisabled)
    ) {
      event.preventDefault();
    }
  }

  _onChange(item: NpRadioButtonComponent) {
    this.value = item.value;
  }

  _isSelected(item: NpRadioButtonComponent) {
    return this.value === item.value;
  }

  _getTabIndex(item: NpRadioButtonComponent, i: number) {
    if (!this.value) {
      if (i === 0) {
        return this.tabIndex || 0;
      }
      return -1;
    }
    return this._isSelected(item) ? this.tabIndex || 0 : -1;
  }

  _onBlur($event, item: NpRadioButtonComponent) {
    item.focused = false;
    this.onTouchedCallback();
    this.onBlur.emit($event);
  }

  _onFocus($event, item: NpRadioButtonComponent) {
    item.focused = true;
    this.onFocus.emit($event);
  }

  _getInputId(id: string) {
    return id + "_input";
  }
}
