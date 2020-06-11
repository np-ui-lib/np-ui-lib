import { NgModule } from '@angular/core';
import { NpHightLightPipe } from './np-highlight.pipe';
import { NpMaskDirective } from './np-mask.directive';
import { NpUtilityService } from './np-utility.service';

@NgModule({
    declarations: [NpHightLightPipe, NpMaskDirective],
    exports: [NpHightLightPipe, NpMaskDirective],
    providers: [NpUtilityService]
})
export class NpUtilityModule { }
