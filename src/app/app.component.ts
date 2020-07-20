import { Component, HostListener, OnInit } from '@angular/core';
import { NpMenuItem } from 'np-ui-lib';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'np-ui-package';
  year = new Date().getFullYear();

  dataGridItems = [
    new NpMenuItem({ url: 'https://github.com/NilavPatel/np-ui-package/wiki/Data%20Grid', label: 'np-data-grid', target: '_blank' }),
    new NpMenuItem({ routerLink: '/np-data-grid-demo/client-grid', label: 'Client Side' }),
    new NpMenuItem({ routerLink: '/np-data-grid-demo/server-grid', label: 'Server Side' }),
    new NpMenuItem({ routerLink: '/np-data-grid-demo/sorting-grid', label: 'Sorting' }),
    new NpMenuItem({ routerLink: '/np-data-grid-demo/filter-grid', label: 'Filters' }),
    new NpMenuItem({ routerLink: '/np-data-grid-demo/celltemplate-grid', label: 'Cell Templates' }),
    new NpMenuItem({ routerLink: '/np-data-grid-demo/toolbar-grid', label: 'Toolbar, Column Chooser, Export' }),
    new NpMenuItem({ routerLink: '/np-data-grid-demo/columns-grid', label: 'Column Reorder/Resize and Other' }),
    new NpMenuItem({ routerLink: '/np-data-grid-demo/row-select-grid', label: 'Row Selection' }),
    new NpMenuItem({ routerLink: '/np-data-grid-demo/master-detail-grid', label: 'Master-Detail' }),
    new NpMenuItem({ routerLink: '/np-data-grid-demo/summary-grid', label: 'Summary' }),
    new NpMenuItem({ routerLink: '/np-data-grid-demo/state-management-grid', label: 'State Management' }),
    new NpMenuItem({ routerLink: '/np-data-grid-demo/other-grid', label: 'Other' }),
    new NpMenuItem({ routerLink: '/np-data-grid-demo/odata-grid', label: 'OData Server Side' }),
    new NpMenuItem({ routerLink: '/np-data-grid-demo/inside-tab-grid', label: 'Inside tab' }),
    new NpMenuItem({ routerLink: '/np-data-grid-demo/client-grid-all', label: 'Client Side Grid Full' }),
    new NpMenuItem({ routerLink: '/np-data-grid-demo/server-grid-all', label: 'Server Side Grid Full' }),
  ];

  menuItems = [
    new NpMenuItem({ routerLink: '/how-to-add', label: 'How to add?' }),
    new NpMenuItem({ routerLink: '/np-date-picker-demo', label: 'Date Picker' }),
    new NpMenuItem({ routerLink: '/np-time-picker-demo', label: 'Time Picker' }),
    new NpMenuItem({ routerLink: '/np-color-picker-demo', label: 'Color Picker' }),
    new NpMenuItem({ routerLink: '/np-switch-demo', label: 'Switch' }),
    new NpMenuItem({ routerLink: '/np-dropdown-demo', label: 'Dropdown' }),
    new NpMenuItem({ routerLink: '/np-auto-complete-demo', label: 'Auto Complete' }),
    new NpMenuItem({ routerLink: '/np-tags-demo', label: 'Tags' }),
    new NpMenuItem({ routerLink: '/np-number-box-demo', label: 'Number box' }),
    new NpMenuItem({ routerLink: '/np-file-upload-demo', label: 'File Upload' }),
    new NpMenuItem({ routerLink: '/np-slider-demo', label: 'Slider' }),
    new NpMenuItem({ routerLink: '/np-menubar-demo', label: 'Menubar' }),
    new NpMenuItem({ routerLink: '/np-breadcrumb-demo', label: 'Breadcrumb' }),
    new NpMenuItem({ routerLink: '/np-data-grid-demo', label: 'Data Grid', items: this.dataGridItems }),
    new NpMenuItem({ routerLink: '/np-panel-demo', label: 'Panel' }),
    new NpMenuItem({ routerLink: '/np-accordion-demo', label: 'Accordion' }),
    new NpMenuItem({ routerLink: '/np-tabs-demo', label: 'Tabs' }),
    new NpMenuItem({ routerLink: '/np-card-demo', label: 'Card' }),
    new NpMenuItem({ routerLink: '/np-alert-demo', label: 'Alert' }),
    new NpMenuItem({ routerLink: '/np-notification-demo', label: 'Notifications' }),
    new NpMenuItem({ routerLink: '/np-tooltip-demo', label: 'Tooltip' }),
    new NpMenuItem({ routerLink: '/np-popover-demo', label: 'Popover' }),
    new NpMenuItem({ routerLink: '/np-loader-demo', label: 'Loader' }),
    new NpMenuItem({ routerLink: '/np-blockui-demo', label: 'BlockUi' }),
    new NpMenuItem({ routerLink: '/np-progress-demo', label: 'Progress' }),
    new NpMenuItem({ routerLink: '/np-carousel-demo', label: 'Carousel' }),
    new NpMenuItem({ routerLink: '/np-modal-demo', label: 'Modal' }),
    new NpMenuItem({ routerLink: '/np-dialog-demo', label: 'Dialog' }),
    new NpMenuItem({ routerLink: '/np-sidepanel-demo', label: 'Sidepanel' }),
    new NpMenuItem({ routerLink: '/np-tree-view-demo', label: 'Treeview' }),
    new NpMenuItem({ routerLink: '/np-list-demo', label: 'List' }),
    new NpMenuItem({ routerLink: '/np-virtual-scroll-demo', label: 'Virtual Scroll' }),
    new NpMenuItem({ routerLink: '/np-grid-layout-demo', label: 'Grid Layout' }),
    new NpMenuItem({ routerLink: '/np-utility-demo', label: 'Other Utility' })
  ];

  showMenu: boolean;
  isMobileView: boolean;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setMenubarOnResize();
  }

  constructor(private router: Router) {
    this.setMenubarOnResize();
  }

  ngOnInit(): void {
    this.router.events.subscribe((ev: any) => {
      if (ev instanceof NavigationEnd) {
        document.querySelector('.main').scrollTo(0, 0);
      }
    });
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  onClickMenuItem($event) {
    if (window.innerWidth <= 992) {
      this.showMenu = false;
    }
  }

  setMenubarOnResize() {
    if (window.innerWidth <= 992) {
      this.showMenu = false;
      this.isMobileView = true;
    } else {
      this.showMenu = true;
      this.isMobileView = false;
    }
  }

}

