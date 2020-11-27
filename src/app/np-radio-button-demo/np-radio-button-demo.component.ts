import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-np-radio-button-demo',
  templateUrl: './np-radio-button-demo.component.html'
})
export class NpRadioButtonDemoComponent implements OnInit {

  importText = 'import { NpRadioButtonModule } from \'np-ui-lib\';';
  htmlText = '<np-radio-button label="Male" value="Male" [(ngModel)]="gender"></np-radio-button>';
  groupHtmlText = `<np-radio-group orientation="vertical">
  <np-radio-button label="Male" value="1" [(ngModel)]="gender"></np-radio-button>
  <np-radio-button label="Female" value="2" [(ngModel)]="gender"></np-radio-button>
</np-radio-group>`;

  gender: string;
  gender2 = '1';
  gender3 = '1';
  genderReq: number;
  gender5: number;

  constructor() { }

  ngOnInit(): void {
  }

  onChange($event) {
    alert($event);
  }

}
