import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-np-panel-demo',
  templateUrl: './np-panel-demo.component.html',
  styleUrls: ['./np-panel-demo.component.css']
})
export class NpPanelDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title: string = "<b>What is paragraph?</b>";

}
