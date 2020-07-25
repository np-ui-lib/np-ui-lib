import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-np-panel-demo',
  templateUrl: './np-panel-demo.component.html',
  styleUrls: ['./np-panel-demo.component.css']
})
export class NpPanelDemoComponent implements OnInit {

  constructor() { }

  importText = 'import { NpPanelModule } from \'np-ui-lib\';';
  htmlText = `<np-panel [title]="title" [allowToMinimize]="true" [allowToZoom]="true" [allowToClose]="true" [styleClass]="'np-pn-danger'" [height]="200">
  Panel Body content...
</np-panel>`;

  title = '<b>What is paragraph?</b>';
  pnl2Disabled = false;

  ngOnInit(): void {
  }

  togglePanel2Disabled() {
    this.pnl2Disabled = !this.pnl2Disabled;
  }

}
