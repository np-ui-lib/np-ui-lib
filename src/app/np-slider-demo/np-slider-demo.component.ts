import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-np-slider-demo',
  templateUrl: './np-slider-demo.component.html',
  styleUrls: ['./np-slider-demo.component.css']
})
export class NpSliderDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slider1: number = 0;
  slider2: number = 50;
  slider3: number = 0;
  slider4: number = 0;
  slider5: number = 0;

}
