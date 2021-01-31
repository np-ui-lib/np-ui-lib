import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-np-timeline-demo',
  templateUrl: './np-timeline-demo.component.html'
})
export class NpTimelineDemoComponent implements OnInit {
  importText = 'import { NpTimelineModule } from \'np-ui-lib\';';
  htmlText = `<np-timeline [items]="items" [itemTemplate]="timelineTemp"></np-timeline>
<ng-template #timelineTemp let-item="item">
  <h3>{{item.year}}</h3>
  <p [innerText]="item.desc"></p>
</ng-template>`;

  items = [
    { year: 2015, desc: 'Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.' },
    { year: 2016, desc: 'Lorem ipsum dolor sit amet, quo ei simul congue exerci.' },
    { year: 2017, desc: 'Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto perfecto perfecti perfect!' }
  ];

  orderItems = [
    'Order placed',
    'Order confirmed',
    'Order shipped',
    'Order deliverd'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
