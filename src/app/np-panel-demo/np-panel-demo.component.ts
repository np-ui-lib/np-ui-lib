import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-np-panel-demo",
  templateUrl: "./np-panel-demo.component.html",
})
export class NpPanelDemoComponent implements OnInit {
  constructor() {}

  importText = "import { NpPanelModule } from 'np-ui-lib';";
  htmlText = `<np-panel [title]="title" [allowToMinimize]="true" [allowToZoom]="true" [allowToClose]="true" 
  [styleClass]="'np-pn-danger'" [height]="200">
  Panel Body content...
</np-panel>`;
  lazyLoadText = `<np-panel [title]="'Details'">
  <ng-template npPanelContent>
  ...lazy load content
  </ng-tempalte>
</panel>`;

  title = "What is paragraph?";
  pnl2Disabled = false;

  ngOnInit(): void {}

  togglePanel2Disabled() {
    this.pnl2Disabled = !this.pnl2Disabled;
  }
}
