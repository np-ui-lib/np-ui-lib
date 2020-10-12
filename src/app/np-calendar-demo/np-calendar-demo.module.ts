import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpCalendarDemoRoutingModule } from './np-calendar-demo-routing.module';
import { NpCalendarDemoComponent } from './np-calendar-demo.component';
import { NpCalendarModule, NpCardModule, NpDialogModule, NpTabsModule, NpTooltipModule } from 'np-ui-lib';


@NgModule({
  declarations: [NpCalendarDemoComponent],
  imports: [
    CommonModule,
    NpCalendarDemoRoutingModule,
    NpCalendarModule,
    NpDialogModule,
    NpTabsModule,
    NpCardModule,
    NpTooltipModule
  ]
})
export class NpCalendarDemoModule { }
