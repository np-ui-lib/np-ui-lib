import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from "@angular/core";
import { NpModalRef } from "np-ui-lib";
import { UntypedFormGroup, UntypedFormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-np-modal-demo-child",
  templateUrl: "./np-modal-demo-child.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class NpModalDemoChildComponent implements OnInit {
  firstName: string;
  lastName: string;
  birthDate: Date;
  birthTime: string;
  isActive = true;
  description: string;

  myForm = new UntypedFormGroup({
    firstName: new UntypedFormControl("", Validators.required),
    lastName: new UntypedFormControl("", Validators.required),
    birthDate: new UntypedFormControl(null, Validators.required),
    birthTime: new UntypedFormControl("", Validators.required),
    isActive: new UntypedFormControl(false, Validators.required),
    description: new UntypedFormControl("", Validators.required),
  });

  constructor(private ref: NpModalRef) { }

  ngOnInit(): void { }

  submit() {
    if (this.myForm.invalid) {
      this.markFormGroupTouched(this.myForm);
    } else {
      this.close();
    }
  }

  private markFormGroupTouched(formGroup: UntypedFormGroup) {
    (Object as any).values(formGroup.controls).forEach((control: any) => {
      control.markAsTouched();
      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }

  close() {
    this.ref.close();
  }
}
