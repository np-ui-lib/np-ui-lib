import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpThemingDemoRoutingModule } from './np-theming-demo-routing.module';
import { NpThemingDemoComponent } from './np-theming-demo.component';
import { NpTabsModule } from 'np-ui-lib';

@NgModule({
  declarations: [NpThemingDemoComponent],
  imports: [
    CommonModule,
    NpThemingDemoRoutingModule,
    NpTabsModule
  ]
})
export class NpThemingDemoModule { }
