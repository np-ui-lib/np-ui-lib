import { Component, OnInit, ViewChild } from '@angular/core';
import { NpPopoverDirective } from 'np-ui-lib';

@Component({
  selector: 'app-np-popover-demo',
  templateUrl: './np-popover-demo.component.html'
})
export class NpPopoverDemoComponent implements OnInit {

  importText = 'import { NpPopoverModule } from \'np-ui-lib\';';
  htmlText = `<a np-popover [header]="'Link header'" [body]="'Link Description.'">Link</a>`;

  @ViewChild('myPopover1') myPopover1: NpPopoverDirective;
  @ViewChild('myPopover2') myPopover2: NpPopoverDirective;
  @ViewChild('myPopover3') myPopover3: NpPopoverDirective;

  constructor() { }

  ngOnInit(): void {
  }

  openStep2Popover() {
    this.myPopover1.close();
    this.myPopover2.open();
  }

  openStep3Popover() {
    this.myPopover2.close();
    this.myPopover3.open();
  }

  closeStep3Popover() {
    this.myPopover3.close();
  }

  onOpen() {
    console.log('Open popover');
  }

  onClose() {
    console.log('Close popover');
  }
}
