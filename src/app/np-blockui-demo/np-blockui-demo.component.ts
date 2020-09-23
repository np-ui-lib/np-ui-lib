import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-np-blockui-demo',
  templateUrl: './np-blockui-demo.component.html'
})
export class NpBlockuiDemoComponent implements OnInit {

  constructor() { }

  blockUi1 = false;

  importText = 'import { NpBlockUiModule } from \'np-ui-lib\';';
  htmlText = '<span [np-blockui]="true"></span>';

  ngOnInit(): void {
  }

}
