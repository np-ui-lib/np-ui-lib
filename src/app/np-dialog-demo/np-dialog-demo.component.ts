import { Component, OnInit, ViewChild } from '@angular/core';
import { NpDialogComponent } from 'np-ui-lib';

@Component({
  selector: 'app-np-dialog-demo',
  templateUrl: './np-dialog-demo.component.html',
  styleUrls: ['./np-dialog-demo.component.css']
})
export class NpDialogDemoComponent implements OnInit {

  importText = 'import { NpDialogModule } from \'np-ui-lib\';';
  htmlText = `<np-dialog [type]="'alert'" [message]="'Saved successfully.'" (onOkClick)="onOkClick()" #dialogAlert>
</np-dialog>`;

  @ViewChild('dialogAlert', { static: true }) dialogAlert: NpDialogComponent;
  @ViewChild('dialogPrompt', { static: true }) dialogPrompt: NpDialogComponent;
  @ViewChild('dialogConfirm', { static: true }) dialogConfirm: NpDialogComponent;

  constructor() { }

  ngOnInit(): void {
  }

  openAlert() {
    this.dialogAlert.open();
  }

  openPrompt() {
    this.dialogPrompt.open();
  }

  openConfirm() {
    this.dialogConfirm.open();
  }

  onOkClick() {
    alert('Ok button clicked.');
  }

  onCancelClick() {
    alert('Cancel button clicked.');
  }

  onPromptOkClick(value: string) {
    alert('Ok button clicked with value ' + value);
  }
}
