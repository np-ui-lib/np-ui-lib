import { Component, OnInit, ViewChild } from '@angular/core';
import { NpUiAccordionComponent } from 'projects/np-ui-lib/src/public-api';

@Component({
  selector: 'app-np-ui-accordion-demo',
  templateUrl: './np-ui-accordion-demo.component.html',
  styleUrls: ['./np-ui-accordion-demo.component.css']
})
export class NpUiAccordionDemoComponent implements OnInit {

  @ViewChild("accordionDemo", { static: true }) accordionDemo: NpUiAccordionComponent;

  constructor() { }

  ngOnInit(): void {
  }

  openPara3() {
    this.accordionDemo.openByIndex(2);
  }
}
