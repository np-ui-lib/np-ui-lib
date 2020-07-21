import { Component, OnInit, ViewChild } from '@angular/core';
import { NpPopoverDirective } from 'np-ui-lib';

@Component({
  selector: 'app-np-popover-demo',
  templateUrl: './np-popover-demo.component.html',
  styleUrls: ['./np-popover-demo.component.css']
})
export class NpPopoverDemoComponent implements OnInit {

  importText = "import { NpPopoverModule } from 'np-ui-lib';"
  htmlText = `<a np-popover [header]="'Link header'" [body]="'Link Description.'">Link</a>`;

  @ViewChild("myPopoverD") myPopoverD: NpPopoverDirective;
  @ViewChild("myPopoverE") myPopoverE: NpPopoverDirective;
  @ViewChild("myPopoverF") myPopoverF: NpPopoverDirective;

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
