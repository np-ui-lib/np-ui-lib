import {
  ChangeDetectionStrategy, Component, ElementRef, EventEmitter, forwardRef,
  Input, Output, ViewChild, ViewEncapsulation
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { NpPopoverDirective } from '../np-popover/np-popover.directive';

@Component({
  selector: 'np-rich-text',
  templateUrl: './np-rich-text.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NpRichTextComponent),
      multi: true
    }
  ]
})
export class NpRichTextComponent implements ControlValueAccessor {
  static controlCount = 1;

  @Input() height = 200;
  @Input() readOnly: boolean;
  @Input() autoFocus: boolean;
  @Input() tabIndex: number;
  @Input() styleClass: string;
  @Input() inputId = `np-rich-text_${NpRichTextComponent.controlCount++}`;
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Output() onFocus: EventEmitter<any> = new EventEmitter();
  @Output() onBlur: EventEmitter<any> = new EventEmitter();

  @ViewChild('control') inputViewChild: ElementRef;
  @ViewChild('createLinkPopover') createLinkPopover: NpPopoverDirective;

  innerValue: string;
  isDisabled = false;
  focused = false;
  isBold = false;
  isItalic = false;
  isUnderline = false;
  isBlockquote = false;
  isStrikethrough = false;
  currentFormat: string = 'no format';
  linkUrl: string;
  currentSelectionRange: Range;
  showUnlink = false;

  private onChangeCallback: (_: any) => void = () => { };
  private onTouchedCallback: () => void = () => { };

  constructor() { }

  get value(): string {
    return this.innerValue ? this.innerValue : null;
  }

  set value(v: string) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
      this.onChange.emit(v);
    }
  }

  writeValue(v: string): void {
    if (v !== this.innerValue) {
      this.innerValue = v;
      if (this.inputViewChild && v) {
        this.inputViewChild.nativeElement.innerHTML = v;
      }
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

  _onInputChange(event) {
    this.value = event.target.innerHTML;
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

  focus() {
    this.inputViewChild.nativeElement.focus();
  }

  _formatDoc(sCmd: string, sValue: any) {
    document.execCommand(sCmd, false, sValue);
    this.focus();
  }

  _formatBlock(sCmd: string, sValue: any) {
    if (sValue === 'no format') {
      return;
    }
    this._formatDoc(sCmd, sValue);
    setTimeout(() => {
      this.currentFormat = 'no format';
    }, 100);
  }

  _createLink() {
    var url = prompt('Enter URL for the link', 'http:\/\/');
    if (url && url != '' && url != 'http://') {
      this._formatDoc('createlink', url);
    }
  }
}
