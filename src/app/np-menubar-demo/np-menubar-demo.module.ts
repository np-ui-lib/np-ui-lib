import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpMenubarDemoRoutingModule } from './np-menubar-demo-routing.module';
import { NpMenubarDemoComponent } from './np-menubar-demo.component';
import { NpMenubarModule, NpCardModule, NpTabsModule } from 'np-ui-lib';


@NgModule({
  declarations: [NpMenubarDemoComponent],
  imports: [
    CommonModule,
    NpMenubarDemoRoutingModule,
    NpMenubarModule,
    NpCardModule,
    NpTabsModule
  ]
})
export class NpMenubarDemoModule { }
