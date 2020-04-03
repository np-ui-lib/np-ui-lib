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
    { imageUrl: "../../assets/images/test1.jpg", caption: "Test 1" },
    { imageUrl: "../../assets/images/test2.jpg", caption: "Test 2" },
    { imageUrl: "../../assets/images/test3.jpg", caption: "Test 3" }
  ];

}
