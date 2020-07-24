import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-np-mask-demo',
  templateUrl: './np-mask-demo.component.html',
  styleUrls: ['./np-mask-demo.component.css']
})
export class NpMaskDemoComponent implements OnInit {

  importText = 'import { NpUtilityModule } from \'np-ui-lib\';';
  htmlText = `<input type="text" [(ngModel)]="value" [np-mask]="'000-aaa-AAA-BBB'">`;

  creditCards: any[] = [
    {
      card: 'amex',
      placeholder: '000 000000 00000',
      mask: '000 000000 00000'
    },
    {
      card: 'visa',
      placeholder: '0000 0000 0000 0000',
      mask: '0000 0000 0000 0000'
    }
  ];

  selectedCard: any = this.creditCards[0];
  maskedValue1: string;
  maskedValue2: string;
  maskedValue3: string;

  constructor() { }

  ngOnInit(): void {
  }

}
