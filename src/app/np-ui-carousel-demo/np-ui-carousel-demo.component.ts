import { Component, OnInit } from '@angular/core';
import { CarouselItem } from 'projects/np-ui-lib/src/public-api';

@Component({
  selector: 'app-np-ui-carousel-demo',
  templateUrl: './np-ui-carousel-demo.component.html',
  styleUrls: ['./np-ui-carousel-demo.component.css']
})
export class NpUiCarouselDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items: CarouselItem[] = [
    { imageUrl: "../../assets/images/test1.jpg", caption: "<h1>Test 1</h1>" },
    { imageUrl: "../../assets/images/test2.jpg", caption: "<h1>Test 2</h1>" },
    { imageUrl: "../../assets/images/test3.jpg", caption: "<h1>Test 3</h1>" }
  ];

}
