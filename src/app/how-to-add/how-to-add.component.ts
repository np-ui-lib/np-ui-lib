import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-to-add',
  templateUrl: './how-to-add.component.html'
})
export class HowToAddComponent implements OnInit {

  customSCSS = `@import "np-ui-lib/styles/theme.scss";
$primary-color: #4caf50;
$background-color: #EDF7ED;
$selected-color: #C9E7C9;
$border-color: #112611;
@include theme;`;

  constructor() { }

  ngOnInit(): void {
  }
}
