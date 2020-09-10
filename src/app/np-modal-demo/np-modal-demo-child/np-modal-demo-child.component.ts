import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { NpModalRef } from 'np-ui-lib';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-np-modal-demo-child',
  templateUrl: './np-modal-demo-child.component.html',
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

  myForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    birthDate: new FormControl(null, Validators.required),
    birthTime: new FormControl('', Validators.required),
    isActive: new FormControl(false, Validators.required),
    description: new FormControl('', Validators.required),
  });

  constructor(private ref: NpModalRef) { }

  ngOnInit(): void {
  }

  submit() {
    if (this.myForm.invalid) {
      this.markFormGroupTouched(this.myForm);
    }
    else {
      this.close();
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    (Object as any).values(formGroup.controls).forEach(control => {
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
