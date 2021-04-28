import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-np-checkbox-demo",
  templateUrl: "./np-checkbox-demo.component.html",
})
export class NpCheckboxDemoComponent implements OnInit {
  importText = "import { NpCheckboxModule } from 'np-ui-lib';";
  htmlText = '<np-checkbox [(ngModel)]="check1"></np-checkbox>';
  groupHtmlText = `<np-checkbox-group orientation="vertical">
  <np-checkbox label="Apple"></np-checkbox>
  <np-checkbox label="Mango"></np-checkbox>
  <np-checkbox label="Banana"></np-checkbox>
</np-checkbox-group>`;

  check1: boolean;
  check2 = true;
  check3 = false;
  check4: boolean;
  fruit1: boolean;
  fruit2: boolean;
  fruit3: boolean;

  constructor() {}

  ngOnInit(): void {}

  _onChange($event) {
    alert($event);
  }

  onChangeFruit($event) {
    if ($event) {
      this.fruit1 = true;
      this.fruit2 = true;
      this.fruit3 = true;
    } else {
      this.fruit1 = false;
      this.fruit2 = false;
      this.fruit3 = false;
    }
  }
}
