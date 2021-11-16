import { Directive, Injector, Input, NgModule, OnInit } from "@angular/core";
import { NgControl } from "@angular/forms";
import { NpMaskService } from "./np-mask.service";

@Directive({
  selector: "[npMask]",
})
export class NpMaskDirective implements OnInit {
  @Input("npMask") mask: string;

  private control: NgControl;
  private lastMaskedValue: string = "";

  constructor(private injector: Injector, private maskService: NpMaskService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.control = this.injector.get(NgControl);

      if (!this.control || !this.control.valueAccessor) {
        return;
      }

      const originalWriteVal = this.control.valueAccessor.writeValue.bind(
        this.control.valueAccessor
      );
      this.control.valueAccessor.writeValue = (val: any) =>
        originalWriteVal(this._maskValue(val));

      const originalChange = (this.control.valueAccessor as any).onChange.bind(
        this.control.valueAccessor
      );
      this.control.valueAccessor.registerOnChange((val: any) =>
        originalChange(this._unmaskValue(val))
      );

      this._setVal(this._maskValue(this.control.value));
    }, 10);
  }

  private _maskValue(val: string): string {
    if (val === null || val === undefined) {
      return;
    }

    if (!this.mask || val === this.lastMaskedValue) {
      return val;
    }

    const maskedVal = (this.lastMaskedValue = this.maskService.valueToFormat(
      val,
      this.mask,
      this.lastMaskedValue.length > val.length,
      this.lastMaskedValue
    ));

    return maskedVal;
  }

  private _unmaskValue(val: string): string {
    const maskedVal = this._maskValue(val);
    const unmaskedVal = this.maskService.unmaskValue(maskedVal);

    if (maskedVal !== val) {
      this._setVal(maskedVal);
    }

    return maskedVal ? unmaskedVal : "";
  }

  private _setVal(val: string): void {
    if (this.control.control) {
      this.control.control.setValue(val, { emitEvent: false });
    }
  }
}

@NgModule({
  declarations: [NpMaskDirective],
  exports: [NpMaskDirective],
  providers: [NpMaskService],
})
export class NpMaskModule { }
