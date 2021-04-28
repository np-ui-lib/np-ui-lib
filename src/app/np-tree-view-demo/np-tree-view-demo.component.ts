import { Component, OnInit, ViewChild } from "@angular/core";
import { NpTreeViewComponent, NpTreeViewItem } from "np-ui-lib";

@Component({
  selector: "app-np-tree-view-demo",
  templateUrl: "./np-tree-view-demo.component.html",
})
export class NpTreeViewDemoComponent implements OnInit {
  importText = "import { NpTreeViewModule } from 'np-ui-lib';";
  htmlText = `<np-tree-view [items]="items">
</np-tree-view>`;
  modelText = `items: NpTreeViewItem[] = [
  new NpTreeViewItem({
    label: 'Item 1',
    id: 'Item 1',
    childItems: [
      new NpTreeViewItem({
        label: 'Item 1.1', id: 'Item 1.1', childItems: [
          new NpTreeViewItem({ label: 'Item 1.1.1', id: 'Item 1.1.1' }),
          new NpTreeViewItem({ label: 'Item 1.1.2', id: 'Item 1.1.2' }),
          new NpTreeViewItem({ label: 'Item 1.1.3', id: 'Item 1.1.3' }),
          new NpTreeViewItem({ label: 'Item 1.1.4', id: 'Item 1.1.4' }),
        ]
      })
    ]
  }),
  ...
];`;
  itemTemplateText = `<ng-template #itemTemplate let-item="item">
  {{item.label}}, {{item.key}}
</ng-template>`;

  @ViewChild("treeview", { static: true }) treeview: NpTreeViewComponent;
  @ViewChild("treeview2", { static: true }) treeview2: NpTreeViewComponent;
  @ViewChild("treeview3", { static: true }) treeview3: NpTreeViewComponent;

  items: NpTreeViewItem[] = [
    new NpTreeViewItem({
      label: "Item 1",
      iconCss: "fa fa-folder",
      childItems: [
        new NpTreeViewItem({
          label: "Item 1.1",
          iconCss: "fa fa-folder",
          childItems: [
            new NpTreeViewItem({ label: "Item 1.1.1", iconCss: "fa fa-file" }),
            new NpTreeViewItem({ label: "Item 1.1.2", iconCss: "fa fa-file" }),
            new NpTreeViewItem({ label: "Item 1.1.3", iconCss: "fa fa-file" }),
            new NpTreeViewItem({ label: "Item 1.1.4", iconCss: "fa fa-file" }),
          ],
        }),
        new NpTreeViewItem({ label: "Item 1.2", iconCss: "fa fa-file" }),
        new NpTreeViewItem({ label: "Item 1.3", iconCss: "fa fa-file" }),
        new NpTreeViewItem({ label: "Item 1.4", iconCss: "fa fa-file" }),
      ],
    }),
    new NpTreeViewItem({
      label: "Item 2",
      iconCss: "fa fa-folder",
      childItems: [
        new NpTreeViewItem({
          label: "Item 2.1",
          iconCss: "fa fa-folder",
          childItems: [
            new NpTreeViewItem({ label: "Item 2.1.1", iconCss: "fa fa-file" }),
            new NpTreeViewItem({ label: "Item 2.1.2", iconCss: "fa fa-file" }),
            new NpTreeViewItem({ label: "Item 2.1.3", iconCss: "fa fa-file" }),
            new NpTreeViewItem({ label: "Item 2.1.4", iconCss: "fa fa-file" }),
          ],
        }),
        new NpTreeViewItem({ label: "Item 2.2", iconCss: "fa fa-file" }),
        new NpTreeViewItem({ label: "Item 2.3", iconCss: "fa fa-file" }),
        new NpTreeViewItem({ label: "Item 2.4", iconCss: "fa fa-file" }),
      ],
    }),
    new NpTreeViewItem({
      label: "Item 3",
      iconCss: "fa fa-folder",
      childItems: [],
    }),
    new NpTreeViewItem({ label: "Item 4", iconCss: "fa fa-file" }),
    new NpTreeViewItem({ label: "Item 5", iconCss: "fa fa-file" }),
  ];

