import { Component, OnInit, ViewChild } from '@angular/core';
import { NpUiPopoverDirective } from 'projects/np-ui-lib/src/public-api';

@Component({
  selector: 'app-np-ui-popover-demo',
  templateUrl: './np-ui-popover-demo.component.html',
  styleUrls: ['./np-ui-popover-demo.component.css']
})
export class NpUiPopoverDemoComponent implements OnInit {

  @ViewChild("myPopoverD") myPopoverD: NpUiPopoverDirective;
  @ViewChild("myPopoverE") myPopoverE: NpUiPopoverDirective;
  @ViewChild("myPopoverF") myPopoverF: NpUiPopoverDirective;

  showNext: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  showE() {
    this.myPopoverD.close();
    this.myPopoverE.show();
    setTimeout(() => {
      this.showNext = true;
    }, 2000);
  }

  showF() {
    this.myPopoverE.close();
    this.myPopoverF.show();
  }

  closeF() {
    this.myPopoverF.close();
  }

}
