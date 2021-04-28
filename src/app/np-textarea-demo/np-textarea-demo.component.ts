import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-np-textarea-demo",
  templateUrl: "./np-textarea-demo.component.html",
})
export class NpTextareaDemoComponent implements OnInit {
  importText = "import { NpTextareaModule } from 'np-ui-lib';";
  htmlText =
    '<np-textarea [(ngModel)]="notes" [rows]="5" [cols]="30"></np-textarea>';

  input1: string;
  input2 = "Test textarea";
  input3: string;
  input4: string;
  input5: string;

  constructor() {}

  ngOnInit(): void {}

  onChange($event) {
    alert($event);
  }
}
