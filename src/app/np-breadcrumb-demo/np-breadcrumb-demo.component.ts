import { Component, OnInit } from '@angular/core';
import { NpBreadCrumbItem } from 'np-ui-lib';

@Component({
  selector: 'app-np-breadcrumb-demo',
  templateUrl: './np-breadcrumb-demo.component.html',
  styleUrls: ['./np-breadcrumb-demo.component.css']
})
export class NpBreadcrumbDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items: NpBreadCrumbItem[] = [
    new NpBreadCrumbItem({ label: "Galaxy" }),
    new NpBreadCrumbItem({ label: "Earth" }),
    new NpBreadCrumbItem({ label: "Asia" }),
    new NpBreadCrumbItem({ label: "India" }),
    new NpBreadCrumbItem({ label: "Gujarat" }),
    new NpBreadCrumbItem({ label: "Ahmedabad" })
  ];

  onClick(item) {
    alert(item.label);
  }

}
