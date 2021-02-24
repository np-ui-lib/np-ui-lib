import { Component, ViewEncapsulation, ChangeDetectionStrategy, forwardRef, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Component({
  selector: 'np-file-upload',
  templateUrl: './np-file-upload.component.html',
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

  private static controlCount = 1;

  @Input() multiple: boolean;
  @Input() extensions: string;
  @Input() accept: string;
  @Input() size: number;
  @Input() totalSize: number;
  @Input() maxFiles: number;
  @Input() uploadButtonLabel: string;
  @Input() showFileSize = true;
  @Input() readOnly: boolean;
  @Input() autoFocus: boolean;
  @Input() tabIndex: number;
  @Input() styleClass: string;
  @Input() inputId = `np-file-upload_${NpFileUploadComponent.controlCount++}`;

  @Output() onChange: EventEmitter<File[]> = new EventEmitter();
  @Output() onFocus: EventEmitter<any> = new EventEmitter();
  @Output() onBlur: EventEmitter<any> = new EventEmitter();

  @ViewChild('fileUploadInput') fileUploadInput: ElementRef;
  @ViewChild('control') inputViewChild: ElementRef;

  innerValue: File[];
  isDisabled = false;
  focused = false;
  private onChangeCallback: (_: any) => void = () => { };
  private onTouchedCallback: () => void = () => { };

  get value(): File[] {
    return this.innerValue ? this.innerValue : null;
  }

  set value(v: File[]) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
      this.onChange.emit(v);
    }
  }

  writeValue(v: File[]): void {
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

  validate(control: FormControl) {
    const value = control.value || [];
    if (this.extensions) {
      let isInValidExtension = false;
      const exts = this.extensions.split(',');
      value.forEach(element => {
        if (exts.indexOf(element.name.split('.')[1]) === -1) {
          isInValidExtension = true;
        }
      });
      if (isInValidExtension) {
        return { extensions: { valid: false } };
      }
    }
    if (this.size) {
      let isInValidSize = false;
      value.forEach(element => {
        if (element.size > this.size) {
          isInValidSize = true;
        }
      });
      if (isInValidSize) {
        return { size: { valid: false } };
      }
    }
    if (this.multiple && this.totalSize) {
      let totalSize = 0;
      value.forEach(element => {
        totalSize = totalSize + element.size;
      });
      if (totalSize > this.totalSize) {
        return { totalSize: { valid: false } };
      }
    }
    if (this.maxFiles) {
      if (value.length > this.maxFiles) {
        return { maxFiles: { valid: false } };
      }
    }
  }

  focus() {
    this.inputViewChild.nativeElement.focus();
  }

  _clear() {
    if (this.isDisabled || this.readOnly) {
      return;
    }
    this.value = null;
  }

  _onFileSelected($event) {
    if (this.isDisabled || this.readOnly) {
      return;
    }
    if (this.multiple) {
      const newFiles = Array.from<File>($event.target.files);
      if (newFiles.length > 0) {
        if (this.value && this.value.length > 0) {
          this.value = this.value.concat(newFiles);
        } else {
          this.value = newFiles;
        }
      }
    } else {
      this.value = Array.from<File>($event.target.files);
    }
    this.fileUploadInput.nativeElement.value = '';
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

  _remove(idx: number) {
    this.value = this.value.filter((element, index) => index !== idx);
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

  _getLabel() {
    return this.uploadButtonLabel ? this.uploadButtonLabel : (this.multiple ? "Choose_Files" : "Choose_File");
  }

  _getInputId() {
    return this.inputId + "_input";
  }
}