  items2: NpTreeViewItem[] = [
    new NpTreeViewItem({
      label: "Item 1",
      id: "Item 1",
      data: { index: "1" },
      childItems: [
        new NpTreeViewItem({
          label: "Item 1.1",
          id: "Item 1.1",
          data: { index: "1.1" },
          childItems: [
            new NpTreeViewItem({
              label: "Item 1.1.1",
              id: "Item 1.1.1",
              data: { index: "1.1.1" },
            }),
            new NpTreeViewItem({
              label: "Item 1.1.2",
              id: "Item 1.1.2",
              data: { index: "1.1.2" },
            }),
            new NpTreeViewItem({
              label: "Item 1.1.3",
              id: "Item 1.1.3",
              data: { index: "1.1.3" },
            }),
            new NpTreeViewItem({
              label: "Item 1.1.4",
              id: "Item 1.1.4",
              data: { index: "1.1.4" },
            }),
          ],
        }),
        new NpTreeViewItem({
          label: "Item 1.2",
          id: "Item 1.2",
          data: { index: "1.2" },
        }),
        new NpTreeViewItem({
          label: "Item 1.3",
          id: "Item 1.3",
          data: { index: "1.3" },
        }),
        new NpTreeViewItem({
          label: "Item 1.4",
          id: "Item 1.4",
          data: { index: "1.4" },
        }),
      ],
    }),
    new NpTreeViewItem({
      label: "Item 2",
      id: "Item 2",
      data: { index: "2" },
      childItems: [
        new NpTreeViewItem({
          label: "Item 2.1",
          id: "Item 2.1",
          data: { index: "2.1" },
          childItems: [
            new NpTreeViewItem({
              label: "Item 2.1.1",
              id: "Item 2.1.1",
              data: { index: "2.2.1" },
            }),
            new NpTreeViewItem({
              label: "Item 2.1.2",
              id: "Item 2.1.2",
              data: { index: "2.2.2" },
            }),
            new NpTreeViewItem({
              label: "Item 2.1.3",
              id: "Item 2.1.3",
              data: { index: "2.2.3" },
            }),
            new NpTreeViewItem({
              label: "Item 2.1.4",
              id: "Item 2.1.4",
              data: { index: "2.2.4" },
            }),
          ],
        }),
        new NpTreeViewItem({
          label: "Item 2.2",
          id: "Item 2.2",
          data: { index: "2.2" },
        }),
        new NpTreeViewItem({
          label: "Item 2.3",
          id: "Item 2.3",
          data: { index: "2.3" },
        }),
        new NpTreeViewItem({
          label: "Item 2.4",
          id: "Item 2.4",
          data: { index: "2.4" },
        }),
      ],
    }),
    new NpTreeViewItem({
      label: "Item 3",
      id: "Item 3",
      data: { index: "3" },
      childItems: [],
    }),
    new NpTreeViewItem({ label: "Item 4", id: "Item 4", data: { index: "4" } }),
    new NpTreeViewItem({ label: "Item 5", id: "Item 5", data: { index: "5" } }),
  ];
  selection2: [];

  items3: NpTreeViewItem[] = [
    new NpTreeViewItem({
      label: "Item 1",
      id: "Item 1",
      data: { index: "1" },
      childItems: [
        new NpTreeViewItem({
          label: "Item 1.1",
          id: "Item 1.1",
          data: { index: "1.1" },
          childItems: [
            new NpTreeViewItem({
              label: "Item 1.1.1",
              id: "Item 1.1.1",
              data: { index: "1.1.1" },
            }),
            new NpTreeViewItem({
              label: "Item 1.1.2",
              id: "Item 1.1.2",
              data: { index: "1.1.2" },
            }),
            new NpTreeViewItem({
              label: "Item 1.1.3",
              id: "Item 1.1.3",
              data: { index: "1.1.3" },
            }),
            new NpTreeViewItem({
              label: "Item 1.1.4",
              id: "Item 1.1.4",
              data: { index: "1.1.4" },
            }),
          ],
        }),
        new NpTreeViewItem({
          label: "Item 1.2",
          id: "Item 1.2",
          data: { index: "1.2" },
        }),
        new NpTreeViewItem({
          label: "Item 1.3",
          id: "Item 1.3",
          data: { index: "1.3" },
        }),
        new NpTreeViewItem({
          label: "Item 1.4",
          id: "Item 1.4",
          data: { index: "1.4" },
        }),
      ],
    }),
    new NpTreeViewItem({
      label: "Item 2",
      id: "Item 2",
      data: { index: "2" },
      childItems: [
        new NpTreeViewItem({
          label: "Item 2.1",
          id: "Item 2.1",
          data: { index: "2.1" },
          childItems: [
            new NpTreeViewItem({
              label: "Item 2.1.1",
              id: "Item 2.1.1",
              data: { index: "2.2.1" },
            }),
            new NpTreeViewItem({
              label: "Item 2.1.2",
              id: "Item 2.1.2",
              data: { index: "2.2.2" },
            }),
            new NpTreeViewItem({
              label: "Item 2.1.3",
              id: "Item 2.1.3",
              data: { index: "2.2.3" },
            }),
            new NpTreeViewItem({
              label: "Item 2.1.4",
              id: "Item 2.1.4",
              data: { index: "2.2.4" },
            }),
          ],
        }),
        new NpTreeViewItem({
          label: "Item 2.2",
          id: "Item 2.2",
          data: { index: "2.2" },
        }),
        new NpTreeViewItem({
          label: "Item 2.3",
          id: "Item 2.3",
          data: { index: "2.3" },
        }),
        new NpTreeViewItem({
          label: "Item 2.4",
          id: "Item 2.4",
          data: { index: "2.4" },
        }),
      ],
    }),
    new NpTreeViewItem({
      label: "Item 3",
      id: "Item 3",
      data: { index: "3" },
      childItems: [],
    }),
    new NpTreeViewItem({ label: "Item 4", id: "Item 4", data: { index: "4" } }),
    new NpTreeViewItem({ label: "Item 5", id: "Item 5", data: { index: "5" } }),
  ];
  selection3 = [
    { label: "Item 4", id: "Item 4", data: { index: "4" } },
    { label: "Item 1.1.1", id: "Item 1.1.1", data: { index: "1.1.1" } },
  ];

  constructor() {}

  ngOnInit(): void {}

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

  onSelect(event) {
    console.log("Node selected.");
  }

  onDeselect(event) {
    console.log("Node deselected.");
  }

  selectAll() {
    this.treeview3.selectAll();
  }

  deselectAll() {
    this.treeview3.deselectAll();
  }
}
