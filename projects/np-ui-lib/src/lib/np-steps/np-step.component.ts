import { Component, ViewEncapsulation, ChangeDetectionStrategy, TemplateRef, Input } from '@angular/core';
import { CdkStep, } from '@angular/cdk/stepper';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
    selector: 'np-step',
    template: '<ng-template><ng-content></ng-content></ng-template>',
    providers: [
        { provide: CdkStep, useExisting: NpStepComponent }
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.Default
})
export class NpStepComponent extends CdkStep {
    @Input() labelTemplate: TemplateRef<any>;
}
