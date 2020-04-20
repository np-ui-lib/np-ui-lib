import { Component, OnInit, ViewChild } from '@angular/core';
import { NpUiCarouselComponent } from 'projects/np-ui-lib/src/public-api';

@Component({
  selector: 'app-np-ui-carousel-demo',
  templateUrl: './np-ui-carousel-demo.component.html',
  styleUrls: ['./np-ui-carousel-demo.component.css']
})
export class NpUiCarouselDemoComponent implements OnInit {

  @ViewChild("slider") slider: NpUiCarouselComponent;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.items2 = [
        "Test1",
        "Test2",
        "Test3",
        "Test4",
        "Test5",
        "Test6",
        "Test7",
        "Test8"
      ];
    }, 2000);
  }

  items: any[] = [
    { imageUrl: "../../assets/images/test1.jpg", caption: "<h1>Test 1</h1>" },
    { imageUrl: "../../assets/images/test2.jpg", caption: "<h1>Test 2</h1>" },
    { imageUrl: "../../assets/images/test3.jpg", caption: "<h1>Test 3</h1>" }
  ];

  items2: any[];

  selectPage2() {
    // page number start from 0
    this.slider.select(1);
  }

  addNewItem2() {
    this.items2.push("Test9");
  }
}
