import { Component, OnInit } from "@angular/core";
import { NpDialogService, NpDialogConfig } from "np-ui-lib";

@Component({
  selector: "app-np-dialog-demo",
  templateUrl: "./np-dialog-demo.component.html",
})
export class NpDialogDemoComponent implements OnInit {
  importText = "import { NpDialogModule } from 'np-ui-lib';";
  serviceInjectText = `constructor(private dialogService: NpDialogService) { }`;
  dialogOpenText = `this.dialogService.open('Dialog text', config, null);`;
  configText = `const config = new NpDialogConfig({ type:"alert" });`;
  stringDialogText = `this.dialogService.open('Basic dialog with string content', null, null);`;
  templateDialogText = `@ViewChild('dialogTemplate', { static: true }) dialogTemplate: TemplateRef<any>;
this.dialogService.open(this.dialogTemplate, null, null);`;
  componentText = `<span class="np-text-success">// ----For alert dialog, pass type="alert"</span>
var alert = this.dialogService.open("Message Text", config, null);
alert.onClose.subscribe(() => {
  <span class="np-text-success">// ----Continue with alert close"</span>
});

<span class="np-text-success">// ----For prompt dialog, pass type="prompt"</span>
const prompt = this.dialogService.open("Message Text", config, null);
prompt.onClose.subscribe((data) => {
  <span class="np-text-success">// if Ok button is clicked then returns input value as string</span>
  <span class="np-text-success">// if Cancel button is clicked then returns input value as null</span>
  if (data != undefined && data != null) {
    alert('Ok button is clicked and input value is: ' + data);
  } else {
    alert('Cancel button is clicked');
  }
});

<span class="np-text-success">// ----For confirm dialog, pass type="confirm"</span>
const confirm = this.dialogService.open("Message Text", config, null, null);
confirm.onClose.subscribe((data) => {
  <span class="np-text-success">// if Ok button is clicked then returns true</span>
  <span class="np-text-success">// if Cancel button is clicked then returns false</span>
  if (data) {
    alert('Ok button is clicked');
  } else {
    alert('Cancel button is clicked');
  }
});`;
  constructor(private dialogService: NpDialogService) {}

  ngOnInit(): void {}

  openAlert() {
    this.dialogService.open(
      "Saved successfully.",
      new NpDialogConfig({
        type: "alert",
      }),
      null
    );
  }

  openPrompt() {
    const prompt = this.dialogService.open(
      "Enter your name",
      new NpDialogConfig({
        type: "prompt",
      }),
      null
    );
    prompt.onClose.subscribe((data) => {
      if (data != undefined && data != null) {
        alert("Ok button is clicked, input value is: " + data);
      } else {
        alert("Cancel button is clicked");
      }
    });
  }

  openConfirm(confirmMessage) {
    const confirm = this.dialogService.open(
      confirmMessage,
      new NpDialogConfig({
        type: "confirm",
        hasBackDrop: false,
        styleClass: "myClass",
        inputId: "confirm1",
      }),
      null
    );
    confirm.onClose.subscribe((data) => {
      if (data) {
        alert("Ok button is clicked");
      } else {
        alert("Cancel button is clicked");
      }
    });
  }
}
