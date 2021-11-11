import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-np-framework-css-demo',
  templateUrl: './np-framework-css-demo.component.html'
})
export class NpFrameworkCssDemoComponent implements OnInit {

  frameworkSCSS = `@import "dist/np-ui-lib/styles/theme.scss";
@include framework-style;`;

  constructor() { }

  ngOnInit(): void {
  }

}
