import { Component, ViewEncapsulation, ChangeDetectionStrategy, forwardRef, Input, ViewChild, HostListener, ElementRef, EventEmitter, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'np-ui-auto-complete',
  templateUrl: './np-ui-auto-complete.component.html',
  styleUrls: ['./np-ui-auto-complete.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NpUiAutoCompleteComponent),
      multi: true
    }
  ]
})
export class NpUiAutoCompleteComponent implements ControlValueAccessor {

  _innerValue: string;
  _isDisabled: boolean = false;
  private onChangeCallback: (_: any) => void;
  private onTouchedCallback: () => void;

  _isOpen: boolean = false;
  @Input() searchResult: BehaviorSubject<string[]>;
  _subscription: Subscription;
  _searchResult: string[];
  _displayValue: string;
  _searchTimeout: any;

  @Output() onSearch: EventEmitter<any> = new EventEmitter();

  @Input() placeholder: string = "";
  @Input() styleClass: string;
  @Output() onChange: EventEmitter<any> = new EventEmitter();

  _isLoading: boolean = false;

  @Input() allowCreateNew: boolean;

  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
    this._subscription = this.searchResult.subscribe((data) => {
      this._searchResult = data;
      this._isLoading = false;
    });
  }

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

  @HostListener('document:click', ['$event'])
  clickOutSide(event: any) {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this._close();
    }
  }

  get value(): any {
    return this._innerValue ? this._innerValue : null;
  };

  set value(v: any) {
    if (v !== this._innerValue) {
      this._innerValue = v;
      this._displayValue = v;
      this.onChangeCallback(v);
      this.onTouchedCallback();
      if (this.onChange) {
        this.onChange.emit(v);
      }
    }
  }

  writeValue(v: any): void {
    if (v !== this._innerValue) {
      this._innerValue = v;
      this._displayValue = v;
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

  _open() {
    if (this._isDisabled) {
      return;
    }
    this._searchResult = null;
    this._isOpen = true;
  }

  _close() {
    if (this.value) {
      this._displayValue = this.value;
    } else {
      this._displayValue = null;
    }
    this._isOpen = false;
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
    this._isLoading = true;
    if (this._searchTimeout) {
      clearTimeout(this._searchTimeout);
    }
    this._searchTimeout = setTimeout(() => {
      this.onSearch.emit(this._displayValue);
    }, 1000);
  }

  _selectValue(val: string) {
    this.value = val;
    this._close();
  }

  _onFocus() {
    this.onTouchedCallback();
    this._open();
  }

  _createNewTag() {
    if (this._searchResult == undefined || this._searchResult == null) {
      this._searchResult = [];
    }
    this._searchResult.push(this._displayValue);
    this._selectValue(this._displayValue);
  }

  _notFoundInResult() {
    return this._searchResult == undefined || this._searchResult == null || this._searchResult.indexOf(this._displayValue) === -1;
  }
}
