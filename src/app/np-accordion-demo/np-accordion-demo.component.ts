import { Component, OnInit, ViewChild } from '@angular/core';
import { NpAccordionComponent } from 'np-ui-lib';

@Component({
  selector: 'app-np-accordion-demo',
  templateUrl: './np-accordion-demo.component.html',
  styleUrls: ['./np-accordion-demo.component.css']
})
export class NpAccordionDemoComponent implements OnInit {

  importText = 'import { NpAccordionModule } from \'np-ui-lib\';';
  htmlText = `<np-accordion>
  <np-panel [title]="'Details'" [isOpen]="true">
      Panel 1 Content
  </np-panel>
  <np-panel [title]="'Specifications'">
    Panel 2 Content
  </np-panel>
  ...
</np-accordion>`;

  @ViewChild('accordionDemo', { static: true }) accordionDemo: NpAccordionComponent;
  allowMultipleOpen = false;

  pnl2Disabled = false;

  constructor() { }

  ngOnInit(): void {
  }

  openPara2ById() {
    this.accordionDemo.expandById('pnl2');
  }

  openPara3ByIndex() {
    this.accordionDemo.expandByIndex(2);
  }

  onOpenPanel3($event) {
    alert('Panel 3 open');
  }

  togglePanel2() {
    this.pnl2Disabled = !this.pnl2Disabled;
  }
}
