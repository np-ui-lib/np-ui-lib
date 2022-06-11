import { Component, OnInit, ViewChild } from "@angular/core";
import { UntypedFormGroup, UntypedFormControl, Validators } from "@angular/forms";
import { NpSidepanelComponent, NpSidepanelService } from "np-ui-lib";

@Component({
  selector: "app-np-sidepanel-demo",
  templateUrl: "./np-sidepanel-demo.component.html",
})
export class NpSidepanelDemoComponent implements OnInit {
  importText = "import { NpSidepanelModule } from 'np-ui-lib';";
  htmlText = `<np-sidepanel [position]="'right'" [height]="'100%'" [width]="'200px'">
  ...Body content
</np-sidepanel>`;
  lazyLoadText = `<np-sidepanel [position]="'right'" [height]="'100%'" [width]="'200px'">
  <ng-template npSidepanelContent>
    ...Lazy load content
  </ng-tempalte>
</sidepanel>`;
  serviceText = "constructor(private sidepanelService: NpSidepanelService) { }";

  serviceClose = `this.sidepanelService.closeSidepanel("leftSidepanel", { data: 5 });
<span class="np-text-success">// Where leftSidepanel is inputId of sidepanel. and pass data in second parameter.
// this data will be passed to onClose callback method of sidepanel.
</span>`;

  serviceGet = `var reference = this.sidepanelService.get("leftSidepanel");
<span class="np-text-success">// Where leftSidepanel is inputId of sidepanel.
// this get method will return sidepanel reference object, 
// which can be furthur subscribed to get call back when sidepanel is closed by service.
</span>
reference.subscribe((data) => {
  <span class="np-text-success">... Callback on sidepanel close by service</span>
});`;

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

  @ViewChild("sidePanelLeft", { static: true })
  sidePanelLeft: NpSidepanelComponent;
  @ViewChild("sidePanelRight", { static: true })
  sidePanelRight: NpSidepanelComponent;
  @ViewChild("sidePanelTop", { static: true })
  sidePanelTop: NpSidepanelComponent;
  @ViewChild("sidePanelBottom", { static: true })
  sidePanelBottom: NpSidepanelComponent;

  constructor(private sidepanelService: NpSidepanelService) { }

  ngOnInit(): void { }

  openLeft() {
    this.sidePanelLeft.open(null);
  }

  onCloseLeft(data: any) {
    console.log(JSON.stringify(data));
    alert("Left sidepanel closed");
  }

  closeLeft() {
    this.sidepanelService.closeSidepanel("leftSidepanel", { data: 5 });
  }

  onSubmit() {
    if (this.myForm.invalid) {
      this.markFormGroupTouched(this.myForm);
    } else {
      this.closeLeft();
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
