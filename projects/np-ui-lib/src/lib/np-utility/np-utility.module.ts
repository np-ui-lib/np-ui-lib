import { NgModule } from '@angular/core';
import { NpHightLightPipe } from './np-highlight.pipe';
import { NpMaskDirective } from './np-mask.directive';
import { NpUtilityService } from './np-utility.service';
import { NpIndeterminateDirective } from './np-indeterminate.directive';
import { NpOrderByPipe } from './np-orderby.pipe';

@NgModule({
    declarations: [NpHightLightPipe, NpMaskDirective, NpIndeterminateDirective, NpOrderByPipe],
    exports: [NpHightLightPipe, NpMaskDirective, NpIndeterminateDirective, NpOrderByPipe],
    providers: [NpUtilityService]
})
export class NpUtilityModule { }
