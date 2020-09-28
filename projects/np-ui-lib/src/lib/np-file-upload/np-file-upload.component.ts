import { Component, ViewEncapsulation, ChangeDetectionStrategy, forwardRef, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';
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
export class NpFileUploadComponent implements ControlValueAccessor, Validator {
  static controlCount = 1;

  @Input() multiple: boolean;
  @Input() extensions: string;
  @Input() accept: string;
  @Input() size: number;
  @Input() totalSize: number;
  @Input() maxFiles: number;
  @Input() uploadButtonLabel: string;
  @Input() readOnly: boolean;
  @Input() autoFocus: boolean;
  @Input() tabIndex: number;
  @Input() styleClass: string;
  @Input() inputId = `np-file-upload_${NpFileUploadComponent.controlCount++}`;

  @Output() onChange: EventEmitter<any> = new EventEmitter();

  @ViewChild('fileUploadInput') fileUploadInput: ElementRef;

  innerValue: FileList;
  isDisabled = false;
  focused = false;
  private onChangeCallback: (_: any) => void = () => { };
  private onTouchedCallback: () => void = () => { };

  get value(): FileList {
    return this.innerValue ? this.innerValue : null;
  }

  set value(v: FileList) {
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

  _clear() {
    if (this.isDisabled || this.readOnly) {
      return;
    }
    this.value = null;
    this.fileUploadInput.nativeElement.value = '';
  }

  _onFileSelected($event) {
    if (this.isDisabled || this.readOnly) {
      return;
    }
    this.value = $event.target.files;
  }

  validate(control: FormControl) {
    const value = control.value ? Array.from<any>(control.value) : [];

    let isInValidExtension = false;
    if (this.extensions) {
      const exts = this.extensions.split(',');
      value.forEach(element => {
        if (exts.indexOf(element.name.split('.')[1]) === -1) {
          isInValidExtension = true;
        }
      });
      if (isInValidExtension) {
        return {
          extensions: {
            valid: false,
          }
        };
      }
    }

    let isInValidSize = false;
    if (this.size) {
      value.forEach(element => {
        if (element.size > this.size) {
          isInValidSize = true;
        }
      });
      if (isInValidSize) {
        return {
          size: {
            valid: false,
          }
        };
      }
    }

    if (this.multiple && this.totalSize) {
      let totalSize = 0;
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

  _getFilesCountsText() {
    if (!this.value || this.value === null || this.value.length === 0) {
      return '';
    }
    return this.value.length === 1 ? '1 file' : `${this.value.length} files`;
  }

  _formatBytes(file: File, decimals = 2) {
    const bytes = file.size;
    if (bytes === 0) {
      return '0 Bytes';
    }

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  _onFocus() {
    this.focused = true;
  }

  _onBlur() {
    this.focused = false;
    this.onTouchedCallback();
  }
}

