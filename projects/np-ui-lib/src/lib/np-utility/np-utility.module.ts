import { NgModule } from '@angular/core';
import { NpHightLightPipe } from './np-highlight.pipe';
import { NpMaskDirective } from './np-mask.directive';

@NgModule({
    declarations: [NpHightLightPipe, NpMaskDirective],
    exports: [NpHightLightPipe, NpMaskDirective]
})
export class NpUtility { }
