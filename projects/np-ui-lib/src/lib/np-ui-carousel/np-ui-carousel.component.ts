import { Component, Input, OnDestroy, TemplateRef, OnChanges, HostListener, AfterContentInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'np-ui-carousel',
  templateUrl: './np-ui-carousel.component.html',
  styleUrls: ['./np-ui-carousel.component.css']
})
export class NpUiCarouselComponent implements AfterContentInit, OnDestroy, OnChanges {

  @Input() items: any[] = [];
  @Input() autoPlay: boolean;
  @Input() autoPlayInterval: number = 5000;
  @Input() styleClass: string;
  @Input() itemTemplate: TemplateRef<any>;
  @Input() visibleNum: number = 1;
  @Input() currentPage: number = 0;
  @Input() pauseOnHover: boolean;
  @Input() showNavigationArrows: boolean = true;
  @Input() showNavigationIndicators: boolean = true;

  _totalPages: number;
  _interval: any;
  _start: number;
  _end: number;

  ngOnDestroy(): void {
    if (this.autoPlay) {
      clearInterval(this._interval);
    }
  }

  ngAfterContentInit(): void {
    this._getSlidesFromPage();
    if (this.autoPlay) {
      this._setAutoSlideChange();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.items && changes.items.currentValue) {
      this._totalPages = Math.round(this.items.length / this.visibleNum);
    }
  }

  _getSlidesFromPage() {
    this._start = (this.currentPage * this.visibleNum);
    this._end = this._start + this.visibleNum - 1;
  }

  _plusSlides() {
    var idx = this.currentPage + 1;
    this.currentPage = idx >= this._totalPages ? 0 : idx;
    this._getSlidesFromPage();
  }

  _minusSlides() {
    var idx = this.currentPage - 1;
    this.currentPage = idx < 0 ? (this._totalPages - 1) : idx;
    this._getSlidesFromPage();
  }

  _setAutoSlideChange() {
    this._interval = setInterval(() => {
      this._plusSlides();
    }, this.autoPlayInterval);
  }

  _goToPage(page: number) {
    this.currentPage = page;
    this._getSlidesFromPage();
  }

  _getEmptyArray(i: number) {
    return new Array(i);
  }

  _isActive(idx: number) {
    if (idx >= this._start && idx <= this._end) {
      return true;
    }
    return false;
  }

  @HostListener('mouseenter')
  _onMouseEnter() {
    if (this.pauseOnHover) {
      this.pause();
    }
  }

  @HostListener('mouseleave')
  _onMouseLeave() {
    if (this.pauseOnHover) {
      this.start();
    }
  }

  pause() {
    if (this.autoPlay) {
      clearInterval(this._interval);
    }
  }

  start() {
    if (this.autoPlay) {
      this._setAutoSlideChange();
    }
  }

  select(page: number) {
    this._goToPage(page);
  }
}
