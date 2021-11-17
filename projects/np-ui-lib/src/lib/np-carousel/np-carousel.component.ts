import {
  Component,
  Input,
  OnDestroy,
  TemplateRef,
  HostListener,
  AfterContentInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "np-carousel",
  templateUrl: "./np-carousel.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class NpCarouselComponent
  implements AfterContentInit, OnDestroy, OnChanges {
  private static controlCount = 1;

  @Input() items: any[] = [];
  @Input() lazyLoaded: boolean;
  @Input() autoPlay: boolean;
  @Input() autoPlayInterval = 5000;
  @Input() itemTemplate: TemplateRef<any>;
  @Input() visibleNum: number = 1;
  @Input() scrollNum: number = 1;
  @Input() currentPage: number = 0;
  @Input() pauseOnHover: boolean;
  @Input() showNavigationArrows: boolean = true;
  @Input() showNavigationIndicators: boolean = true;
  @Input() styleClass: string;
  @Input() inputId: string = `np-carousel_${NpCarouselComponent.controlCount++}`;

  interval: any;
  startIdx: number;
  endIdx: number;
  isPolite: boolean = false;

  @HostListener("mouseenter")
  _onMouseEnter(): void {
    if (this.pauseOnHover) {
      this.pause();
    }
  }

  @HostListener("mouseleave")
  _onMouseLeave(): void {
    if (this.pauseOnHover) {
      this.start();
    }
  }

  pause(): void {
    if (this.autoPlay) {
      clearInterval(this.interval);
      this.isPolite = true;
    }
  }

  start(): void {
    if (this.autoPlay) {
      this._setAutoSlideChange();
    }
  }

  select(page: number): void {
    this._goToPage(page);
  }

  ngOnDestroy(): void {
    if (this.autoPlay) {
      clearInterval(this.interval);
      this.isPolite = true;
    }
  }

  ngAfterContentInit(): void {
    this._getSlidesFromPage();
    if (this.autoPlay) {
      this._setAutoSlideChange();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.scrollNum || changes.visibleNum) {
      this._getSlidesFromPage();
    }
  }

  _totalPages(): number {
    if (this.items === undefined || this.items === null) {
      return 0;
    }
    return Math.ceil(
      (this.items.length - this.visibleNum + this.scrollNum) / this.scrollNum
    );
  }

  getTotalPages(): number {
    return this._totalPages();
  }

  _getSlidesFromPage(): void {
    this.startIdx = this.currentPage * this.scrollNum;
    this.endIdx = this.startIdx + this.visibleNum - 1;
  }

  _plusSlides(): void {
    const idx = this.currentPage + 1;
    this.currentPage = idx >= this._totalPages() ? 0 : idx;
    this._getSlidesFromPage();
  }

  _minusSlides(): void {
    const idx = this.currentPage - 1;
    this.currentPage = idx < 0 ? this._totalPages() - 1 : idx;
    this._getSlidesFromPage();
  }

  _setAutoSlideChange(): void {
    this.interval = setInterval(() => {
      this._plusSlides();
    }, this.autoPlayInterval);
    this.isPolite = false;
  }

  _goToPage(page: number): void {
    this.currentPage = page;
    this._getSlidesFromPage();
  }

  _getEmptyArray(i: number): any {
    return new Array(i);
  }

  _isActive(idx: number): boolean {
    if (this.lazyLoaded || (idx >= this.startIdx && idx <= this.endIdx)) {
      return true;
    }
    return false;
  }

  _getActiveItems(): any[] {
    if (!this.items || !this.lazyLoaded) {
      return this.items;
    }
    return this.items.slice(this.startIdx, this.endIdx + 1);
  }

  _getIdxOfItem(i: number): string {
    if (!this.lazyLoaded) {
      return i + 1 + ' of ' + this.items.length;
    }
    return this.startIdx + i + 1 + ' of ' + this.items.length;
  }

  _trackBy(index: number): number {
    return index;
  }
}
