import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpSliderComponent } from './np-slider.component';
import { NpUtilityModule } from '../np-utility/np-utility.module';

@NgModule({
  declarations: [NpSliderComponent],
  imports: [CommonModule, NpUtilityModule],
  exports: [NpSliderComponent]
})
export class NpSliderModule { }
