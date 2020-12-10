import { Component, HostListener, OnInit } from '@angular/core';
import { NpMenuItem, NpTranslationsService } from 'np-ui-lib';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'np-ui-package';
  year = new Date().getFullYear();
  langList = ['En', 'Fr'];

  dataGridItems = [
    new NpMenuItem({ routerLink: '/np-data-grid-demo/data-grid-doc', label: 'Documentation' }),
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
    new NpMenuItem({ routerLink: '/how-to-add', label: 'Get Started' }),
    new NpMenuItem({ isHeader: true, label: 'Input' }),
    new NpMenuItem({ routerLink: '/np-input-text-demo', label: 'Input Text' }),
    new NpMenuItem({ routerLink: '/np-textarea-demo', label: 'Textarea' }),
    new NpMenuItem({ routerLink: '/np-date-picker-demo', label: 'Date Picker' }),
    new NpMenuItem({ routerLink: '/np-time-picker-demo', label: 'Time Picker' }),
    new NpMenuItem({ routerLink: '/np-color-picker-demo', label: 'Color Picker' }),
    new NpMenuItem({ routerLink: '/np-switch-demo', label: 'Switch' }),
    new NpMenuItem({ routerLink: '/np-dropdown-demo', label: 'Dropdown' }),
    new NpMenuItem({ routerLink: '/np-auto-complete-demo', label: 'Auto Complete' }),
    new NpMenuItem({ routerLink: '/np-tags-demo', label: 'Tags' }),
    new NpMenuItem({ routerLink: '/np-number-box-demo', label: 'Number Box' }),
    new NpMenuItem({ routerLink: '/np-file-upload-demo', label: 'File Upload' }),
    new NpMenuItem({ routerLink: '/np-slider-demo', label: 'Slider' }),
    new NpMenuItem({ routerLink: '/np-checkbox-demo', label: 'Checkbox' }),
    new NpMenuItem({ routerLink: '/np-radio-button-demo', label: 'Radio Button' }),
    new NpMenuItem({ isHeader: true, label: 'Menu' }),
    new NpMenuItem({ routerLink: '/np-menubar-demo', label: 'Menubar' }),
    new NpMenuItem({ routerLink: '/np-breadcrumb-demo', label: 'Breadcrumb' }),
    new NpMenuItem({ isHeader: true, label: 'Data' }),
    new NpMenuItem({ routerLink: '/np-data-grid-demo', label: 'Data Grid', items: this.dataGridItems }),
    new NpMenuItem({ routerLink: '/np-paginator-demo', label: 'Paginator' }),
    new NpMenuItem({ routerLink: '/np-carousel-demo', label: 'Carousel' }),
    new NpMenuItem({ routerLink: '/np-tree-view-demo', label: 'Tree view' }),
    new NpMenuItem({ routerLink: '/np-list-demo', label: 'List' }),
    new NpMenuItem({ routerLink: '/np-virtual-scroll-demo', label: 'Virtual Scroll' }),
    new NpMenuItem({ isHeader: true, label: 'Panel' }),
    new NpMenuItem({ routerLink: '/np-panel-demo', label: 'Panel' }),
    new NpMenuItem({ routerLink: '/np-accordion-demo', label: 'Accordion' }),
    new NpMenuItem({ routerLink: '/np-tabs-demo', label: 'Tabs' }),
    new NpMenuItem({ routerLink: '/np-steps-demo', label: 'Steps' }),
    new NpMenuItem({ routerLink: '/np-card-demo', label: 'Card' }),
    new NpMenuItem({ isHeader: true, label: 'Message' }),
    new NpMenuItem({ routerLink: '/np-alert-demo', label: 'Alert' }),
    new NpMenuItem({ routerLink: '/np-notifications-demo', label: 'Notifications' }),
    new NpMenuItem({ isHeader: true, label: 'Overlay' }),
    new NpMenuItem({ routerLink: '/np-modal-demo', label: 'Modal' }),
    new NpMenuItem({ routerLink: '/np-dialog-demo', label: 'Dialog' }),
    new NpMenuItem({ routerLink: '/np-sidepanel-demo', label: 'Sidepanel' }),
    new NpMenuItem({ routerLink: '/np-loader-demo', label: 'Loader' }),
    new NpMenuItem({ routerLink: '/np-blockui-demo', label: 'Block UI' }),
    new NpMenuItem({ routerLink: '/np-tooltip-demo', label: 'Tooltip' }),
    new NpMenuItem({ routerLink: '/np-popover-demo', label: 'Popover' }),
    new NpMenuItem({ isHeader: true, label: 'Other' }),
    new NpMenuItem({ routerLink: '/np-progress-demo', label: 'Progress' }),
    new NpMenuItem({ routerLink: '/np-calendar-demo', label: 'Calendar' }),
    new NpMenuItem({ routerLink: '/np-grid-layout-demo', label: 'Grid Layout' }),
    new NpMenuItem({ routerLink: '/np-mask-demo', label: 'Masking' }),
    new NpMenuItem({ routerLink: '/np-utility-demo', label: 'Other Utility' })
  ];

  showMenu: boolean;
  isMobileView: boolean;
  isHomePage: boolean;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.setMenubarOnResize();
  }

  constructor(private router: Router, private translateService: NpTranslationsService) {
    this.setMenubarOnResize();
  }

  ngOnInit(): void {
    this.router.events.subscribe((ev: any) => {
      if (ev instanceof NavigationStart && !this.isMobileView) {
        if (ev.url === '' || ev.url === '/' || ev.url === '/how-to-add') {
          this.showMenu = false;
          this.isHomePage = true;
        } else {
          this.showMenu = true;
          this.isHomePage = false;
        }
      }
      if (ev instanceof NavigationEnd) {
        document.querySelector('.main-container').scrollTo(0, 0);
      }
    });
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  onClickMenuItem(item) {
    if (window.innerWidth <= 992) {
      this.showMenu = false;
    }
  }

  setMenubarOnResize() {
    if (this.isHomePage) {
      return;
    }
    if (window.innerWidth <= 992) {
      this.showMenu = false;
      this.isMobileView = true;
    } else {
      this.showMenu = true;
      this.isMobileView = false;
    }
  }

  onChangeLang($event) {
    if ($event.target.value === 'FR') {
      this.translateService.setTranslations('FR', {
        'Su': 'Su_FR',
        'Mo': 'Mo_FR',
        'Tu': 'Tu_FR',
        'We': 'We_FR',
        'Th': 'Th_FR',
        'Fr': 'Fr_FR',
        'Sa': 'Sa_FR',
        'Sunday': 'Sunday_FR',
        'Monday': 'Monday_FR',
        'Tuesday': 'Tuesday_FR',
        'Wednesday': 'Wednesday_FR',
        'Thursday': 'Thursday_FR',
        'Friday': 'Friday_FR',
        'Saturday': 'Saturday_FR',
        'January': 'January_FR',
        'February': 'February_FR',
        'March': 'March_FR',
        'April': 'April_FR',
        'May': 'May_FR',
        'June': 'June_FR',
        'July': 'July_FR',
        'August': 'August_FR',
        'September': 'September_FR',
        'October': 'October_FR',
        'November': 'November_FR',
        'December': 'December_FR',
        'Today': 'Today_FR',
        'Ok': 'Ok_FR',
        'Clear': 'Clear_FR',
        'Cancel': 'Cancel_FR',
        'No_Result_Found': 'No result found_FR',
        'Select': 'Select..._FR',
        'True': 'True_FR',
        'False': 'False_FR',
        'No_Data_Found': 'No data found_FR',
        'Search_Columns': 'Search columns..._FR',
        'Saved_Successfully': 'Saved successfully_FR',
        'Add_New_State': 'Add new state_FR',
        'Deleted_Successfully': 'Deleted successfully_FR',
        'Alert': 'Alert_FR',
        'Confirm': 'Confirm_FR',
        'Prompt': 'Prompt_FR',
        'Choose_Files': 'Choose files_FR',
        'Choose_File': 'Choose file_FR',
        'Items_Per_Page': 'Items per page_FR',
        'Of': 'of_FR',
        'Now': 'Now_FR',
        'HH': 'HH_FR',
        'hh': 'hh_FR',
        'mm': 'mm_FR',
        'ss': 'ss_FR',
        'tt': 'tt_FR',
        'HEX': 'HEX_FR',
        'R': 'R_FR',
        'G': 'G_FR',
        'B': 'B_FR'
      });
    } else {
      this.translateService.setTranslations(null, null);
    }
  }

}

