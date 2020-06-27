import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-np-blockui-demo',
  templateUrl: './np-blockui-demo.component.html',
  styleUrls: ['./np-blockui-demo.component.css']
})
export class NpBlockuiDemoComponent implements OnInit {

  blockUi1: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  importText = "import { NpBlockUiModule } from 'np-ui-lib';"
  htmlText = '<span [np-blockui]="true"></span>';

}
