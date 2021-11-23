import { CdkStepperNext, CdkStepperPrevious } from "@angular/cdk/stepper";
import { Directive } from "@angular/core";

@Directive({
  selector: "button[npStepNext]",
  host: {
    "[type]": "type",
  },
  inputs: ["type"],
})
export class NpStepNext extends CdkStepperNext { }

@Directive({
  selector: "button[npStepPrevious]",
  host: {
    "[type]": "type",
  },
  inputs: ["type"],
})
export class NpStepPrevious extends CdkStepperPrevious { }
