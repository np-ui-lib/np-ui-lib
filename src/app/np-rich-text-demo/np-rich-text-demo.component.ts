import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-np-rich-text-demo',
  templateUrl: './np-rich-text-demo.component.html'
})
export class NpRichTextDemoComponent implements OnInit {

  rtf1: string;

  constructor() { }

  ngOnInit(): void {
  }

  setValue() {
    this.rtf1 = '<p><b>Text set on button click</b></p>'
  }

}
