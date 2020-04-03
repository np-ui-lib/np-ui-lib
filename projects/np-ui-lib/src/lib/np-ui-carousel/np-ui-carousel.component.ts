import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CarouselItem } from './np-ui-carousel.model';

@Component({
  selector: 'np-ui-carousel',
  templateUrl: './np-ui-carousel.component.html',
  styleUrls: ['./np-ui-carousel.component.css']
})
export class NpUiCarouselComponent implements OnInit, OnDestroy {

  @Input() items: CarouselItem[] = [];

  @Input() automaticSlideChange: boolean;

  @Input() slideChangeTime: number;

  _currentSlideIndex: number;

  _interval: any;

  constructor() { }

  ngOnDestroy(): void {
    if (this.automaticSlideChange) {
      clearInterval(this._interval);
    }
  }

  ngOnInit(): void {
    this._currentSlideIndex = 0;
    if (this.automaticSlideChange) {
      this.setAutoSlideChange();
    }
  }

  plusSlides() {
    var idx = this._currentSlideIndex + 1;
    this._currentSlideIndex = idx >= this.items.length ? 0 : idx;
  }

  minusSlides() {
    var idx = this._currentSlideIndex - 1;
    this._currentSlideIndex = idx < 0 ? (this.items.length - 1) : idx;
  }

  currentSlide(n: number) {
    this._currentSlideIndex = n;
  }

  setAutoSlideChange() {
    this._interval = setInterval(() => {
      this.plusSlides();
    }, this.slideChangeTime ? this.slideChangeTime : 5000);
  }

}
