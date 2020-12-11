import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-np-theming-demo',
  templateUrl: './np-theming-demo.component.html'
})
export class NpThemingDemoComponent implements OnInit {

  customSCSS = `@import "np-ui-lib/styles/theme.scss";
$primary-color: #4caf50; <span class="np-text-success">// set primary color</span>
$background-color: #EDF7ED; <span class="np-text-success">// set background color</span>
$selected-color: #C9E7C9; <span class="np-text-success">// set background color for selected items</span>
$border-color: #112611; <span class="np-text-success">// set border color</span>
@include theme;`;

  constructor() { }

  ngOnInit(): void {
  }

}
