import { Component, HostListener, OnInit, Renderer2 } from "@angular/core";
import { NpMenuItem, NpTranslationsService } from "np-ui-lib";
import { Router, NavigationEnd, NavigationStart } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  title = "np-ui-lib-app";
  year = new Date().getFullYear();
  langList = ["En", "Fr"];

  dataGridItems = [
    new NpMenuItem({
      routerLink: "/np-data-grid-demo/data-grid-doc",
      label: "Documentation",
    }),
    new NpMenuItem({
      routerLink: "/np-data-grid-demo/client-grid",
      label: "Client Side",
    }),
    new NpMenuItem({
      routerLink: "/np-data-grid-demo/server-grid",
      label: "Server Side",
    }),
    new NpMenuItem({
      routerLink: "/np-data-grid-demo/sorting-grid",
      label: "Sorting",
    }),
    new NpMenuItem({
      routerLink: "/np-data-grid-demo/filter-grid",
      label: "Filters",
    }),
    new NpMenuItem({
      routerLink: "/np-data-grid-demo/celltemplate-grid",
      label: "Cell Templates",
    }),
    new NpMenuItem({
      routerLink: "/np-data-grid-demo/toolbar-grid",
      label: "Toolbar, Column Chooser, Export",
    }),
    new NpMenuItem({
      routerLink: "/np-data-grid-demo/columns-grid",
      label: "Column Reorder/Resize and Other",
    }),
    new NpMenuItem({
      routerLink: "/np-data-grid-demo/row-select-grid",
      label: "Row Selection",
    }),
    new NpMenuItem({
      routerLink: "/np-data-grid-demo/master-detail-grid",
      label: "Master Detail",
    }),
    new NpMenuItem({
      routerLink: "/np-data-grid-demo/summary-grid",
      label: "Summary",
    }),
    new NpMenuItem({
      routerLink: "/np-data-grid-demo/state-management-grid",
      label: "State Management",
    }),
    new NpMenuItem({
      routerLink: "/np-data-grid-demo/other-grid",
      label: "Other",
    }),
    new NpMenuItem({
      routerLink: "/np-data-grid-demo/odata-grid",
      label: "OData Server Side",
    }),
    new NpMenuItem({
      routerLink: "/np-data-grid-demo/inside-tab-grid",
      label: "Inside tab",
    }),
    new NpMenuItem({
      routerLink: "/np-data-grid-demo/client-grid-all",
      label: "Client Side Grid Full",
    }),
    new NpMenuItem({
      routerLink: "/np-data-grid-demo/server-grid-all",
      label: "Server Side Grid Full",
    }),
  ];

  menuItems = [
    new NpMenuItem({ routerLink: "/how-to-add", label: "Get Started" }),
    new NpMenuItem({ routerLink: "/np-i18n-demo", label: "i18N" }),
    new NpMenuItem({ routerLink: "/np-theming-demo", label: "Themes" }),
    new NpMenuItem({
      isHeader: true,
      label: "Input",
      iconCss: "fab fa-wpforms",
    }),
    new NpMenuItem({ routerLink: "/np-input-text-demo", label: "Input Text" }),
    new NpMenuItem({ routerLink: "/np-textarea-demo", label: "Textarea" }),
    new NpMenuItem({
      routerLink: "/np-date-picker-demo",
      label: "Date Picker",
    }),
    new NpMenuItem({
      routerLink: "/np-time-picker-demo",
      label: "Time Picker",
    }),
    new NpMenuItem({
      routerLink: "/np-color-picker-demo",
      label: "Color Picker",
    }),
    new NpMenuItem({ routerLink: "/np-switch-demo", label: "Switch" }),
    new NpMenuItem({ routerLink: "/np-dropdown-demo", label: "Dropdown" }),
    new NpMenuItem({
      routerLink: "/np-auto-complete-demo",
      label: "Auto Complete",
    }),
    new NpMenuItem({ routerLink: "/np-tags-demo", label: "Tags" }),
    new NpMenuItem({ routerLink: "/np-number-box-demo", label: "Number Box" }),
    new NpMenuItem({
      routerLink: "/np-file-upload-demo",
      label: "File Upload",
    }),
    new NpMenuItem({ routerLink: "/np-slider-demo", label: "Slider" }),
    new NpMenuItem({ routerLink: "/np-checkbox-demo", label: "Checkbox" }),
    new NpMenuItem({
      routerLink: "/np-radio-button-demo",
      label: "Radio Button",
    }),
    new NpMenuItem({ routerLink: "/np-rich-text-demo", label: "Rich Text" }),
    new NpMenuItem({ isHeader: true, label: "Menu", iconCss: "fa fa-bars" }),
    new NpMenuItem({ routerLink: "/np-menubar-demo", label: "Menubar" }),
    new NpMenuItem({ routerLink: "/np-breadcrumb-demo", label: "Breadcrumb" }),
    new NpMenuItem({ routerLink: "/np-toolbar-demo", label: "Toolbar" }),
    new NpMenuItem({ isHeader: true, label: "Data", iconCss: "fa fa-table" }),
    new NpMenuItem({
      routerLink: "/np-data-grid-demo",
      label: "Data Grid",
      items: this.dataGridItems,
    }),
    new NpMenuItem({ routerLink: "/np-paginator-demo", label: "Paginator" }),
    new NpMenuItem({ routerLink: "/np-carousel-demo", label: "Carousel" }),
    new NpMenuItem({ routerLink: "/np-tree-view-demo", label: "Tree view" }),
    new NpMenuItem({ routerLink: "/np-list-demo", label: "List" }),
    new NpMenuItem({
      routerLink: "/np-virtual-scroll-demo",
      label: "Virtual Scroll",
    }),
    new NpMenuItem({ routerLink: "/np-calendar-demo", label: "Calendar" }),
    new NpMenuItem({ routerLink: "/np-timeline-demo", label: "Timeline" }),
    new NpMenuItem({
      isHeader: true,
      label: "Panel",
      iconCss: "fa fa-columns",
    }),
    new NpMenuItem({ routerLink: "/np-panel-demo", label: "Panel" }),
    new NpMenuItem({ routerLink: "/np-accordion-demo", label: "Accordion" }),
    new NpMenuItem({ routerLink: "/np-tabs-demo", label: "Tabs" }),
    new NpMenuItem({ routerLink: "/np-steps-demo", label: "Steps" }),
    new NpMenuItem({ routerLink: "/np-card-demo", label: "Card" }),
    new NpMenuItem({
      isHeader: true,
      label: "Message",
      iconCss: "fas fa-comment-alt",
    }),
    new NpMenuItem({ routerLink: "/np-alert-demo", label: "Alert" }),
    new NpMenuItem({
      routerLink: "/np-notifications-demo",
      label: "Notifications",
    }),
    new NpMenuItem({
      isHeader: true,
      label: "Overlay",
      iconCss: "fa fa-layer-group",
    }),
    new NpMenuItem({ routerLink: "/np-modal-demo", label: "Modal" }),
    new NpMenuItem({ routerLink: "/np-dialog-demo", label: "Dialog" }),
    new NpMenuItem({ routerLink: "/np-sidepanel-demo", label: "Sidepanel" }),
    new NpMenuItem({ routerLink: "/np-loader-demo", label: "Loader" }),
    new NpMenuItem({ routerLink: "/np-blockui-demo", label: "Block Ui" }),
    new NpMenuItem({ routerLink: "/np-tooltip-demo", label: "Tooltip" }),
    new NpMenuItem({ routerLink: "/np-popover-demo", label: "Popover" }),
    new NpMenuItem({ isHeader: true, label: "Misc", iconCss: "fa fa-star" }),
    new NpMenuItem({ routerLink: "/np-progress-demo", label: "Progress" }),
    new NpMenuItem({ routerLink: "/np-mask-demo", label: "Masking" }),
    new NpMenuItem({ routerLink: "/np-form-demo", label: "Form" }),
    new NpMenuItem({
      routerLink: "/np-directives-demo",
      label: "Directives & Pipes",
    }),
    new NpMenuItem({ routerLink: "/np-button-demo", label: "Button" }),
    new NpMenuItem({ routerLink: "/np-badge-demo", label: "Badge" }),
    new NpMenuItem({
      routerLink: "/np-grid-layout-demo",
      label: "Grid Layout",
    }),
    new NpMenuItem({ routerLink: "/np-padding-margin-demo", label: "Padding and Margin" }),
    new NpMenuItem({ routerLink: "/np-framework-css-demo", label: "Framework CSS" })
  ];

  showMenu: boolean;
  isMobileView: boolean;
  isHomePage: boolean;

  @HostListener("window:resize", ["$event"])
  onResize() {
    this.setMenubarOnResize();
  }

  constructor(
    private router: Router,
    private translateService: NpTranslationsService,
    private renderer: Renderer2
  ) {
    this.setMenubarOnResize();
  }

  ngOnInit(): void {
    this.router.events.subscribe((ev: any) => {
      if (ev instanceof NavigationStart && !this.isMobileView) {
        if (ev.url === "" || ev.url === "/" || ev.url === "/how-to-add") {
          this.showMenu = false;
          this.isHomePage = true;
        } else {
          this.showMenu = true;
          this.isHomePage = false;
        }
      }
      if (ev instanceof NavigationEnd) {
        document.querySelector(".main-container").scrollTo(0, 0);
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
    if ($event.target.value === "हिंदी") {
      this.translateService.setTranslations({
        Su: "रवि",
        Mo: "सोम",
        Tu: "मंगल",
        We: "बुध",
        Th: "गुरू",
        Fr: "शुक्र",
        Sa: "शनि",
        Sunday: "रविवार",
        Monday: "सोमवार",
        Tuesday: "मंगलवार",
        Wednesday: "बुधवार",
        Thursday: "गुरूवार",
        Friday: "शुक्रवार",
        Saturday: "शनिवार",
        January: "जनवरी",
        February: "फरवरी",
        March: "मार्च",
        April: "अप्रैल",
        May: "मई",
        June: "जून",
        July: "जुलाई",
        August: "अगस्त",
        September: "सितंबर",
        October: "अक्टूबर",
        November: "नवंबर",
        December: "दिसंबर",
        Today: "आज",
        Ok: "चुनें",
        Clear: "हटाना",
        Cancel: "रद्द करना",
        Select: "चयन करें",
        Search: "खोजें",
        Reset: "रीसेट",
        True: "सही",
        False: "गलत",
        No_Data_Found: "कोई डेटा नहीं मिला",
        No_Result_Found: "कोई डेटा नहीं मिला",
        Search_Columns: "कॉलम खोजें",
        Saved_Successfully: "सफलतापूर्वक स्टोर करे",
        Add_New_State: "नया जोड़ें",
        Deleted_Successfully: "सफलतापूर्वक मिटाया गया",
        State_Name_Already_Exists: "नाम पहले से मौजूद है",
        Alert: "चेतावनी",
        Confirm: "पुष्टि करे",
        Prompt: "पूछना",
        Choose_Files: "फ़ाइलों का चयन करें",
        Choose_File: "फ़ाइल का चयन करें",
        Items_Per_Page: "आइटम प्रति पृष्ठ",
        Now: "अभी",
        ">": "से अधिक",
        "<": "से कम",
        ">=": "से अधिक और बराबर",
        "<=": "से कम और बराबर",
        "=": "बराबर",
        "!=": "बराबर नही",
        abc: "बराबर",
        "abc*": "के साथ शुरू",
        "*abc": "के साथ समाप्त",
        "*abc*": "के बीच",
        Enter_The_URL_For_Link: "लिंक के लिए url दर्ज करें",
        Formatting: "फॉर्मेटिंग",
        Font: "फ़ॉन्ट",
        Font_Size: "फ़ॉन्ट आकार",
      });
    } else {
      this.translateService.setTranslations(null);
    }
  }

  onChangeTheme($event) {
    this.renderer.removeAttribute(document.body, "class");
    this.renderer.addClass(document.body, $event.target.value);
  }
}
