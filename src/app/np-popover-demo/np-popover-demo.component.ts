import { Component, OnInit, ViewChild } from '@angular/core';
import { NpPopoverDirective } from 'np-ui-lib';

@Component({
  selector: 'app-np-popover-demo',
  templateUrl: './np-popover-demo.component.html',
  styleUrls: ['./np-popover-demo.component.css']
})
export class NpPopoverDemoComponent implements OnInit {

  importText = 'import { NpPopoverModule } from \'np-ui-lib\';';
  htmlText = `<a np-popover [header]="'Link header'" [body]="'Link Description.'">Link</a>`;

  @ViewChild('myPopoverD') myPopoverD: NpPopoverDirective;
  @ViewChild('myPopoverE') myPopoverE: NpPopoverDirective;
  @ViewChild('myPopoverF') myPopoverF: NpPopoverDirective;

  constructor() { }

  ngOnInit(): void {
  }

  openStep2Popover() {
    this.myPopoverD.close();
    this.myPopoverE.open();
  }

  openStep3Popover() {
    this.myPopoverE.close();
    this.myPopoverF.open();
  }

  closeStep3Popover() {
    this.myPopoverF.close();
  }

  onOpen() {
    console.log('Open popover');
  }

  onClose() {
    console.log('Close popover');
  }
}
