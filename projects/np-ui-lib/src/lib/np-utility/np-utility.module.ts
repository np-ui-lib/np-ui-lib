import { NgModule } from '@angular/core';
import { NpHightLightPipe } from './np-highlight.pipe';
import { NpMaskDirective } from './np-mask.directive';
import { NpUtilityService } from './np-utility.service';
import { NpIndeterminateDirective } from './np-indeterminate.directive';
import { NpOrderByPipe } from './np-orderby.pipe';
import { NpMaskService } from './np-mask.service';
import { NpAutoFocusDirective } from './np-autofocus.directive';

@NgModule({
    declarations: [NpHightLightPipe, NpMaskDirective, NpIndeterminateDirective, NpOrderByPipe, NpAutoFocusDirective],
    exports: [NpHightLightPipe, NpMaskDirective, NpIndeterminateDirective, NpOrderByPipe, NpAutoFocusDirective],
    providers: [NpUtilityService, NpMaskService]
})
export class NpUtilityModule { }
