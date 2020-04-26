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

  homeIcon: string = '<svg class="np-icon"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/><path d="M0 0h24v24H0z" fill="none"/></svg>';

  items: NpMenuItem[] = [
    new NpMenuItem({
      label: "Menu 1", icon: this.homeIcon, url: "/menu1",
      items: [
        new NpMenuItem({
          label: "Menu 1.1", icon: "icon1.1",
          items: [
            new NpMenuItem({ label: "Menu 1.1.1", icon: "icon1.1.1", url: "/menu1.1.1" }),
            new NpMenuItem({ label: "Menu 1.1.2", icon: "icon1.1.2", url: "/menu1.1.2" }),
            new NpMenuItem({ label: "Menu 1.1.3", icon: "icon1.1.3", url: "/menu1.1.3" }),
          ]
        }),
        new NpMenuItem({ label: "Menu 1.2", icon: "icon1.2", url: "/menu1.2" }),
        new NpMenuItem({ label: "Menu 1.3", icon: "icon1.3", url: "/menu1.3" }),
      ]
    }),
    new NpMenuItem({ label: "Menubar router link", icon: "icon2", routerLink: "/np-menubar-demo" }),
    new NpMenuItem({ label: "Menu 3 click", icon: "icon3", onClick: this.onClickMenu3 }),
    new NpMenuItem({
      label: "Menu 4", icon: "icon4",
      items: [
        new NpMenuItem({
          label: "Menu 4.1", icon: "icon4.1",
          items: [
            new NpMenuItem({ label: "Menu 4.1.1", icon: "icon4.1.1", url: "/menu4.1.1" }),
            new NpMenuItem({ label: "Menu 4.1.2", icon: "icon4.1.2", url: "/menu4.1.2" }),
            new NpMenuItem({ label: "Menu 4.1.3", icon: "icon4.1.3", url: "/menu4.1.3" }),
          ]
        }),
        new NpMenuItem({
          label: "Menu 4.2", icon: "icon4.2", items: [
            new NpMenuItem({ label: "Menu 4.2.1", icon: "icon4.2.1", url: "/menu4.2.1" }),
            new NpMenuItem({ label: "Menu 4.2.2", icon: "icon4.2.2", url: "/menu4.2.2" }),
            new NpMenuItem({ label: "Menu 4.2.3", icon: "icon4.2.3", url: "/menu4.2.3" }),
          ]
        }),
        new NpMenuItem({ label: "Menu 4.3", icon: "icon4.3", url: "/menu4.3" }),
      ]
    }),
    new NpMenuItem({ label: "Data grid", icon: "icon5", routerLink: "/np-data-grid-demo/client-grid" }),
    new NpMenuItem({ label: "Menu 6", icon: "icon6", url: "/menu6" })
  ];

  itemsHorizontal: NpMenuItem[] = [
    new NpMenuItem({
      label: "Menu 1", icon: "icon1", url: "/menu1",
      items: [
        new NpMenuItem({
          label: "Menu 1.1", icon: "icon1.1",
          items: [
            new NpMenuItem({ label: "Menu 1.1.1", icon: "icon1.1.1", url: "/menu1.1.1" }),
            new NpMenuItem({ label: "Menu 1.1.2", icon: "icon1.1.2", url: "/menu1.1.2" }),
            new NpMenuItem({ label: "Menu 1.1.3", icon: "icon1.1.3", url: "/menu1.1.3" }),
          ]
        }),
        new NpMenuItem({ label: "Menu 1.2", icon: "icon1.2", url: "/menu1.2" }),
        new NpMenuItem({ label: "Menu 1.3", icon: "icon1.3", url: "/menu1.3" }),
      ]
    }),
    new NpMenuItem({ label: "Menubar router link", icon: "icon2", routerLink: "/np-menubar-demo" }),
    new NpMenuItem({ label: "Menu 3 click", icon: "icon3", onClick: this.onClickMenu3 }),
    new NpMenuItem({
      label: "Menu 4", icon: "icon4",
      items: [
        new NpMenuItem({
          label: "Menu 4.1", icon: "icon4.1",
          items: [
            new NpMenuItem({ label: "Menu 4.1.1", icon: "icon4.1.1", url: "/menu4.1.1" }),
            new NpMenuItem({ label: "Menu 4.1.2", icon: "icon4.1.2", url: "/menu4.1.2" }),
            new NpMenuItem({ label: "Menu 4.1.3", icon: "icon4.1.3", url: "/menu4.1.3" }),
          ]
        }),
        new NpMenuItem({
          label: "Menu 4.2", icon: "icon4.2", items: [
            new NpMenuItem({ label: "Menu 4.2.1", icon: "icon4.2.1", url: "/menu4.2.1" }),
            new NpMenuItem({ label: "Menu 4.2.2", icon: "icon4.2.2", url: "/menu4.2.2" }),
            new NpMenuItem({ label: "Menu 4.2.3", icon: "icon4.2.3", url: "/menu4.2.3" }),
          ]
        }),
        new NpMenuItem({ label: "Menu 4.3", icon: "icon4.3", url: "/menu4.3" }),
      ]
    }),
    new NpMenuItem({ label: "Data grid", icon: "icon5", routerLink: "/np-data-grid-demo/client-grid" }),
    new NpMenuItem({ label: "Menu 6", icon: "icon6", url: "/menu6" })
  ];

  onClickMenu3() {
    alert("Menu 3 is clicked");
  }

}
