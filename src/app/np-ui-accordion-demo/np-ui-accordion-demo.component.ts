import { Component, OnInit, ViewChild } from '@angular/core';
import { NpUiAccordionComponent } from 'np-ui-lib';

@Component({
  selector: 'app-np-ui-accordion-demo',
  templateUrl: './np-ui-accordion-demo.component.html',
  styleUrls: ['./np-ui-accordion-demo.component.css']
})
export class NpUiAccordionDemoComponent implements OnInit {

  @ViewChild("accordionDemo", { static: true }) accordionDemo: NpUiAccordionComponent;
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
