import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-np-directives-demo',
  templateUrl: './np-directives-demo.component.html'
})
export class NpDirectivesDemoComponent implements OnInit {

  text = 'A paragraph is a series of related sentences developing a central idea, called the topic.Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea.Paragraphs add one idea at a time to your broader argument.';
  highlightTextCode = `<p [innerHTML]="text | npHighlight: 'paragraph'"></p>`;
  autofocusTextCode = `<input type="text" [npAutofocus]="true">`;

  constructor() { }

  ngOnInit(): void {
  }

}
