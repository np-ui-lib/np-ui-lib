import { ViewChild } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { NpSwitchComponent } from "np-ui-lib";

@Component({
  selector: "app-np-switch-demo",
  templateUrl: "./np-switch-demo.component.html",
})
export class NpSwitchDemoComponent implements OnInit {
  switch1 = true;
  switch2 = false;
  switch3 = true;
  switch4: boolean;
  switch5 = true;
  switch7 = true;
  switch8 = true;

  importText = "import { NpSwitchModule } from 'np-ui-lib';";
  htmlText = '<np-switch [(ngModel)]="value"></np-switch>';

  @ViewChild("switchControl", { static: true })
  switchControl: NpSwitchComponent;

  constructor() {}

  ngOnInit(): void {}

  onChangeSwitch8(value) {
    alert(value);
  }

  onTabChange($event) {
    if ($event.title === "Examples") {
      setTimeout(() => {
        this.switchControl.focus();
      }, 100);
    }
  }
}
