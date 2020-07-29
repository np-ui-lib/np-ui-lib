import { Component, OnInit } from '@angular/core';
import { NpBreadcrumbItem } from 'np-ui-lib';

@Component({
  selector: 'app-np-breadcrumb-demo',
  templateUrl: './np-breadcrumb-demo.component.html',
  styleUrls: ['./np-breadcrumb-demo.component.css']
})
export class NpBreadcrumbDemoComponent implements OnInit {

  importText = `import { NpBreadcrumbModule } from \'np-ui-lib\';`;
  htmlText = `<np-breadcrumb [items]="items"></np-breadcrumb>`;
  modelText = `items = [
  new NpBreadcrumbItem({ label: 'Galaxy', data: { id : 1} }),
  new NpBreadcrumbItem({ label: 'Earth', data: { id : 2} }),
  ...
];`;

  constructor() { }

  items: NpBreadcrumbItem[] = [
    new NpBreadcrumbItem({ label: 'Galaxy' }),
    new NpBreadcrumbItem({ label: 'Earth' }),
    new NpBreadcrumbItem({ label: 'Asia' }),
    new NpBreadcrumbItem({ label: 'India' }),
    new NpBreadcrumbItem({ label: 'Gujarat' }),
    new NpBreadcrumbItem({ label: 'Ahmedabad' })
  ];

  ngOnInit(): void {
  }

  onClick(item) {
    alert(item.label);
  }

}
