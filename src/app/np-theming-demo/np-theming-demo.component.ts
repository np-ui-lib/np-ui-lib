import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-np-theming-demo",
  templateUrl: "./np-theming-demo.component.html",
})
export class NpThemingDemoComponent implements OnInit {
  customSCSS = `@import "np-ui-lib/styles/theme.scss";
$primary-color: #0b7ad1;// set primary color</span>
$background-color: #f5f5f5;// set background color</span>
$selected-background-color: #eeeeee;// set background color for selected items and hover</span>
$border-color: #9e9e9e;// set border color</span>
$border-radius: 2px;// set border radius</span>
$outline-color: #a6d5fa;// set outline color</span>
@include theme;`;

  constructor() {}

  ngOnInit(): void {}
}
