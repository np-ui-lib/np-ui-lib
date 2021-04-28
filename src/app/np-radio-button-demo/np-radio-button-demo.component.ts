import { Component, OnInit, ViewChild } from "@angular/core";
import { NpRadioGroupComponent } from "np-ui-lib";

@Component({
  selector: "app-np-radio-button-demo",
  templateUrl: "./np-radio-button-demo.component.html",
})
export class NpRadioButtonDemoComponent implements OnInit {
  importText = "import { NpRadioButtonModule } from 'np-ui-lib';";
  htmlText = '<np-radio-button label="Male" value="Male"></np-radio-button>';
  groupHtmlText = `<np-radio-group orientation="vertical" [(ngModel)]="gender" name="rgbGender">
  <np-radio-button label="Male" value="1"></np-radio-button>
  <np-radio-button label="Female" value="2"></np-radio-button>
</np-radio-group>`;

  @ViewChild("gender8Group") gender8Group: NpRadioGroupComponent;

  gender1: string;
  gender2 = "1";
  gender3 = "1";
  gender4 = "1";
  gender5: number;
  gender6: number;
  gender7: number;
  gender8: number;

  constructor() {}

  ngOnInit(): void {}

  onChange($event) {
    alert($event);
  }

  setFocus() {
    this.gender8Group.focus();
  }
}
