import { Component, OnInit, ViewChild } from '@angular/core';
import { NpCarouselComponent } from 'np-ui-lib';

@Component({
  selector: 'app-np-carousel-demo',
  templateUrl: './np-carousel-demo.component.html',
  styleUrls: ['./np-carousel-demo.component.css']
})
export class NpCarouselDemoComponent implements OnInit {

  importText = `import { NpCarouselModule } from \'np-ui-lib\';`;
  htmlText = `<np-carousel [items]="items" [itemTemplate]="itemTemplate" [autoPlay]="true" [pauseOnHover]="true">
</np-carousel>

<ng-template #itemTemplate let-item="item">
  <img [src]="item.imageUrl" class="np-responsive-img">
</ng-template>`;

  @ViewChild('slider') slider: NpCarouselComponent;

  items: any[] = [
    { imageUrl: '../../assets/images/test1.jpg', caption: '<h1>Test 1</h1>' },
    { imageUrl: '../../assets/images/test2.jpg', caption: '<h1>Test 2</h1>' },
    { imageUrl: '../../assets/images/test3.jpg', caption: '<h1>Test 3</h1>' }
  ];

  items2: any[];

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.items2 = [
        { name: 'Plan 1', id: 1 },
        { name: 'Plan 2', id: 2 },
        { name: 'Plan 3', id: 3 },
        { name: 'Plan 4', id: 4 },
        { name: 'Plan 5', id: 5 },
        { name: 'Plan 6', id: 6 },
        { name: 'Plan 7', id: 7 },
        { name: 'Plan 8', id: 8 }
      ];
    }, 2000);
  }

  selectPage2() {
    // page number start from 0
    this.slider.select(1);
  }

  addNewItem2() {
    this.items2.push({ name: 'Plan ' + (this.items2.length + 1), id: (this.items2.length + 1) });
  }
}
