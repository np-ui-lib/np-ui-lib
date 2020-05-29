import { Component, ViewEncapsulation, ChangeDetectionStrategy, forwardRef, AfterViewInit, AfterContentInit, Input, Output, EventEmitter, TemplateRef, ViewChild, ViewContainerRef, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { TemplatePortal } from '@angular/cdk/portal';
import { OverlayRef, Overlay, OverlayPositionBuilder, ConnectedPosition } from '@angular/cdk/overlay';

@Component({
  selector: 'np-dropdown',
  templateUrl: './np-dropdown.component.html',
  styleUrls: ['./np-dropdown.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NpDropdownComponent),
      multi: true
    }
  ]
})
export class NpDropdownComponent implements ControlValueAccessor, AfterViewInit, AfterContentInit {

  _displayValue: string;
  _innerValue: any;
  _isDisabled: boolean = false;
  private onChangeCallback: (_: any) => void;
  private onTouchedCallback: () => void;

  @Input() items: any[];
  @Input() displayKey: string;
  @Input() placeholder: string = "";
  @Input() inputId: string;
  @Input() styleClass: string;
  @Input() itemTemplate: TemplateRef<any>;
  @Output() onChange: EventEmitter<any> = new EventEmitter();

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
      backdropClass: "np-dd-backdrop",
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      panelClass: this.styleClass
    });
    this.templatePortal = new TemplatePortal(
      this.templatePortalContent,
      this._viewContainerRef
    );
    this.overlayRef.backdropClick().subscribe(() => this._close());
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
  }

  _selectValue(val: any) {
    if (this._isDisabled) {
      return;
    }
    this.value = val;
    this._close();
  }

  _open() {
    if (this._isDisabled) {
      return;
    }
    if (!this.overlayRef.hasAttached()) {
      this.overlayRef.attach(this.templatePortal);
    }
  }

  _isSelected(item: any) {
    if (!this._innerValue || this._innerValue.length === 0) {
      return false;
    }
    if (this.displayKey) {
      if (JSON.stringify(this._innerValue) === JSON.stringify(item)) {
        return true;
      }
    } else {
      if (this._innerValue === item) {
        return true;
      }
    }
    return false;
  }
}
