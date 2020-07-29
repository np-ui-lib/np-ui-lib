import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-np-number-box-demo',
  templateUrl: './np-number-box-demo.component.html',
  styleUrls: ['./np-number-box-demo.component.css']
})
export class NpNumberBoxDemoComponent implements OnInit {

  importText = 'import { NpNumberBoxModule } from \'np-ui-lib\';';
  htmlText = '<np-number-box [(ngModel)]="value"></np-number-box>';

  number1 = 50;
  number2 = 20;
  number3: number;
  number4: number;
  number5 = 50;
  number6: number;
  number7: number;
  number8: number;

  constructor() { }

  ngOnInit(): void {
  }

  setNumber1() {
    this.number1 = 100;
  }

  setNumber3() {
    this.number3 = 101;
  }

  onChangeNumber7($event) {
    console.log(this.number7);
  }
}
