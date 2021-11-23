import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  TemplateRef,
  Input,
} from "@angular/core";
import { CdkStepper } from "@angular/cdk/stepper";
import { NpStepComponent } from "./np-step.component";

@Component({
  selector: "np-steps",
  templateUrl: "./np-steps.component.html",
  providers: [{ provide: CdkStepper, useExisting: NpStepsComponent }],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class NpStepsComponent extends CdkStepper {
  private static controlCount = 1;

  @Input() stretchLabels: boolean;
  @Input() verticalSteps: boolean;
  @Input() styleClass: string;
  @Input() inputId: string = `np-steps_${NpStepsComponent.controlCount++}`;

  _onClick(index: number): void {
    this.selectedIndex = index;
  }

  _isTemplate(step: NpStepComponent): boolean {
    return step.labelTemplate instanceof TemplateRef;
  }

  _getTitleId(step: any): string {
    return step.inputId + "_title";
  }

  _getBodyId(step: any): string {
    return step.inputId + "_body";
  }
}
