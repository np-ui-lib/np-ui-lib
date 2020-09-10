import { Component, OnInit } from '@angular/core';
import { NpModalService, NpDialogComponent } from 'np-ui-lib';

@Component({
  selector: 'app-np-dialog-demo',
  templateUrl: './np-dialog-demo.component.html',
  styleUrls: ['./np-dialog-demo.component.css']
})
export class NpDialogDemoComponent implements OnInit {

  importText = `import { NpDialogModule } from 'np-ui-lib';
import { NpModalModule } from 'np-ui-lib';`;

  serviceText = `constructor(private modalService: NpModalService) { }`;

  componentText = `<span class="np-text-success">// For alert dialog, pass type="alert"</span>
this.modalService.open(NpDialogComponent, null, { type: 'alert', message: 'Saved successfully.' });

<span class="np-text-success">// For prompt dialog, pass type="prompt"</span>
const prompt = this.modalService.open(NpDialogComponent, null, { type: 'prompt', message: 'Enter your name' });
prompt.onClose.subscribe((data) => {
  <span class="np-text-success">// returns value in data, if ok button is clicked else undefined</span>
  alert('Prompt value is ' + data);
});

<span class="np-text-success">// For confirm dialog, pass type="confirm"</span>
const confirm = this.modalService.open(NpDialogComponent, null, { type: 'confirm', message: 'Are you sure to delete?' });
confirm.onClose.subscribe((data) => {
  <span class="np-text-success">// returns true in data, if ok button is clicked</span>
  if (data === true) {
    alert('Ok clicked');
  } else {
    alert('Cancel clicked');
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
      // returns value in data, if ok button is clicked else undefined
      alert('Prompt value is ' + data);
    });
  }

  openConfirm() {
    const confirm = this.modalService.open(NpDialogComponent,
      null, { type: 'confirm', message: 'Are you sure to delete?' });
    confirm.onClose.subscribe((data) => {
      // returns true in data, if ok button is clicked
      if (data === true) {
        alert('Ok clicked');
      } else {
        alert('Cancel clicked');
      }
    });
  }
}
