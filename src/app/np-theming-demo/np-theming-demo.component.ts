import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-np-theming-demo',
  templateUrl: './np-theming-demo.component.html'
})
export class NpThemingDemoComponent implements OnInit {

  customSCSS = `@import "np-ui-lib/styles/theme.scss";
$primary-color: #0d47a1;// set primary color</span>
$background-color: #f5f5f5;// set background color</span>
$selected-color: #eeeeee;// set background color for selected items</span>
$border-color: #9e9e9e;// set border color</span>
$border-radius: 2px;// set border radius</span>
$outline-color: #0d47a150;// set outline color</span>
$outline-size: 0.2rem;// set outline size</span>
@include theme;`;

  constructor() { }

  ngOnInit(): void {
  }

}
