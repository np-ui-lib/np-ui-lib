import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpSliderComponent } from './np-slider.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NpSliderComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [NpSliderComponent]
})
export class NpSliderModule { }
