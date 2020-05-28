import { Directive, Injector, Input, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { valueToFormat, unmaskValue } from './np-mask.service';


@Directive({
    selector: '[np-mask]',
})
export class NpMaskDirective implements OnInit {

    @Input('np-mask') mask: string;

    private control: NgControl;
    private _lastMaskedValue = '';

    constructor(
        private injector: Injector,
    ) { }

    ngOnInit() {
        this.control = this.injector.get(NgControl);

        if (!this.control || !this.control.valueAccessor) {
            return;
        }

        const originalWriteVal = this.control.valueAccessor.writeValue.bind(this.control.valueAccessor);
        this.control.valueAccessor.writeValue = (val: any) => originalWriteVal(this._maskValue(val));

        const originalChange = (<any>this.control.valueAccessor)['onChange'].bind(this.control.valueAccessor);
        this.control.valueAccessor.registerOnChange((val: any) => originalChange(this._unmaskValue(val)));

        this._setVal(this._maskValue(this.control.value));
    }

    private _maskValue(val: string): string {
        if (val == null || val == undefined) {
            return;
        }

        if (!this.mask || val === this._lastMaskedValue) {
            return val;
        }

        const maskedVal = this._lastMaskedValue =
            valueToFormat(
                val,
                this.mask, this._lastMaskedValue.length > val.length,
                this._lastMaskedValue);

        return maskedVal;
    }

    private _unmaskValue(val: string): string {
        const maskedVal = this._maskValue(val);
        const unmaskedVal = unmaskValue(maskedVal);

        if (maskedVal !== val) {
            this._setVal(maskedVal);
        }

        return maskedVal ? unmaskedVal : '';
    }

    private _setVal(val: string) {
        if (this.control.control) {
            this.control.control.setValue(val, { emitEvent: false });
        }
    }

}