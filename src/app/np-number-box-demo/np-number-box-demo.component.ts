import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-np-number-box-demo',
  templateUrl: './np-number-box-demo.component.html',
  styleUrls: ['./np-number-box-demo.component.css']
})
export class NpNumberBoxDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  number1: number;
  number2: number;
  number3: number;
  number4: number;

  setNumber1() {
    this.number1 = 100;
  }

  setNumber3() {
    this.number3 = 101;
  }
}
