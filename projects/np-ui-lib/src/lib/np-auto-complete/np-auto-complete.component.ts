import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation, forwardRef, ViewChild, OnDestroy, } from '@angular/core';
import { TemplateRef, ViewContainerRef, ElementRef, AfterViewInit, AfterContentInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Overlay, OverlayRef, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { BehaviorSubject, Subscription } from 'rxjs';
import { TopBottomOverlayPositions } from '../np-utility/np-constants';

@Component({
  selector: 'np-auto-complete',
  templateUrl: './np-auto-complete.component.html',
  styleUrls: ['./np-auto-complete.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NpAutoCompleteComponent),
      multi: true
    }
  ]
})
export class NpAutoCompleteComponent implements ControlValueAccessor, AfterViewInit, AfterContentInit, OnDestroy {

  static controlCount = 1;

  @Input() searchResult: BehaviorSubject<any[]>;
  @Input() allowCreateNew: boolean;
  @Input() displayKey: string;
  @Input() itemTemplate: TemplateRef<any>;
  @Input() maxResultLimit: number;
  @Input() minSearchCharLimit: number;
  @Input() orderBy: string;
  @Input() orderDir: string;
  @Input() placeholder = '';
  @Input() readOnly: boolean;
  @Input() autoFocus: boolean;
  @Input() tabIndex: number;
  @Input() styleClass: string;
  @Input() inputId = `np-auto-complete_${NpAutoCompleteComponent.controlCount++}`;

  @Output() onSearch: EventEmitter<any> = new EventEmitter();
  @Output() onChange: EventEmitter<any> = new EventEmitter();

  @ViewChild('templatePortalContent') templatePortalContent: TemplateRef<any>;

  innerValue: any;
  isDisabled = false;
  subscription: Subscription;
  options: any[];
  displayValue: string;
  searchTimeout: any;
  isLoading = false;
  focused = false;

  private templatePortal: TemplatePortal<any>;
  private overlayRef: OverlayRef;
  private onChangeCallback: (_: any) => void = () => { };
  private onTouchedCallback: () => void = () => { };

  constructor(
    public overlay: Overlay,
    private viewContainerRef: ViewContainerRef,
    private overlayPositionBuilder: OverlayPositionBuilder,
    private elementRef: ElementRef
  ) { }

  ngAfterContentInit(): void {
    this.subscription = this.searchResult.subscribe((data) => {
      if (data) {
        this.overlayRef.detach();
      }
      if (this.maxResultLimit && this.maxResultLimit > 0 && data && data.length > this.maxResultLimit) {
        this.options = data.splice(0, this.maxResultLimit);
      } else {
        this.options = data;
      }
      this.isLoading = false;
      if (data) {
        if (!this.overlayRef.hasAttached()) {
          this.overlayRef.attach(this.templatePortal);
        }
      }
    });
  }

  ngAfterViewInit(): void {
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions(TopBottomOverlayPositions);
    this.overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
      backdropClass: 'np-auto-complete-backdrop',
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      panelClass: this.styleClass
    });
    this.templatePortal = new TemplatePortal(
      this.templatePortalContent,
      this.viewContainerRef
    );
    this.overlayRef.backdropClick().subscribe(() => this._close());
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  get value(): any {
    return this.innerValue ? this.innerValue : null;
  }

  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.displayValue = this.displayKey && v ? v[this.displayKey] : v;
      this.onChangeCallback(v);
      this.onTouchedCallback();
      this.onChange.emit(v);
    }
  }

  writeValue(v: any): void {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.displayValue = this.displayKey && v ? v[this.displayKey] : v;
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  _close() {
    if (this.value) {
      this.displayValue = this.displayKey && this.value ? this.value[this.displayKey] : this.value;
    } else {
      this.displayValue = null;
    }
    this.overlayRef.detach();
    this.elementRef.nativeElement.querySelector('input').focus();
  }

  _clear() {
    if (this.isDisabled || this.readOnly) {
      return;
    }
    this.value = null;
    this.options = null;
  }

  _onInput($event: any) {
    this.displayValue = $event.target.value;
    if (this.isDisabled || this.readOnly) {
      return;
    }
    if (this.minSearchCharLimit && this.minSearchCharLimit > 0) {
      if (this.displayValue === undefined || this.displayValue === null || this.displayValue.length < this.minSearchCharLimit) {
        return;
      }
    }
    this.isLoading = true;
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(() => {
      this.onSearch.emit(this.displayValue);
    }, 1000);
  }

  _selectValue(val: any) {
    this.value = val;
    this._close();
  }

  _createNewTag() {
    if (this.options === undefined || this.options === null) {
      this.options = [];
    }
    if (this.displayKey) {
      const newObj = {};
      newObj[this.displayKey] = this.displayValue;
      this.options.push(newObj);
      this._selectValue(newObj);
    } else {
      this.options.push(this.displayValue);
      this._selectValue(this.displayValue);
    }
  }

  _onKeydown(event: KeyboardEvent) {
    if (event.key === 'Tab' || event.key === 'Escape') {
      this._close();
    }
  }

  _trackBy(index: number): number {
    return index;
  }

  _getDisplayValue() {
    return this.displayValue || '';
  }

  _onFocus() {
    this.focused = true;
  }

  _onBlur() {
    this.focused = false;
    this.onTouchedCallback();
  }
}
