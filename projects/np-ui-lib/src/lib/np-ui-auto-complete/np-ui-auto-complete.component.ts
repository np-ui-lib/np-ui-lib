import { Component, ViewEncapsulation, ChangeDetectionStrategy, forwardRef, Input, HostListener, ElementRef, EventEmitter, Output, TemplateRef } from '@angular/core';
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
  _x:number;
  _y:number;
  private onChangeCallback: (_: any) => void;
  private onTouchedCallback: () => void;

  _isOpen: boolean = false;
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

  @Input() optionTemplate: TemplateRef<any>;

  @Input() maxResultLimit: number;
  @Input() minSearchCharLimit: number;

  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
    this._subscription = this.searchResult.subscribe((data) => {
      if (this.maxResultLimit && this.maxResultLimit > 0 && data && data.length > this.maxResultLimit) {
        this._searchResult = data.splice(0, this.maxResultLimit);
      } else {
        this._searchResult = data;
      }
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
      this._displayValue = this.displayKey && v ? v[this.displayKey] : v;
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

  _open() {
    if (this._isDisabled) {
      return;
    }
    var position = this.elRef.nativeElement.getBoundingClientRect();
    this._x = position.left;
    this._y = position.top + position.height;
    this._searchResult = null;
    this._isOpen = true;
  }

  _close() {
    if (this.value) {
      this._displayValue = this.displayKey && this.value ? this.value[this.displayKey] : this.value;
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

  _onFocus() {
    this.onTouchedCallback();
    this._open();
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
}
