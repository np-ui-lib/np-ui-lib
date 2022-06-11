import { Component, OnInit } from "@angular/core";
import { UntypedFormControl, UntypedFormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-np-form-demo",
  templateUrl: "./np-form-demo.component.html",
})
export class NpFormDemoComponent implements OnInit {
  formText = `<form>
  <div class="np-form-group">
    <div class="np-form-label np-required">
      ... add label
    </div>
    <div class="np-form-control">
      ... add form control, do not add this class if using np-ui-lib input control
    </div>
    <div class="np-form-text np-text-danger">
      ... add error message
    </div>
  </div>
</form>`;

  firstName: string;
  lastName: string;
  birthDate: Date;
  birthTime: string;
  isActive = false;
  description: string;
  photo: any;

  myForm = new UntypedFormGroup({
    firstName: new UntypedFormControl("", Validators.required),
    lastName: new UntypedFormControl("", Validators.required),
    birthDate: new UntypedFormControl(null, Validators.required),
    birthTime: new UntypedFormControl("", Validators.required),
    isActive: new UntypedFormControl(false, Validators.required),
    description: new UntypedFormControl("", Validators.required),
    photo: new UntypedFormControl("", Validators.required),
  });

  constructor() {}

  ngOnInit(): void {}
}
