import { Component, OnInit } from "@angular/core";
import { NpBreadcrumbItem } from "np-ui-lib";

@Component({
  selector: "app-np-breadcrumb-demo",
  templateUrl: "./np-breadcrumb-demo.component.html",
})
export class NpBreadcrumbDemoComponent implements OnInit {
  importText = `import { NpBreadcrumbModule } from \'np-ui-lib\';`;
  htmlText = `<np-breadcrumb [items]="items"></np-breadcrumb>`;
  modelText = `items = [
  new NpBreadcrumbItem({ label: 'Galaxy', data: { id : 1} }),
  new NpBreadcrumbItem({ label: 'Earth', data: { id : 2} }),
  ...
];`;

  constructor() {}

  items: NpBreadcrumbItem[] = [
    new NpBreadcrumbItem({ label: "Galaxy", id: "lnkGalaxy" }),
    new NpBreadcrumbItem({ label: "Earth", disabled: true }),
    new NpBreadcrumbItem({ label: "Asia" }),
    new NpBreadcrumbItem({ label: "India" }),
    new NpBreadcrumbItem({ label: "Gujarat" }),
    new NpBreadcrumbItem({ label: "Ahmedabad" }),
  ];

  ngOnInit(): void {}

  onClick(item) {
    alert(item.label);
  }
}
