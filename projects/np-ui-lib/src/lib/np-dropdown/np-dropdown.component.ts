import { Component, ViewEncapsulation, ChangeDetectionStrategy, forwardRef, AfterViewInit, AfterContentInit } from '@angular/core';
import { Input, Output, EventEmitter, TemplateRef, ViewChild, ViewContainerRef, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { TemplatePortal } from '@angular/cdk/portal';
import { OverlayRef, Overlay, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { NpUtilityService } from '../np-utility/np-utility.service';
import { TopBottomOverlayPositions } from '../np-utility/np-constants';

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
  static controlCount = 1;

  @Input() items: any[];
  @Input() displayKey: string;
  @Input() itemTemplate: TemplateRef<any>;
  @Input() orderBy: string;
  @Input() orderDir: string;
  @Input() placeholder = '';
  @Input() readOnly: boolean;
  @Input() autoFocus: boolean;
  @Input() tabIndex: number;
  @Input() styleClass: string;
  @Input() inputId = `np-dropdown_${NpDropdownComponent.controlCount++}`;

  @Output() onChange: EventEmitter<any> = new EventEmitter();

  @ViewChild('templatePortalContent') templatePortalContent: TemplateRef<any>;

  displayValue: string;
  innerValue: any;
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

  }

  ngAfterViewInit(): void {
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions(TopBottomOverlayPositions);
    this.overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
      backdropClass: 'np-dropdown-backdrop',
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      panelClass: this.styleClass
    });
    this.templatePortal = new TemplatePortal(
      this.templatePortalContent,
      this.viewContainerRef
    );
    this.overlayRef.backdropClick().subscribe(() => this._close());
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
  }

  _selectValue(val: any) {
    if (this.isDisabled || this.readOnly) {
      return;
    }
    this.value = val;
    this._close();
  }

  _open() {
    if (this.isDisabled || this.readOnly) {
      return;
    }
    if (!this.overlayRef.hasAttached()) {
      this.overlayRef.attach(this.templatePortal);
    }
  }

  _isSelected(item: any) {
    if (!this.innerValue || this.innerValue.length === 0) {
      return false;
    }
    if (this.displayKey) {
      if (this.utility.isEqual(this.innerValue, item)) {
        return true;
      }
    } else {
      if (this.innerValue === item) {
        return true;
      }
    }
    return false;
  }

  _onKeydown(event: KeyboardEvent) {
    if (event.key === 'Tab' || event.key === 'Escape') {
      this._close();
    }
    if (event.key === 'ArrowDown') {
      this._open();
      event.preventDefault();
    }
  }

  _trackBy(index: number): number {
    return index;
  }

  _getDisplayValue() {
    return this.displayValue || '';
  }

  _onBlur() {
    this.onTouchedCallback();
  }
}
