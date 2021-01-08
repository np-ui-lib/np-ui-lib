import { Component, ViewEncapsulation, ChangeDetectionStrategy, forwardRef, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { Input, Output, EventEmitter, TemplateRef, ViewChild, ViewContainerRef, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { TemplatePortal } from '@angular/cdk/portal';
import { OverlayRef, Overlay, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { TopBottomOverlayPositions } from '../np-utility/np-constants';
import { NpUtilityService } from '../np-utility/np-utility.service';

@Component({
  selector: 'np-dropdown',
  templateUrl: './np-dropdown.component.html',
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
export class NpDropdownComponent implements ControlValueAccessor, AfterViewInit, OnChanges {

  private static controlCount = 1;

  @Input() items: any[];
  @Input() displayKey: string;
  @Input() valueKey: string;
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
  @Output() onFocus: EventEmitter<any> = new EventEmitter();
  @Output() onBlur: EventEmitter<any> = new EventEmitter();

  @ViewChild('templatePortalContent') templatePortalContent: TemplateRef<any>;
  @ViewChild('control') inputViewChild: ElementRef;

  selected: any;
  innerValue: any;
  isDisabled = false;
  focused = false;
  isOpen = false;

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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.items) {
      this._setSelectedOption();
    }
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
      this.onChangeCallback(v);
      this.onChange.emit(v);
    }
  }

  writeValue(v: any): void {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this._setSelectedOption();
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

  focus() {
    this.inputViewChild.nativeElement.focus();
  }

  _setSelectedOption() {
    let selected: any;
    if (this.valueKey) {
      for (const item of this.items) {
        if (item[this.valueKey] === this.value) {
          selected = item;
          break;
        }
      }
    }
    else {
      for (const item of this.items) {
        if (item === this.value) {
          selected = item;
          break;
        }
      }
    }
    this.selected = selected;
  }

  _close() {
    this.overlayRef.detach();
    this.inputViewChild.nativeElement.focus();
    this.isOpen = false;
  }

  _clear() {
    if (this.isDisabled || this.readOnly) {
      return;
    }
    this.value = null;
    this.selected = null;
  }

  _selectValue(val: any) {
    if (this.isDisabled || this.readOnly) {
      return;
    }
    this.value = this.valueKey ? val[this.valueKey] : val;
    this.selected = val;
    this._close();
  }

  _open() {
    if (this.isDisabled || this.readOnly) {
      return;
    }
    if (!this.overlayRef.hasAttached()) {
      this.overlayRef.attach(this.templatePortal);
      this.isOpen = false;
    }
  }

  _isSelected(item: any) {
    if (this.displayKey || this.valueKey) {
      return this.utility.isEqual(this.selected, item);
    }
    return this.selected === item;
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
    return (this.displayKey && this.selected ? this.selected[this.displayKey] : this.selected) || '';
  }

  _onBlur($event) {
    this.focused = false;
    this.onTouchedCallback();
    this.onBlur.emit($event);
  }

  _onFocus($event) {
    this.focused = true;
    this.onFocus.emit($event);
  }
}
