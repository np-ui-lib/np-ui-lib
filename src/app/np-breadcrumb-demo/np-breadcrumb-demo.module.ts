import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpBreadcrumbDemoRoutingModule } from './np-breadcrumb-demo-routing.module';
import { NpBreadcrumbDemoComponent } from './np-breadcrumb-demo.component';
import { NpBreadcrumbModule } from 'np-ui-lib';

@NgModule({
  declarations: [NpBreadcrumbDemoComponent],
  imports: [
    CommonModule,
    NpBreadcrumbDemoRoutingModule,
    NpBreadcrumbModule
  ]
})
export class NpBreadcrumbDemoModule { }
