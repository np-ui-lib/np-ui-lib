import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpStepsComponent } from './np-steps.component';
import { NpStepComponent } from './np-step.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { NpStepNext, NpStepPrevious } from './np-step-buttons.directive';

@NgModule({
  declarations: [NpStepsComponent, NpStepComponent, NpStepNext, NpStepPrevious],
  imports: [CommonModule, CdkStepperModule],
  exports: [NpStepsComponent, NpStepComponent, NpStepNext, NpStepPrevious]
})
export class NpStepsModule { }
