import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation, forwardRef, OnDestroy } from '@angular/core';
import { ViewChild, TemplateRef, ViewContainerRef, ElementRef, AfterViewInit, AfterContentInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Overlay, OverlayRef, OverlayPositionBuilder, ConnectedPosition } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { BehaviorSubject, Subscription } from 'rxjs';
import { NpUtilityService } from '../np-utility/np-utility.service';

@Component({
  selector: 'np-tags',
  templateUrl: './np-tags.component.html',
  styleUrls: ['./np-tags.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NpTagsComponent),
      multi: true
    }
  ]
})
export class NpTagsComponent implements ControlValueAccessor, AfterViewInit, AfterContentInit, OnDestroy {
  static controlCount = 1;

  @Input() searchResult: BehaviorSubject<any[]>;
  @Input() isServerSide: boolean;
  @Input() allowCreateNew: boolean;
  @Input() displayKey: string;
  @Input() itemTemplate: TemplateRef<any>;
  @Input() maxResultLimit: number;
  @Input() minSearchCharLimit: number;
  @Input() isTreeView: boolean;
  @Input() orderBy: string;
  @Input() orderDir: string;
  @Input() placeholder = '';
  @Input() readonly: boolean;
  @Input() autoFocus: boolean;
  @Input() styleClass: string;
  @Input() inputId = `np-tags_${NpTagsComponent.controlCount++}`;

  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Output() onSearch: EventEmitter<any> = new EventEmitter();

  @ViewChild('templatePortalContent') templatePortalContent: TemplateRef<any>;

  subscription: Subscription;
  options: any[];
  displayValue: string;
  searchTimeout: any;
  isLoading = false;
  innerValue: any[];
  isDisabled = false;

  private templatePortal: TemplatePortal<any>;
  private overlayRef: OverlayRef;
  private onChangeCallback: (_: any) => void = () => { };
  private onTouchedCallback: () => void = () => { };

  constructor(
    public overlay: Overlay,
    private viewContainerRef: ViewContainerRef,
    private overlayPositionBuilder: OverlayPositionBuilder,
    private elementRef: ElementRef,
    private utility: NpUtilityService
  ) { }

  ngAfterContentInit(): void {
    this.subscription = this.searchResult.subscribe((data) => {
      if (this.maxResultLimit && this.maxResultLimit > 0 && data && data.length > this.maxResultLimit) {
        this.options = data.splice(0, this.maxResultLimit);
      } else {
        this.options = data;
      }
      if (this.isServerSide) {
        this.isLoading = false;
        if (data) {
          if (!this.overlayRef.hasAttached()) {
            this.overlayRef.attach(this.templatePortal);
          }
        }
      }
    });
  }

  ngAfterViewInit(): void {
    const position: ConnectedPosition[] = [
      {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top'
      },
      {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom'
      }
    ];
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions(position);
    this.overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
      backdropClass: 'np-tg-backdrop',
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

  get value(): any[] {
    return this.innerValue ? this.innerValue : null;
  }

  set value(v: any[]) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
      this.onTouchedCallback();
      this.onChange.emit(v);
    }
  }

  writeValue(v: any): void {
    if (v !== this.innerValue) {
      this.innerValue = v;
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
    this.displayValue = null;
    this.overlayRef.detach();
    this.onTouchedCallback();
    this.elementRef.nativeElement.querySelector('input').focus();
  }

  _onInput() {
    if (this.isDisabled || this.readonly || !this.isServerSide) {
      return;
    }
    if (this.minSearchCharLimit && this.minSearchCharLimit > 0) {
      if (this.displayValue === undefined || this.displayValue == null || this.displayValue.length < this.minSearchCharLimit) {
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
    if (this._isSelected(val)) {
      this._removeTag(val);
      return;
    }
    if (!this.value) {
      this.value = [val];
    } else {
      this.value.push(val);
    }
  }

  _onClick() {
    if (this.isServerSide || this.isDisabled || this.readonly) {
      return;
    }
    if (!this.overlayRef.hasAttached()) {
      this.overlayRef.attach(this.templatePortal);
    }
  }

  _createNewTag() {
    if (this._isAlreadyCreated()) {
      return;
    }
    if (this.options === undefined || this.options == null) {
      this.options = [];
    }
    if (this.displayKey) {
      let newObj;
      newObj = {};
      newObj[this.displayKey] = this.displayValue;
      this.options.push(newObj);
      this._selectValue(newObj);
    } else {
      this.options.push(this.displayValue);
      this._selectValue(this.displayValue);
    }
    this.displayValue = null;
  }

  _isAlreadyCreated() {
    if (!this.innerValue) {
      return false;
    }
    if (this.displayKey) {
      const tag = {};
      tag[this.displayKey] = this.displayValue;
      const that = this;
      const idx = this.innerValue.findIndex((element) => {
        if (that.utility.isEqual(element, tag)) {
          return tag;
        }
      });
      if (idx > -1) {
        return true;
      }
    } else {
      const idx = this.innerValue.indexOf(this.displayValue);
      if (idx > -1) {
        return true;
      }
    }
    return false;
  }

  _getDisplayValue(val: any) {
    return this.displayKey ? val[this.displayKey] : val;
  }

  _removeTag(tag: any) {
    if (this.displayKey) {
      const that = this;
      const idx = this.innerValue.findIndex((element) => {
        if (that.utility.isEqual(element, tag)) {
          return tag;
        }
      });
      if (idx > -1) {
        this.innerValue.splice(idx, 1);
      }
      return;
    } else {
      const idx = this.innerValue.indexOf(tag);
      if (idx > -1) {
        this.innerValue.splice(idx, 1);
      }
    }
  }

  _isSelected(tag: any) {
    if (!this.innerValue || this.innerValue.length === 0) {
      return false;
    }
    if (this.displayKey) {
      const that = this;
      const idx = this.innerValue.findIndex((element) => {
        if (that.utility.isEqual(element, tag)) {
          return tag;
        }
      });
      if (idx > -1) {
        return true;
      }
    } else {
      const idx = this.innerValue.indexOf(tag);
      if (idx > -1) {
        return true;
      }
    }
    return false;
  }

  _onSelectNode(item) {
    if (item.items) {
      item.items.forEach(element => {
        this._onSelectNode(element);
      });
    } else {
      if (this._isSelected(item)) {
        return;
      }
      if (!this.value) {
        this.value = [item];
      } else {
        this.value.push(item);
      }
    }
  }

  _onDeselectNode(item) {
    if (item.items) {
      item.items.forEach(element => {
        this._onDeselectNode(element);
      });
    } else {
      this._removeTag(item);
    }
  }

  clear() {
    if (this.isDisabled || this.readonly) {
      return;
    }
    this.value = null;
    if (this.isServerSide) {
      this.options = null;
    }
  }

  _onKeydown(event: KeyboardEvent) {
    if (event.key === 'Tab') {
      this._close();
    }
  }
}
