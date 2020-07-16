import { NgModule } from '@angular/core';
import { NpHightLightPipe } from './np-highlight.pipe';
import { NpMaskDirective } from './np-mask.directive';
import { NpUtilityService } from './np-utility.service';
import { NpIndeterminateDirective } from './np-indeterminate.directive';

@NgModule({
    declarations: [NpHightLightPipe, NpMaskDirective, NpIndeterminateDirective],
    exports: [NpHightLightPipe, NpMaskDirective, NpIndeterminateDirective],
    providers: [NpUtilityService]
})
export class NpUtilityModule { }
