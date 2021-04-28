import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-np-timeline-demo",
  templateUrl: "./np-timeline-demo.component.html",
})
export class NpTimelineDemoComponent implements OnInit {
  importText = "import { NpTimelineModule } from 'np-ui-lib';";
  htmlText = `<np-timeline [items]="items" [itemTemplate]="timelineTemp"></np-timeline>
<ng-template #timelineTemp let-item="item">
  <h3>{{item.year}}</h3>
  <p [innerText]="item.desc"></p>
</ng-template>`;

  items = [
    {
      year: 2015,
      desc:
        "A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument.",
    },
    {
      year: 2016,
      desc:
        "A paragraph is a series of related sentences developing a central idea, called the topic.",
    },
    {
      year: 2017,
      desc:
        "A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea.",
    },
  ];

  orderItems = [
    "Order placed",
    "Order confirmed",
    "Order shipped",
    "Order delivered",
  ];

  constructor() {}

  ngOnInit(): void {}
}
