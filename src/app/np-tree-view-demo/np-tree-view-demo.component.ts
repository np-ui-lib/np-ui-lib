import { Component, OnInit, ViewChild } from '@angular/core';
import { NpTreeViewItem } from 'projects/np-ui-lib/src/public-api';
import { NpTreeViewComponent } from 'np-ui-lib';

@Component({
  selector: 'app-np-tree-view-demo',
  templateUrl: './np-tree-view-demo.component.html',
  styleUrls: ['./np-tree-view-demo.component.css']
})
export class NpTreeViewDemoComponent implements OnInit {

  @ViewChild("treeview", { static: true }) treeview: NpTreeViewComponent;

  constructor() { }

  ngOnInit(): void {
  }

  items: NpTreeViewItem[] = [
    new NpTreeViewItem({
      label: "Item 1",
      items: [
        new NpTreeViewItem({
          label: "Item 1.1", items: [
            new NpTreeViewItem({ label: "Item 1.1.1" }),
            new NpTreeViewItem({ label: "Item 1.1.2" }),
            new NpTreeViewItem({ label: "Item 1.1.3" }),
            new NpTreeViewItem({ label: "Item 1.1.4" }),
          ]
        }),
        new NpTreeViewItem({ label: "Item 1.2" }),
        new NpTreeViewItem({ label: "Item 1.3" }),
        new NpTreeViewItem({ label: "Item 1.4" }),
      ]
    }),
    new NpTreeViewItem({
      label: "Item 2",
      items: [
        new NpTreeViewItem({
          label: "Item 2.1", items: [
            new NpTreeViewItem({ label: "Item 2.1.1" }),
            new NpTreeViewItem({ label: "Item 2.1.2" }),
            new NpTreeViewItem({ label: "Item 2.1.3" }),
            new NpTreeViewItem({ label: "Item 2.1.4" }),
          ]
        }),
        new NpTreeViewItem({ label: "Item 2.2" }),
        new NpTreeViewItem({ label: "Item 2.3" }),
        new NpTreeViewItem({ label: "Item 2.4" }),
      ]
    }),
    new NpTreeViewItem({ label: "Item 3" }),
    new NpTreeViewItem({ label: "Item 4" }),
    new NpTreeViewItem({ label: "Item 5" }),
  ];

  setAllExpand() {
    this.treeview.expandAll();
  }

  setAllCollapse() {
    this.treeview.collaseAll();
  }

  onClick(item) {
    alert(item.label);
  }

}
