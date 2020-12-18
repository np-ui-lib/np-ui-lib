import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NpSidepanelComponent } from 'np-ui-lib';

@Component({
  selector: 'app-np-sidepanel-demo',
  templateUrl: './np-sidepanel-demo.component.html'
})
export class NpSidepanelDemoComponent implements OnInit {

  importText = 'import { NpSidepanelModule } from \'np-ui-lib\';';
  htmlText = `<np-sidepanel [right]="'0'" [height]="'100%'" [width]="'200px'">
  <np-sidepanel-header>
    Header
  </np-sidepanel-header>
  Body content...
  <np-sidepanel-footer>
    Footer
  </np-sidepanel-footer>
</np-sidepanel>`;

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

  @ViewChild('sidePanelLeft', { static: true }) sidePanelLeft: NpSidepanelComponent;
  @ViewChild('sidePanelRight', { static: true }) sidePanelRight: NpSidepanelComponent;
  @ViewChild('sidePanelTop', { static: true }) sidePanelTop: NpSidepanelComponent;
  @ViewChild('sidePanelBottom', { static: true }) sidePanelBottom: NpSidepanelComponent;

  constructor() { }

  ngOnInit(): void {
  }

  openLeft() {
    this.sidePanelLeft.open(null);
  }

  closeLeft() {
    this.sidePanelLeft.close(null);
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
    (Object as any).values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }

  openRight() {
    this.sidePanelRight.open(null);
  }

  openTop() {
    this.sidePanelTop.open(null);
  }

  openBottom() {
    this.sidePanelBottom.open(null);
  }
}
