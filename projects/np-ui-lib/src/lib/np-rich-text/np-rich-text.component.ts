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

  @Input() height: number;
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
  @ViewChild('foreColorPopover') foreColorPopover: NpPopoverDirective;
  @ViewChild('backColorPopover') backColorPopover: NpPopoverDirective;

  innerValue: string;
  isDisabled = false;
  focused = false;
  isBold = false;
  isItalic = false;
  isUnderline = false;
  isBlockquote = false;
  isStrikethrough = false;
  currentFormat: string = 'no value';
  currentFont: string = 'no value';
  currentFontSize: string = 'no value';
  linkUrl: string;
  currentSelectionRange: Range;
  foreColor: string;
  backColor: string;

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
    if (sValue === 'no value') {
      return;
    }
    this._formatDoc(sCmd, sValue);
    setTimeout(() => {
      this.currentFormat = 'no value';
      this.currentFont = 'no value';
      this.currentFontSize = 'no value';
    }, 100);
  }

  _showForeColorOverlay() {
    if (document.getSelection() && document.getSelection().getRangeAt) {
      this.currentSelectionRange = document.getSelection().getRangeAt(0);;
    }
    var colour = document.queryCommandValue("foreColor");
    if (colour.indexOf('rgb') > -1) {
      colour = this._changeRGBToHex(colour);
    }
    if (colour.indexOf('transparent') > -1) {
      colour = null;
    }
    this.foreColor = colour;
  }

  _changeForeColor(color: any) {
    if (this.currentSelectionRange) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(this.currentSelectionRange);
      this.foreColor = color;
      if (color) {
        this._formatDoc('foreColor', color)
      } else {
        document.execCommand("removeFormat", false, "foreColor");
      }
      this.currentSelectionRange = null;
    }
    this.foreColorPopover.close();
  }

  _showBackColorOverlay() {
    if (document.getSelection() && document.getSelection().getRangeAt) {
      this.currentSelectionRange = document.getSelection().getRangeAt(0);;
    }
    var colour = document.queryCommandValue("backColor");
    if (colour.indexOf('rgb') > -1) {
      colour = this._changeRGBToHex(colour);
    }
    if (colour.indexOf('transparent') > -1) {
      colour = null;
    }
    this.backColor = colour;
  }

  _changeBackColor(color: any) {
    if (this.currentSelectionRange) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(this.currentSelectionRange);
      this.backColor = color;
      if (color) {
        this._formatDoc('backColor', color)
      } else {
        document.execCommand("removeFormat", false, "backColor");
      }
      this.currentSelectionRange = null;
    }
    this.backColorPopover.close();
  }

  _onCloseOverlays() {
    if (this.currentSelectionRange) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(this.currentSelectionRange);
      this.currentSelectionRange = null;
    }
    this.focus();
  }

  _showCreateLink() {
    if (document.getSelection() && document.getSelection().getRangeAt) {
      this.currentSelectionRange = document.getSelection().getRangeAt(0);;
    }
    this.linkUrl = 'https://';
  }

  _createLink() {
    if (this.currentSelectionRange) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(this.currentSelectionRange);
      if (this.linkUrl) {
        this._formatDoc('createlink', this.linkUrl);
      }
      this.currentSelectionRange = null;
    }
    this.createLinkPopover.close();
  }

  _closeCreateLinkOverlay() {
    this.createLinkPopover.close();
  }

  _changeRGBToHex(val) {
    const rgb = val.replace('rgb', '').replace('rgba', '').replace('(', '').replace(')', '').replace(' ', '');
    const rgbAray = rgb.split(',');
    return this._rgbToHex(Number(rgbAray[0]), Number(rgbAray[1]), Number(rgbAray[2]));
  }


  _rgbToHex(r: any, g: any, b: any) {
    const red = this._convertNumberToHex(r);
    const green = this._convertNumberToHex(g);
    const blue = this._convertNumberToHex(b);
    return `#${red}${green}${blue}`;
  }

  _convertNumberToHex(num: any) {
    let hex = Number(num).toString(16);
    if (hex.length < 2) {
      hex = `0${hex}`;
    }
    return hex;
  }

}
