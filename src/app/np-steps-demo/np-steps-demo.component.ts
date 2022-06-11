import { Component, OnInit } from "@angular/core";
import { UntypedFormGroup, UntypedFormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-np-steps-demo",
  templateUrl: "./np-steps-demo.component.html",
})
export class NpStepsDemoComponent implements OnInit {
  importText = "import { NpStepsModule } from 'np-ui-lib';";
  htmlText = `<np-steps>
  <np-step label="Personal Info">
    ...
  <np-step>
  ...
</np-steps>`;
  previousBtnText = `<button type="button" class="np-btn" npStepPrevious>Previous</button>`;
  nextBtnText = `<button type="button" class="np-btn" npStepNext>Next</button>`;
  stretchLabels = false;

  personal = new UntypedFormGroup({
    firstName: new UntypedFormControl("", Validators.required),
    lastName: new UntypedFormControl("", Validators.required),
  });
  address = new UntypedFormGroup({
    street: new UntypedFormControl("", Validators.required),
    city: new UntypedFormControl("", Validators.required),
    state: new UntypedFormControl("", Validators.required),
    zip: new UntypedFormControl("", Validators.required),
  });
  photos = new UntypedFormGroup({
    images: new UntypedFormControl("", Validators.required),
  });

  constructor() {}

  ngOnInit(): void {}
}
