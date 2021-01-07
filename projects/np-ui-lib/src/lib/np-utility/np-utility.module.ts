import { NgModule } from '@angular/core';
import { NpHightLightPipe } from './np-highlight.pipe';
import { NpMaskDirective } from './np-mask.directive';
import { NpUtilityService } from './np-utility.service';
import { NpOrderByPipe } from './np-orderby.pipe';
import { NpMaskService } from './np-mask.service';
import { NpAutofocusDirective } from './np-autofocus.directive';

@NgModule({
    declarations: [NpHightLightPipe, NpMaskDirective, NpOrderByPipe, NpAutofocusDirective],
    exports: [NpHightLightPipe, NpMaskDirective, NpOrderByPipe, NpAutofocusDirective],
    providers: [NpUtilityService, NpMaskService]
})
export class NpUtilityModule { }
