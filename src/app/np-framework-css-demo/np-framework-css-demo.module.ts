import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpFrameworkCssDemoRoutingModule } from './np-framework-css-demo-routing.module';
import { NpFrameworkCssDemoComponent } from './np-framework-css-demo.component';
import { NpCardModule } from 'np-ui-lib';

@NgModule({
  declarations: [
    NpFrameworkCssDemoComponent
  ],
  imports: [
    CommonModule,
    NpFrameworkCssDemoRoutingModule,
    NpCardModule
  ]
})
export class NpFrameworkCssDemoModule { }
