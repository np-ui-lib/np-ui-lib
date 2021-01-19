import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-np-rich-text-demo',
  templateUrl: './np-rich-text-demo.component.html'
})
export class NpRichTextDemoComponent implements OnInit {

  importText = 'import { NpRichTextModule } from \'np-ui-lib\';';
  htmlText = '<np-rich-text [(ngModel)]="value"></np-rich-text>';
  configText = `['bold', 'italic', 'underline', 'strikethrough', 'removeformat',
'formatblock', 'blockquote', 'fontname', 'fontsize', 'forecolor', 'backcolor',
'subscript', 'superscript', 'justifyleft', 'justifycenter', 'justifyright',
'indent', 'outdent', 'insertunorderedlist', 'insertorderedlist', 'createlink',
'undo', 'redo']`;
  fontText = `['Arial', 'Arial Black', 'Courier New', 'Times New Roman']`;

  rtf1: string;
  rtf2: string;
  isDisabled = false;
  isReadonly = false;
  required = false;
  height: number;

  config = ['bold', 'italic', 'underline', 'strikethrough', 'removeformat',
    'formatblock', 'blockquote', 'fontname', 'fontsize'];
  fonts = ['Arial', 'Arial Black'];

  constructor() { }

  ngOnInit(): void {
  }

  setValue() {
    this.rtf1 = `<p><h1><font color="#007bff"><a href="http://npmjs.com/np-ui-lib">NP-UI-LIB</a></font></h1><h4>
    <font color="#007bff"><i>Native Angular UI Components and Design Framework</i></font></h4></p>
    <blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><p><h3>Why np-ui-lib?</h3></p>
    </blockquote><p><ul><ul><li>An enterprise level UI design</li><li>45+ components</li>
    <li>Free and open source</li><li>Fast and easy to implement</li><li>Theming and i18N supported</li></ul>
    </ul></p><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><p><h3>Best Practices</h3></p>
    </blockquote><p><ul><ul><li>Followed best coding practices</li><li>Responsive UI design</li>
    <li>Good documentation</li><li>Flexible to customization</li><li>WAI-ARIA included</li></ul></ul></p>`;
  }

}
