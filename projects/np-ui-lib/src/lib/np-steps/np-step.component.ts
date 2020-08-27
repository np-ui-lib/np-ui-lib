import { Component, ViewEncapsulation, ChangeDetectionStrategy, TemplateRef, Input } from '@angular/core';
import { CdkStep, } from '@angular/cdk/stepper';

@Component({
    selector: 'np-step',
    template: '<ng-template><div [attr.id]="inputId"><ng-content></ng-content></div></ng-template>',
    providers: [
        { provide: CdkStep, useExisting: NpStepComponent }
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.Default
})
export class NpStepComponent extends CdkStep {
    static controlCount = 1;

    @Input() labelTemplate: TemplateRef<any>;
    @Input() iconCss: string;
    @Input() inputId = `np-step_${NpStepComponent.controlCount++}`;
}
