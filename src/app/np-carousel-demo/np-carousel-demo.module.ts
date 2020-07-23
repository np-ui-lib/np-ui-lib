import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpCarouselDemoRoutingModule } from './np-carousel-demo-routing.module';
import { NpCarouselDemoComponent } from './np-carousel-demo.component';
import { NpCarouselModule, NpCardModule, NpTabsModule } from 'np-ui-lib';


@NgModule({
  declarations: [NpCarouselDemoComponent],
  imports: [
    CommonModule,
    NpCarouselDemoRoutingModule,
    NpCarouselModule,
    NpCardModule,
    NpTabsModule
  ]
})
export class NpCarouselDemoModule { }
