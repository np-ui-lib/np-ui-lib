import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-np-tooltip-demo',
  templateUrl: './np-tooltip-demo.component.html',
  styleUrls: ['./np-tooltip-demo.component.css']
})
export class NpTooltipDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  importText = "import { NpTooltipModule } from 'np-ui-lib';"
  htmlText = '<span [np-tooltip]="\'This is left tooltip.\'" [placement]="\'left\'">  Hover me for left tooltip</span>';

}
