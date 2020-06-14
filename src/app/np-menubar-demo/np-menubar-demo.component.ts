import { Component, OnInit } from '@angular/core';
import { NpMenuItem } from 'np-ui-lib';

@Component({
  selector: 'app-np-menubar-demo',
  templateUrl: './np-menubar-demo.component.html',
  styleUrls: ['./np-menubar-demo.component.css']
})
export class NpMenubarDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items: NpMenuItem[] = [
    new NpMenuItem({
      label: "Menu 1", url: "/menu1", iconCss: "fa fa-home",
      items: [
        new NpMenuItem({
          label: "Menu 1.1", iconCss: "fa fa-phone",
          items: [
            new NpMenuItem({ label: "Menu 1.1.1", url: "/menu1.1.1" }),
            new NpMenuItem({ label: "Menu 1.1.2", url: "/menu1.1.2" }),
            new NpMenuItem({ label: "Menu 1.1.3", url: "/menu1.1.3" }),
          ]
        }),
        new NpMenuItem({ label: "Menu 1.2", url: "/menu1.2" }),
        new NpMenuItem({ label: "Menu 1.3", url: "/menu1.3" }),
      ]
    }),
    new NpMenuItem({ label: "Menubar router link", routerLink: "/np-menubar-demo" }),
    new NpMenuItem({ label: "Menu 3 click" }),
    new NpMenuItem({
      label: "Menu 4",
      items: [
        new NpMenuItem({
          label: "Menu 4.1",
          items: [
            new NpMenuItem({ label: "Menu 4.1.1 Click" }),
            new NpMenuItem({ label: "Menu 4.1.2 New Tab", url: "/menu4.1.2", target: "_blank" }),
            new NpMenuItem({ label: "Menu 4.1.3", url: "/menu4.1.3" }),
          ]
        }),
        new NpMenuItem({
          label: "Menu 4.2", items: [
            new NpMenuItem({ label: "Menu 4.2.1", url: "/menu4.2.1" }),
            new NpMenuItem({ label: "Menu 4.2.2", url: "/menu4.2.2" }),
            new NpMenuItem({ label: "Menu 4.2.3", url: "/menu4.2.3" }),
          ]
        }),
        new NpMenuItem({ label: "Menu 4.3", url: "/menu4.3" }),
      ]
    }),
    new NpMenuItem({ label: "Data grid", routerLink: "/np-data-grid-demo/client-grid" }),
    new NpMenuItem({ label: "Menu 6", url: "/menu6" })
  ];

  itemsHorizontal: NpMenuItem[] = [
    new NpMenuItem({
      label: "Menu 1", url: "/menu1", iconCss: "fa fa-home",
      items: [
        new NpMenuItem({
          label: "Menu 1.1", iconCss: "fa fa-phone",
          items: [
            new NpMenuItem({ label: "Menu 1.1.1", url: "/menu1.1.1" }),
            new NpMenuItem({ label: "Menu 1.1.2", url: "/menu1.1.2" }),
            new NpMenuItem({ label: "Menu 1.1.3", url: "/menu1.1.3" }),
          ]
        }),
        new NpMenuItem({ label: "Menu 1.2", url: "/menu1.2" }),
        new NpMenuItem({ label: "Menu 1.3", url: "/menu1.3" }),
      ]
    }),
    new NpMenuItem({ label: "Menubar router link", routerLink: "/np-menubar-demo" }),
    new NpMenuItem({ label: "Menu 3 click" }),
    new NpMenuItem({
      label: "Menu 4",
      items: [
        new NpMenuItem({
          label: "Menu 4.1",
          items: [
            new NpMenuItem({ label: "Menu 4.1.1 Click" }),
            new NpMenuItem({ label: "Menu 4.1.2 New Tab", url: "/menu4.1.2", target: "_blank" }),
            new NpMenuItem({ label: "Menu 4.1.3", url: "/menu4.1.3" }),
          ]
        }),
        new NpMenuItem({
          label: "Menu 4.2", items: [
            new NpMenuItem({ label: "Menu 4.2.1", url: "/menu4.2.1" }),
            new NpMenuItem({ label: "Menu 4.2.2", url: "/menu4.2.2" }),
            new NpMenuItem({ label: "Menu 4.2.3", url: "/menu4.2.3" }),
          ]
        }),
        new NpMenuItem({ label: "Menu 4.3", url: "/menu4.3" }),
      ]
    }),
    new NpMenuItem({ label: "Data grid", routerLink: "/np-data-grid-demo/client-grid" }),
    new NpMenuItem({ label: "Menu 6", url: "/menu6" })
  ];

  itemsPopupMenubar: NpMenuItem[] = [
    new NpMenuItem({
      label: "Menu 1", url: "/menu1", iconCss: "fa fa-home",
      items: [
        new NpMenuItem({
          label: "Menu 1.1", iconCss: "fa fa-phone",
          items: [
            new NpMenuItem({ label: "Menu 1.1.1", url: "/menu1.1.1" }),
            new NpMenuItem({ label: "Menu 1.1.2", url: "/menu1.1.2" }),
            new NpMenuItem({ label: "Menu 1.1.3", url: "/menu1.1.3" }),
          ]
        }),
        new NpMenuItem({ label: "Menu 1.2", url: "/menu1.2" }),
        new NpMenuItem({ label: "Menu 1.3", url: "/menu1.3" }),
      ]
    }),
    new NpMenuItem({ label: "Menubar router link", routerLink: "/np-menubar-demo" }),
    new NpMenuItem({ label: "Menu 3 click" }),
    new NpMenuItem({
      label: "Menu 4",
      items: [
        new NpMenuItem({
          label: "Menu 4.1",
          items: [
            new NpMenuItem({ label: "Menu 4.1.1 Click" }),
            new NpMenuItem({ label: "Menu 4.1.2 New Tab", url: "/menu4.1.2", target: "_blank" }),
            new NpMenuItem({ label: "Menu 4.1.3", url: "/menu4.1.3" }),
          ]
        }),
        new NpMenuItem({
          label: "Menu 4.2", items: [
            new NpMenuItem({ label: "Menu 4.2.1", url: "/menu4.2.1" }),
            new NpMenuItem({ label: "Menu 4.2.2", url: "/menu4.2.2" }),
            new NpMenuItem({ label: "Menu 4.2.3", url: "/menu4.2.3" }),
          ]
        }),
        new NpMenuItem({ label: "Menu 4.3", url: "/menu4.3" }),
      ]
    }),
    new NpMenuItem({ label: "Data grid", routerLink: "/np-data-grid-demo/client-grid" }),
    new NpMenuItem({ label: "Menu 6", url: "/menu6" })
  ];

  onClickMenuItem(item) {
    if (item.label == "Menu 4.1.1 Click" || item.label == "Menu 3 click") {
      alert("Menu is clicked");
    }
  }

  itemsPanelMenu: NpMenuItem[] = [
    new NpMenuItem({
      label: "Menu 1", url: "/menu1", iconCss: "fa fa-home",
      items: [
        new NpMenuItem({
          label: "Menu 1.1", iconCss: "fa fa-phone",
          items: [
            new NpMenuItem({ label: "Menu 1.1.1", url: "/menu1.1.1" }),
            new NpMenuItem({ label: "Menu 1.1.2", url: "/menu1.1.2" }),
            new NpMenuItem({ label: "Menu 1.1.3", url: "/menu1.1.3" }),
          ]
        }),
        new NpMenuItem({ label: "Menu 1.2", url: "/menu1.2" }),
        new NpMenuItem({ label: "Menu 1.3", url: "/menu1.3" }),
      ]
    }),
    new NpMenuItem({ label: "Menubar router link", routerLink: "/np-menubar-demo" }),
    new NpMenuItem({ label: "Menu 3 click" }),
    new NpMenuItem({
      label: "Menu 4",
      items: [
        new NpMenuItem({
          label: "Menu 4.1",
          items: [
            new NpMenuItem({ label: "Menu 4.1.1 Click" }),
            new NpMenuItem({ label: "Menu 4.1.2 New Tab", url: "/menu4.1.2", target: "_blank" }),
            new NpMenuItem({ label: "Menu 4.1.3", url: "/menu4.1.3" }),
          ]
        }),
        new NpMenuItem({
          label: "Menu 4.2", items: [
            new NpMenuItem({ label: "Menu 4.2.1", url: "/menu4.2.1" }),
            new NpMenuItem({ label: "Menu 4.2.2", url: "/menu4.2.2" }),
            new NpMenuItem({ label: "Menu 4.2.3", url: "/menu4.2.3" }),
          ]
        }),
        new NpMenuItem({ label: "Menu 4.3", url: "/menu4.3" }),
      ]
    }),
    new NpMenuItem({ label: "Data grid", routerLink: "/np-data-grid-demo/client-grid" }),
    new NpMenuItem({ label: "Menu 6", url: "/menu6" })
  ];

}
