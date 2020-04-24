import { Component, Input, OnDestroy, TemplateRef, HostListener, AfterContentInit, SimpleChanges, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'np-carousel',
  templateUrl: './np-carousel.component.html',
  styleUrls: ['./np-carousel.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NpCarouselComponent implements AfterContentInit, OnDestroy {

  @Input() items: any[] = [];
  @Input() autoPlay: boolean;
  @Input() autoPlayInterval: number = 5000;
  @Input() styleClass: string;
  @Input() itemTemplate: TemplateRef<any>;
  @Input() visibleNum: number = 1;
  @Input() scrollNum: number = 1;
  @Input() currentPage: number = 0;
  @Input() pauseOnHover: boolean;
  @Input() showNavigationArrows: boolean = true;
  @Input() showNavigationIndicators: boolean = true;

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

  _totalPages() {
    if (this.items == undefined || this.items == null) {
      return 0;
    }
    return Math.ceil((this.items.length - this.visibleNum + this.scrollNum) / this.scrollNum);
  }

  _getSlidesFromPage() {
    this._start = this.currentPage * this.scrollNum;
    this._end = this._start + this.visibleNum - 1;
  }

  _plusSlides() {
    var idx = this.currentPage + 1;
    this.currentPage = idx >= this._totalPages() ? 0 : idx;
    this._getSlidesFromPage();
  }

  _minusSlides() {
    var idx = this.currentPage - 1;
    this.currentPage = idx < 0 ? (this._totalPages() - 1) : idx;
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
