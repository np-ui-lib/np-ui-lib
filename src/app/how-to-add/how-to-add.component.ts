import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-to-add',
  templateUrl: './how-to-add.component.html'
})
export class HowToAddComponent implements OnInit {

  importCss = `"styles": [
    "node_modules/@angular/cdk/overlay-prebuilt.css",
    "node_modules/np-ui-lib/style.css",
    ...
],`;

  constructor() { }

  ngOnInit(): void {
  }
}
