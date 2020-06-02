import { Component, OnInit, ViewChild } from '@angular/core';
import { NpAccordionComponent } from 'np-ui-lib';

@Component({
  selector: 'app-np-accordion-demo',
  templateUrl: './np-accordion-demo.component.html',
  styleUrls: ['./np-accordion-demo.component.css']
})
export class NpAccordionDemoComponent implements OnInit {

  @ViewChild("accordionDemo", { static: true }) accordionDemo: NpAccordionComponent;
  _allowMultipleOpen: boolean = false;

  pnl2Disabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openPara2ById() {
    this.accordionDemo.expandById("pnl2");
  }

  openPara3ByIndex() {
    this.accordionDemo.expandByIndex(2);
  }

  onOpenPanel3($event) {
    alert("Panel 3 open");
  }

  togglePanel2() {
    this.pnl2Disabled = !this.pnl2Disabled;
  }
}
