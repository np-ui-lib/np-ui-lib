import {
  Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation, forwardRef, ViewChild, TemplateRef, ViewContainerRef, ElementRef, AfterViewInit, AfterContentInit
} from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";
import { Overlay, OverlayRef, OverlayPositionBuilder, ConnectedPosition } from "@angular/cdk/overlay";
import { TemplatePortal } from "@angular/cdk/portal";
import { BehaviorSubject, Subscription } from 'rxjs';

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
export class NpAutoCompleteComponent implements ControlValueAccessor, AfterViewInit, AfterContentInit {

  static controlCount = 1;

  _innerValue: any;
  _isDisabled: boolean = false;
  private onChangeCallback: (_: any) => void = () => { };
  private onTouchedCallback: () => void = () => { };

  @Input() searchResult: BehaviorSubject<any[]>;
  _subscription: Subscription;
  _searchResult: any[];
  _displayValue: string;
  _searchTimeout: any;

  @Output() onSearch: EventEmitter<any> = new EventEmitter();

  @Input() placeholder: string = "";
  @Input() styleClass: string;
  @Output() onChange: EventEmitter<any> = new EventEmitter();

  _isLoading: boolean = false;

  @Input() allowCreateNew: boolean;

  @Input() displayKey: string;

  @Input() itemTemplate: TemplateRef<any>;

  @Input() maxResultLimit: number;
  @Input() minSearchCharLimit: number;
  @Input() inputId: string = `np-auto-complete_${NpAutoCompleteComponent.controlCount++}`;

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
      if (data) {
        this.overlayRef.detach();
      }
      if (this.maxResultLimit && this.maxResultLimit > 0 && data && data.length > this.maxResultLimit) {
        this._searchResult = data.splice(0, this.maxResultLimit);
      } else {
        this._searchResult = data;
      }
      this._isLoading = false;
      if (data) {
        if (!this.overlayRef.hasAttached()) {
          this.overlayRef.attach(this.templatePortal);
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
      backdropClass: "np-ac-backdrop",
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      panelClass: this.styleClass
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

  get value(): any {
    return this._innerValue ? this._innerValue : null;
  };

  set value(v: any) {
    if (v !== this._innerValue) {
      this._innerValue = v;
      this._displayValue = this.displayKey && v ? v[this.displayKey] : v;
      this.onChangeCallback(v);
      this.onTouchedCallback();
      this.onChange.emit(v);
    }
  }

  writeValue(v: any): void {
    if (v !== this._innerValue) {
      this._innerValue = v;
      this._displayValue = this.displayKey && v ? v[this.displayKey] : v;
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
    if (this.value) {
      this._displayValue = this.displayKey && this.value ? this.value[this.displayKey] : this.value;
    } else {
      this._displayValue = null;
    }
    this.overlayRef.detach();
    this.onTouchedCallback();
  }

  _clear() {
    if (this._isDisabled) {
      return;
    }
    this.value = null;
    this._searchResult = null;
  }

  _onInput() {
    if (this._isDisabled) {
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
    this.value = val;
    this._close();
  }

  _createNewTag() {
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
  }

  _onKeydown(event: KeyboardEvent) {
    if (event.which === 9) {
      this._close();
    }
  }
}
