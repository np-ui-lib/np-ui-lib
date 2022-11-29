import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  TemplateRef,
  Input,
  Inject,
  Optional,
  forwardRef,
} from "@angular/core";
import { CdkStep, StepperOptions, STEPPER_GLOBAL_OPTIONS } from "@angular/cdk/stepper";
import { NpStepsComponent } from "./np-steps.component";

@Component({
  selector: "np-step",
  template:
    '<ng-template><div [attr.id]="inputId"><ng-content></ng-content></div></ng-template>',
  providers: [{ provide: CdkStep, useExisting: NpStepComponent }],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class NpStepComponent extends CdkStep {
  private static controlCount = 1;

  constructor(@Inject(forwardRef(() => NpStepsComponent)) stepper: NpStepsComponent,
    @Optional() @Inject(STEPPER_GLOBAL_OPTIONS) stepperOptions?: StepperOptions) {
    super(stepper, stepperOptions);
  }

  @Input() labelTemplate: TemplateRef<any>;
  @Input() iconCss: string;
  @Input() inputId: string = `np-step_${NpStepComponent.controlCount++}`;
}
