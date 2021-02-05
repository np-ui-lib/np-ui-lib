import { Component, OnInit } from '@angular/core';
import { NpModalService, NpDialogComponent } from 'np-ui-lib';

@Component({
  selector: 'app-np-dialog-demo',
  templateUrl: './np-dialog-demo.component.html'
})
export class NpDialogDemoComponent implements OnInit {

  importText = `import { NpDialogModule } from 'np-ui-lib';
import { NpModalModule } from 'np-ui-lib';`;

  serviceText = `constructor(private modalService: NpModalService) { }`;

  componentText = `<span class="np-text-success">// ----For alert dialog, pass type="alert"</span>
this.modalService.open(NpDialogComponent, null, { type: 'alert', message: 'Saved successfully.' });

<span class="np-text-success">// ----For prompt dialog, pass type="prompt"</span>
const prompt = this.modalService.open(NpDialogComponent, null, { type: 'prompt', message: 'Enter your name' });
prompt.onClose.subscribe((data) => {
  <span class="np-text-success">// if Ok button is clicked then returns {action : 'Ok', value: string }</span>
  <span class="np-text-success">// if Cancel button is clicked then returns {action : 'Cancel' }</span>
  if (data.action === 'Ok') {
    alert('Ok button is clicked and input value is : ' + data.value);
  } else {
    alert('Cancel button is clicked');
  }
});

<span class="np-text-success">// ----For confirm dialog, pass type="confirm"</span>
const confirm = this.modalService.open(NpDialogComponent, null, { type: 'confirm', message: 'Are you sure to delete?' });
confirm.onClose.subscribe((data) => {
  <span class="np-text-success">// if Ok button is clicked then returns {action : 'Ok'}</span>
  <span class="np-text-success">// if Cancel button is clicked then returns {action : 'Cancel' }</span>
  if (data.action === 'Ok') {
    alert('Ok button is clicked');
  } else {
    alert('Cancel button is clicked');
  }
});
    `;

  constructor(private modalService: NpModalService) { }

  ngOnInit(): void {
  }

  openAlert() {
    this.modalService.open(NpDialogComponent,
      null, { type: 'alert', message: 'Saved successfully.' });
  }

  openPrompt() {
    const prompt = this.modalService.open(NpDialogComponent,
      null, { type: 'prompt', message: 'Enter your name' });
    prompt.onClose.subscribe((data) => {
      alert(JSON.stringify(data));
    });
  }

  openConfirm() {
    const confirm = this.modalService.open(NpDialogComponent,
      null, { type: 'confirm', message: 'Are you sure to delete?' });
    confirm.onClose.subscribe((data) => {
      alert(JSON.stringify(data));
    });
  }
}
