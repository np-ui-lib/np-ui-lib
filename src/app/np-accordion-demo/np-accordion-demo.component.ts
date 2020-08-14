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
  <np-accordion-item [title]="'Details'" [isOpen]="true">
      Panel 1 Content
  </np-accordion-item>
  <np-accordion-item [title]="'Specifications'">
    Panel 2 Content
  </np-accordion-item>
  ...
</np-accordion>`;

  @ViewChild('accordionDemo', { static: true }) accordionDemo: NpAccordionComponent;
  allowMultipleOpen = false;

  item2Disabled = false;

  constructor() { }

  ngOnInit(): void {
  }

  openItem2() {
    this.accordionDemo.expandById('item2');
  }

  openItem3() {
    this.accordionDemo.expandByIndex(2);
  }

  toggleItem2Disabled() {
    this.item2Disabled = !this.item2Disabled;
  }

  onExpand(item) {
    console.log(`Expand item ${item.inputId}`);
  }

  onCollapse(item) {
    console.log(`Collpase item ${item.inputId}`);
  }
}
