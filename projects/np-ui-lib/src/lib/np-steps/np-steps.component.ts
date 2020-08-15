import { Component, ViewEncapsulation, ChangeDetectionStrategy, TemplateRef, Input } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';
import { NpStepComponent } from './np-step.component';

@Component({
  selector: 'np-steps',
  templateUrl: './np-steps.component.html',
  styleUrls: ['./np-steps.component.css'],
  providers: [
    { provide: CdkStepper, useExisting: NpStepsComponent }
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NpStepsComponent extends CdkStepper {
  static controlCount = 1;

  @Input() styleClass: string;
  @Input() inputId = `np-steps_${NpStepsComponent.controlCount++}`;

  _onClick(index: number): void {
    this.selectedIndex = index;
  }

  _isTemplate(step: NpStepComponent) {
    return step.labelTemplate instanceof TemplateRef;
  }
}
