import { Component, ViewEncapsulation, ChangeDetectionStrategy, forwardRef, Output, EventEmitter, Input, ViewChild, ElementRef, AfterContentInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Component({
  selector: 'np-file-upload',
  templateUrl: './np-file-upload.component.html',
  styleUrls: ['./np-file-upload.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NpFileUploadComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => NpFileUploadComponent),
      multi: true,
    }
  ]
})
export class NpFileUploadComponent implements ControlValueAccessor, Validator, AfterContentInit {

  @ViewChild('fileUploadInput') fileUploadInput: ElementRef;

  _innerValue: any;
  _isDisabled: boolean = false;
  private onChangeCallback: (_: any) => void;
  private onTouchedCallback: () => void;
  @Output() onChange: EventEmitter<any> = new EventEmitter();

  @Input() placeholder: string = "";
  @Input() styleClass: string;
  @Input() multiple: boolean;
  @Input() inputId: string;
  /**
 * File extentions in string format, separated by comma
 */
  @Input() extentions: string;

  /**
   * File size in bytes
   */
  @Input() size: number;

  /**
 * All File size in bytes
 */
  @Input() totalSize: number;

  /**
   * Files allowed to select
   */
  @Input() maxFiles: number;

  @Input() uploadButtonLabel: string;

  ngAfterContentInit(): void {
    if (!this.inputId) {
      this.inputId = "np-file-upload_" + Math.floor((Math.random() * 10000) + 1);
    }
  }

  get value(): any {
    return this._innerValue ? this._innerValue : null;
  };

  set value(v: any) {
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

  _clear() {
    if (this._isDisabled) {
      return;
    }
    this.value = null;
    this.fileUploadInput.nativeElement.value = '';
  }

  _onFileSelected($event) {
    if (this._isDisabled) {
      return;
    }
    this.value = $event.target.files;
  }

  validate(control: FormControl) {
    var value = control.value ? Array.from<any>(control.value) : [];

    var _isInValidExtention = false;
    if (this.extentions) {
      var exts = this.extentions.split(",");
      value.forEach(element => {
        if (exts.indexOf(element.name.split(".")[1]) === -1) {
          _isInValidExtention = true;
        }
      });
      if (_isInValidExtention) {
        return {
          extentions: {
            valid: false,
          }
        };
      }
    }

    var _isInValidSize = false;
    if (this.size) {
      value.forEach(element => {
        if (element.size > this.size) {
          _isInValidSize = true;
        }
      });
      if (_isInValidSize) {
        return {
          size: {
            valid: false,
          }
        };
      }
    }

    if (this.multiple && this.totalSize) {
      var totalSize = 0;
      value.forEach(element => {
        totalSize = totalSize + element.size;
      });
      if (totalSize > this.totalSize) {
        return {
          totalSize: {
            valid: false,
          },
        };
      }
    }

    if (this.maxFiles) {
      if (value.length > this.maxFiles) {
        return {
          maxFiles: {
            valid: false,
          },
        };
      }
    }
  }

  clear() {
    this._clear();
  }

}

