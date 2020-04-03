import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpUiCarouselComponent } from './np-ui-carousel.component';

@NgModule({
  declarations: [NpUiCarouselComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NpUiCarouselComponent
  ]
})
export class NpUiCarouselModule { }
