import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpUiCarouselDemoRoutingModule } from './np-ui-carousel-demo-routing.module';
import { NpUiCarouselDemoComponent } from './np-ui-carousel-demo.component';
import { NpUiCarouselModule } from 'projects/np-ui-lib/src/public-api';


@NgModule({
  declarations: [NpUiCarouselDemoComponent],
  imports: [
    CommonModule,
    NpUiCarouselDemoRoutingModule,
    NpUiCarouselModule
  ]
})
export class NpUiCarouselDemoModule { }
