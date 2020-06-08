import { Component, OnInit, ViewChild } from '@angular/core';
import { NpTreeViewComponent, NpTreeViewItem } from 'np-ui-lib';

@Component({
  selector: 'app-np-tree-view-demo',
  templateUrl: './np-tree-view-demo.component.html',
  styleUrls: ['./np-tree-view-demo.component.css']
})
export class NpTreeViewDemoComponent implements OnInit {

  @ViewChild("treeview", { static: true }) treeview: NpTreeViewComponent;
  @ViewChild("treeview2", { static: true }) treeview2: NpTreeViewComponent;

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
    new NpTreeViewItem({ label: "Item 3", items: [] }),
    new NpTreeViewItem({ label: "Item 4" }),
    new NpTreeViewItem({ label: "Item 5" }),
  ];

  items2: NpTreeViewItem[] = [
    new NpTreeViewItem({
      label: "Item 1",
      items: [
        new NpTreeViewItem({
          label: "Item 1.1", items: [
            new NpTreeViewItem({ label: "Item 1.1.1", isSelected: true }),
            new NpTreeViewItem({ label: "Item 1.1.2", isSelected: true }),
            new NpTreeViewItem({ label: "Item 1.1.3", isSelected: true }),
            new NpTreeViewItem({ label: "Item 1.1.4", isSelected: true }),
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
    new NpTreeViewItem({ label: "Item 3", items: [] }),
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

  getAllSelected() {
    var selected = this.treeview2.getSelectedItems();
    alert(JSON.stringify(selected));
  }

  setAllSelected() {
    this.treeview2.setAllSelected();
  }

  removeAllSelected() {
    this.treeview2.removeAllSelected();
  }

  onSelect(event) {
    alert(event.label + " is selected.");
  }

  onDeselect(event) {
    alert(event.label + " is deselected.");
  }

  onExpand(event) {
    console.log(event.label + " is expanded.");
  }

  onCollapse(event) {
    console.log(event.label + " is collapsed.");
  }

  onExpandAll(event) {
    console.log("All are expanded.");
  }

  onCollapseAll(event) {
    console.log("All are collapsed.");
  }

}
