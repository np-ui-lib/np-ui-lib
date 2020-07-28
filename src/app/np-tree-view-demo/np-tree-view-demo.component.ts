import { Component, OnInit, ViewChild } from '@angular/core';
import { NpTreeViewComponent, NpTreeViewItem } from 'np-ui-lib';

@Component({
  selector: 'app-np-tree-view-demo',
  templateUrl: './np-tree-view-demo.component.html',
  styleUrls: ['./np-tree-view-demo.component.css']
})
export class NpTreeViewDemoComponent implements OnInit {

  importText = 'import { NpTreeViewModule } from \'np-ui-lib\';';
  htmlText = `<np-tree-view [items]="items">
</np-tree-view>`;

  @ViewChild('treeview', { static: true }) treeview: NpTreeViewComponent;

  items: NpTreeViewItem[] = [
    new NpTreeViewItem({
      label: 'Item 1',
      childItems: [
        new NpTreeViewItem({
          label: 'Item 1.1', childItems: [
            new NpTreeViewItem({ label: 'Item 1.1.1' }),
            new NpTreeViewItem({ label: 'Item 1.1.2' }),
            new NpTreeViewItem({ label: 'Item 1.1.3' }),
            new NpTreeViewItem({ label: 'Item 1.1.4' }),
          ]
        }),
        new NpTreeViewItem({ label: 'Item 1.2' }),
        new NpTreeViewItem({ label: 'Item 1.3' }),
        new NpTreeViewItem({ label: 'Item 1.4' }),
      ]
    }),
    new NpTreeViewItem({
      label: 'Item 2',
      childItems: [
        new NpTreeViewItem({
          label: 'Item 2.1', childItems: [
            new NpTreeViewItem({ label: 'Item 2.1.1' }),
            new NpTreeViewItem({ label: 'Item 2.1.2' }),
            new NpTreeViewItem({ label: 'Item 2.1.3' }),
            new NpTreeViewItem({ label: 'Item 2.1.4' }),
          ]
        }),
        new NpTreeViewItem({ label: 'Item 2.2' }),
        new NpTreeViewItem({ label: 'Item 2.3' }),
        new NpTreeViewItem({ label: 'Item 2.4' }),
      ]
    }),
    new NpTreeViewItem({ label: 'Item 3', childItems: [] }),
    new NpTreeViewItem({ label: 'Item 4' }),
    new NpTreeViewItem({ label: 'Item 5' }),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  setAllExpand() {
    this.treeview.expandAll();
  }

  setAllCollapse() {
    this.treeview.collapseAll();
  }

  onClick(item) {
    alert(item.label);
  }

  onExpand(event) {
    console.log(event.label + ' is expanded.');
  }

  onCollapse(event) {
    console.log(event.label + ' is collapsed.');
  }

  onExpandAll(event) {
    console.log('All are expanded.');
  }

  onCollapseAll(event) {
    console.log('All are collapsed.');
  }

}
