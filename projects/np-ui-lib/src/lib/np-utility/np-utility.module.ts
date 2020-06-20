import { NgModule } from '@angular/core';
import { NpHightLightPipe } from './np-highlight.pipe';
import { NpMaskDirective } from './np-mask.directive';
import { NpUtilityService } from './np-utility.service';
import { NpIndeterminate } from './np-indeterminate.directive';

@NgModule({
    declarations: [NpHightLightPipe, NpMaskDirective, NpIndeterminate],
    exports: [NpHightLightPipe, NpMaskDirective, NpIndeterminate],
    providers: [NpUtilityService]
})
export class NpUtilityModule { }
