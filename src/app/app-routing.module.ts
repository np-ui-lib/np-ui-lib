import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'how-to-add',
    loadChildren: () => import('./how-to-add/how-to-add.module').then(m => m.HowToAddModule)
  },
  {
    path: 'np-date-picker-demo',
    loadChildren: () => import('./np-date-picker-demo/np-date-picker-demo.module').then(m => m.NpDatePickerDemoModule)
  },
  {
    path: 'np-time-picker-demo',
    loadChildren: () => import('./np-time-picker-demo/np-time-picker-demo.module').then(m => m.NpTimePickerDemoModule)
  },
  {
    path: 'np-color-picker-demo',
    loadChildren: () => import('./np-color-picker-demo/np-color-picker-demo.module').then(m => m.NpColorPickerDemoModule)
  },
  {
    path: 'np-data-grid-demo',
    loadChildren: () => import('./np-data-grid-demo/np-data-grid-demo.module').then(m => m.NpDataGridDemoModule)
  },
  {
    path: 'np-switch-demo',
    loadChildren: () => import('./np-switch-demo/np-switch-demo.module').then(m => m.NpSwitchDemoModule)
  },
  {
    path: 'np-notifications-demo',
    loadChildren: () => import('./np-notifications-demo/np-notifications-demo.module').then(m => m.NpNotificationsDemoModule)
  },
  {
    path: 'np-auto-complete-demo',
    loadChildren: () => import('./np-auto-complete-demo/np-auto-complete-demo.module').then(m => m.NpAutoCompleteDemoModule)
  },
  {
    path: 'np-panel-demo',
    loadChildren: () => import('./np-panel-demo/np-panel-demo.module').then(m => m.NpPanelDemoModule)
  },
  {
    path: 'np-utility-demo',
    loadChildren: () => import('./np-utility-demo/np-utility-demo.module').then(m => m.NpUtilityDemoModule)
  },
  {
    path: 'np-tooltip-demo',
    loadChildren: () => import('./np-tooltip-demo/np-tooltip-demo.module').then(m => m.NpTooltipDemoModule)
  },
  {
    path: 'np-progress-demo',
    loadChildren: () => import('./np-progress-demo/np-progress-demo.module').then(m => m.NpProgressDemoModule)
  },
  {
    path: 'np-carousel-demo',
    loadChildren: () => import('./np-carousel-demo/np-carousel-demo.module').then(m => m.NpCarouselDemoModule)
  },
  {
    path: 'np-tabs-demo',
    loadChildren: () => import('./np-tabs-demo/np-tabs-demo.module').then(m => m.NpTabsDemoModule)
  },
  {
    path: 'np-accordion-demo',
    loadChildren: () => import('./np-accordion-demo/np-accordion-demo.module').then(m => m.NpAccordionDemoModule)
  },
  {
    path: 'np-alert-demo',
    loadChildren: () => import('./np-alert-demo/np-alert-demo.module').then(m => m.NpAlertDemoModule)
  },
  {
    path: 'np-modal-demo',
    loadChildren: () => import('./np-modal-demo/np-modal-demo.module').then(m => m.NpModalDemoModule)
  },
  {
    path: 'np-tags-demo',
    loadChildren: () => import('./np-tags-demo/np-tags-demo.module').then(m => m.NpTagsDemoModule)
  },
  {
    path: 'np-popover-demo',
    loadChildren: () => import('./np-popover-demo/np-popover-demo.module').then(m => m.NpPopoverDemoModule)
  },
  {
    path: 'np-dropdown-demo',
    loadChildren: () => import('./np-dropdown-demo/np-dropdown-demo.module').then(m => m.NpDropdownDemoModule)
  },
  {
    path: 'np-menubar-demo',
    loadChildren: () => import('./np-menubar-demo/np-menubar-demo.module').then(m => m.NpMenubarDemoModule)
  },
  {
    path: 'np-card-demo',
    loadChildren: () => import('./np-card-demo/np-card-demo.module').then(m => m.NpCardDemoModule)
  },
  {
    path: 'np-loader-demo',
    loadChildren: () => import('./np-loader-demo/np-loader-demo.module').then(m => m.NpLoaderDemoModule)
  },
  {
    path: 'np-sidepanel-demo',
    loadChildren: () => import('./np-sidepanel-demo/np-sidepanel-demo.module').then(m => m.NpSidepanelDemoModule)
  },
  {
    path: 'np-breadcrumb-demo',
    loadChildren: () => import('./np-breadcrumb-demo/np-breadcrumb-demo.module').then(m => m.NpBreadcrumbDemoModule)
  },
  {
    path: 'np-number-box-demo',
    loadChildren: () => import('./np-number-box-demo/np-number-box-demo.module').then(m => m.NpNumberBoxDemoModule)
  },
  {
    path: 'np-tree-view-demo',
    loadChildren: () => import('./np-tree-view-demo/np-tree-view-demo.module').then(m => m.NpTreeViewDemoModule)
  },
  {
    path: 'np-file-upload-demo',
    loadChildren: () => import('./np-file-upload-demo/np-file-upload-demo.module').then(m => m.NpFileUploadDemoModule)
  },
  {
    path: 'np-slider-demo',
    loadChildren: () => import('./np-slider-demo/np-slider-demo.module').then(m => m.NpSliderDemoModule)
  },
  {
    path: 'np-grid-layout-demo',
    loadChildren: () => import('./np-grid-layout-demo/np-grid-layout-demo.module').then(m => m.NpGridLayoutDemoModule)
  },
  {
    path: 'np-list-demo',
    loadChildren: () => import('./np-list-demo/np-list-demo.module').then(m => m.NpListDemoModule)
  },
  {
    path: 'np-blockui-demo',
    loadChildren: () => import('./np-blockui-demo/np-blockui-demo.module').then(m => m.NpBlockuiDemoModule)
  },
  {
    path: 'np-virtual-scroll-demo',
    loadChildren: () => import('./np-virtual-scroll-demo/np-virtual-scroll-demo.module').then(m => m.NpVirtualScrollDemoModule)
  },
  {
    path: 'np-dialog-demo',
    loadChildren: () => import('./np-dialog-demo/np-dialog-demo.module').then(m => m.NpDialogDemoModule)
  },
  {
    path: 'np-mask-demo',
    loadChildren: () => import('./np-mask-demo/np-mask-demo.module').then(m => m.NpMaskDemoModule)
  },
  {
    path: 'np-steps-demo',
    loadChildren: () => import('./np-steps-demo/np-steps-demo.module').then(m => m.NpStepsDemoModule)
  },
  {
    path: 'np-paginator-demo',
    loadChildren: () => import('./np-paginator-demo/np-paginator-demo.module').then(m => m.NpPaginatorDemoModule)
  },
  {
    path: 'np-calendar-demo',
    loadChildren: () => import('./np-calendar-demo/np-calendar-demo.module').then(m => m.NpCalendarDemoModule)
  },
  {
    path: 'np-checkbox-demo',
    loadChildren: () => import('./np-checkbox-demo/np-checkbox-demo.module').then(m => m.NpCheckboxDemoModule)
  },
  {
    path: 'np-radio-button-demo',
    loadChildren: () => import('./np-radio-button-demo/np-radio-button-demo.module').then(m => m.NpRadioButtonDemoModule)
  },
  {
    path: 'np-input-text-demo',
    loadChildren: () => import('./np-input-text-demo/np-input-text-demo.module').then(m => m.NpInputTextDemoModule)
  },
  {
    path: 'np-textarea-demo',
    loadChildren: () => import('./np-textarea-demo/np-textarea-demo.module').then(m => m.NpTextareaDemoModule)
  },
  {
    path: 'np-theming-demo',
    loadChildren: () => import('./np-theming-demo/np-theming-demo.module').then(m => m.NpThemingDemoModule)
  },
  {
    path: 'np-i18n-demo',
    loadChildren: () => import('./np-i18n-demo/np-i18n-demo.module').then(m => m.NpI18nDemoModule)
  },
  {
    path: 'np-rich-text-demo',
    loadChildren: () => import('./np-rich-text-demo/np-rich-text-demo.module').then(m => m.NpRichTextDemoModule)
  },
  {
    path: '**',
    redirectTo: 'how-to-add',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'how-to-add',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
