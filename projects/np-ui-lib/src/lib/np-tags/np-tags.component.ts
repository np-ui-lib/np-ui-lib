import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation, forwardRef, ViewChild, TemplateRef, ViewContainerRef, ElementRef, AfterViewInit, AfterContentInit } from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";
import { Overlay, OverlayRef, OverlayPositionBuilder, ConnectedPosition } from "@angular/cdk/overlay";
import { TemplatePortal } from "@angular/cdk/portal";
import { BehaviorSubject, Subscription } from 'rxjs';

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
export class NpTagsComponent implements ControlValueAccessor, AfterViewInit, AfterContentInit {

  _innerValue: any[];
  _isDisabled: boolean = false;
  private onChangeCallback: (_: any) => void;
  private onTouchedCallback: () => void;

  _subscription: Subscription;
  _searchResult: any[];
  _displayValue: string;
  _searchTimeout: any;
  _isLoading: boolean = false;

  @Input() searchResult: BehaviorSubject<any[]>;
  @Input() placeholder: string = "";
  @Input() styleClass: string;
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Input() isServerSide: boolean;
  @Input() allowCreateNew: boolean;
  @Input() displayKey: string;
  @Input() itemTemplate: TemplateRef<any>;
  @Input() maxResultLimit: number;
  @Input() minSearchCharLimit: number;
  @Output() onSearch: EventEmitter<any> = new EventEmitter();

  @ViewChild("templatePortalContent") templatePortalContent: TemplateRef<any>;
  private templatePortal: TemplatePortal<any>;
  private overlayRef: OverlayRef;

  constructor(
    public overlay: Overlay,
    private _viewContainerRef: ViewContainerRef,
    private overlayPositionBuilder: OverlayPositionBuilder,
    private elementRef: ElementRef
  ) { }

  ngAfterContentInit(): void {
    this._subscription = this.searchResult.subscribe((data) => {
      if (this.maxResultLimit && this.maxResultLimit > 0 && data && data.length > this.maxResultLimit) {
        this._searchResult = data.splice(0, this.maxResultLimit);
      } else {
        this._searchResult = data;
      }
      if (this.isServerSide) {
        this._isLoading = false;
        if (data) {
          if (!this.overlayRef.hasAttached()) {
            this.overlayRef.attach(this.templatePortal);
          }
        }
      }
    });
  }

  ngAfterViewInit(): void {
    var position: ConnectedPosition[] = [
      {
        originX: "start",
        originY: "bottom",
        overlayX: "start",
        overlayY: "top"
      },
      {
        originX: "start",
        originY: "top",
        overlayX: "start",
        overlayY: "bottom"
      }
    ];
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions(position);
    this.overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
      backdropClass: "np-tg-backdrop",
      scrollStrategy: this.overlay.scrollStrategies.reposition()
    });
    this.templatePortal = new TemplatePortal(
      this.templatePortalContent,
      this._viewContainerRef
    );
    this.overlayRef.backdropClick().subscribe(() => this._close());
  }

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

  get value(): any[] {
    return this._innerValue ? this._innerValue : null;
  };

  set value(v: any[]) {
    if (v !== this._innerValue) {
      this._innerValue = v;
      this.onChangeCallback(v);
      this.onTouchedCallback();
      this.onChange.emit(v);
    }
  }

  writeValue(v: any): void {
    if (v !== this._innerValue) {
      this._innerValue = v;
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this._isDisabled = isDisabled;
  }

  _close() {
    this._displayValue = null;
    this.overlayRef.detach();
    this.onTouchedCallback();
  }

  _clear() {
    if (this._isDisabled) {
      return;
    }
    this.value = null;
    if (this.isServerSide) {
      this._searchResult = null;
    }
  }

  _onInput() {
    if (this._isDisabled || !this.isServerSide) {
      return;
    }
    if (this.minSearchCharLimit && this.minSearchCharLimit > 0) {
      if (this._displayValue == undefined || this._displayValue == null || this._displayValue.length < this.minSearchCharLimit) {
        return;
      }
    }
    this._isLoading = true;
    if (this._searchTimeout) {
      clearTimeout(this._searchTimeout);
    }
    this._searchTimeout = setTimeout(() => {
      this.onSearch.emit(this._displayValue);
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

  _onFocus() {
    if (!this.isServerSide) {
      if (!this.overlayRef.hasAttached()) {
        this.overlayRef.attach(this.templatePortal);
      }
    }
  }

  _createNewTag() {
    if (this._isAlreadyCreated()) {
      return;
    }
    if (this._searchResult == undefined || this._searchResult == null) {
      this._searchResult = [];
    }
    if (this.displayKey) {
      var newObj = {};
      newObj[this.displayKey] = this._displayValue;
      this._searchResult.push(newObj);
      this._selectValue(newObj);
    } else {
      this._searchResult.push(this._displayValue);
      this._selectValue(this._displayValue);
    }
    this._displayValue = null;
  }

  _isAlreadyCreated() {
    if (!this._innerValue) {
      return false;
    }
    if (this.displayKey) {
      var tag = {};
      tag[this.displayKey] = this._displayValue;
      var idx = this._innerValue.findIndex(function (element) {
        if (JSON.stringify(element) == JSON.stringify(tag)) {
          return tag;
        }
      });
      if (idx > -1) {
        return true;
      }
    } else {
      var idx = this._innerValue.indexOf(this._displayValue);
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
      var idx = this._innerValue.findIndex(function (element) {
        if (JSON.stringify(element) == JSON.stringify(tag)) {
          return tag;
        }
      });
      if (idx > -1) {
        this._innerValue.splice(idx, 1);
      }
      return;
    }
    var idx = this._innerValue.indexOf(tag);
    if (idx > -1) {
      this._innerValue.splice(idx, 1);
    }
  }

  _isSelected(tag: any) {
    if (!this._innerValue || this._innerValue.length == 0) {
      return false;
    }
    if (this.displayKey) {
      var idx = this._innerValue.findIndex(function (element) {
        if (JSON.stringify(element) == JSON.stringify(tag)) {
          return tag;
        }
      });
      if (idx > -1) {
        return true;
      }
    } else {
      var idx = this._innerValue.indexOf(tag);
      if (idx > -1) {
        return true;
      }
    }
    return false;
  }
}
