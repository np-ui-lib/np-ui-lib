import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NpSidepanelComponent } from 'np-ui-lib';

@Component({
  selector: 'app-np-sidepanel-demo',
  templateUrl: './np-sidepanel-demo.component.html',
  styleUrls: ['./np-sidepanel-demo.component.css']
})
export class NpSidepanelDemoComponent implements OnInit {

  firstName: string;
  lastName: string;
  birthDate: Date;
  birthTime: string;
  isActive: boolean = true;
  description: string;

  myForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    birthDate: new FormControl(null),
    birthTime: new FormControl(''),
    isActive: new FormControl(false),
    description: new FormControl(''),
  });

  @ViewChild("sidePanelLeft", { static: true }) sidePanelLeft: NpSidepanelComponent;
  @ViewChild("sidePanelRight", { static: true }) sidePanelRight: NpSidepanelComponent;
  @ViewChild("sidePanelTop", { static: true }) sidePanelTop: NpSidepanelComponent;
  @ViewChild("sidePanelBottom", { static: true }) sidePanelBottom: NpSidepanelComponent;

  constructor() { }

  ngOnInit(): void {
  }

  openLeft() {
    this.sidePanelLeft.open();
  }

  closeLeft() {
    this.sidePanelLeft.close();
  }

  onSubmit() {
    if (this.myForm.invalid) {
      this.markFormGroupTouched(this.myForm);
    }
    else {
      this.closeLeft();
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }

  openRight() {
    this.sidePanelRight.open();
  }

  closeRight() {
    this.sidePanelRight.close();
  }

  openTop() {
    this.sidePanelTop.open();
  }

  closeTop() {
    this.sidePanelTop.close();
  }

  openBottom() {
    this.sidePanelBottom.open();
  }

  closeBottom() {
    this.sidePanelBottom.close();
  }

}
