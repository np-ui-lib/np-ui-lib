import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-np-input-text-demo',
  templateUrl: './np-input-text-demo.component.html'
})
export class NpInputTextDemoComponent implements OnInit {

  importText = 'import { NpInputTextModule } from \'np-ui-lib\';';
  htmlText = '<np-input-text [(ngModel)]="firstName"></np-input-text>';

  input1: string;
  input2 = 'Test text';
  input3: string;
  input4: string;
  input5: string;

  constructor() { }

  ngOnInit(): void {
  }

  onChange($event) {
    alert($event);
  }

}
