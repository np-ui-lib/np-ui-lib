import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-np-utility-demo',
  templateUrl: './np-utility-demo.component.html'
})
export class NpUtilityDemoComponent implements OnInit {

  constructor() { }

  text = 'A paragraph is a series of related sentences developing a central idea, called the topic.Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea.Paragraphs add one idea at a time to your broader argument.';
  highlightTextCode = `<p [innerHTML]="text | npHighLight: 'paragraph'"></p>`;
  autofocusTextCode = `<input type="text" [npAutoFocus]="true">`;
  toolbarCode = `<div class="np-toolbar">
  <div class="np-toolbar-item">...</div>
  <div class="np-toolbar-item">...</div>
  <div class="np-toolbar-separator"></div>
  ...
  <div class="np-toolbar-spacer"></div>
  <div class="np-toolbar-item">...</div>
  <div class="np-toolbar-item">...</div>
</div>`
  firstName: string;
  lastName: string;
  birthDate: Date;
  birthTime: string;
  isActive = true;
  description: string;
  photo: any;

  ngOnInit(): void {

  }

}
