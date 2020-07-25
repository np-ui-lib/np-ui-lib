import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-np-slider-demo',
  templateUrl: './np-slider-demo.component.html',
  styleUrls: ['./np-slider-demo.component.css']
})
export class NpSliderDemoComponent implements OnInit {

  importText = 'import { NpSliderModule } from \'np-ui-lib\';';
  htmlText = '<np-slider [(ngModel)]="slider1"></np-slider>';

  constructor() { }

  slider1 = 0;
  slider2 = 55;
  slider3 = 0;
  slider4 = 0;
  slider5 = 0;

  ngOnInit(): void {
  }

}
