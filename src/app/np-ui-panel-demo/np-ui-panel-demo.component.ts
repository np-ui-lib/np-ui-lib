import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-np-ui-panel-demo',
  templateUrl: './np-ui-panel-demo.component.html',
  styleUrls: ['./np-ui-panel-demo.component.css']
})
export class NpUiPanelDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title: string = "<b>What is paragraph?</b>";

}
