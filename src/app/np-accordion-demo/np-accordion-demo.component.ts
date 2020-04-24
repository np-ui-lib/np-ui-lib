import { Component, OnInit, ViewChild } from '@angular/core';
import { NpAccordionComponent } from 'np-ui-lib';

@Component({
  selector: 'app-np-accordion-demo',
  templateUrl: './np-accordion-demo.component.html',
  styleUrls: ['./np-accordion-demo.component.css']
})
export class NpAccordionDemoComponent implements OnInit {

  @ViewChild("accordionDemo", { static: true }) accordionDemo: NpAccordionComponent;
  _singleOpenAtOnce: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openPara2ById() {
    this.accordionDemo.expandById("pnl2");
  }

  openPara3ByIndex() {
    this.accordionDemo.expandByIndex(2);
  }
}
