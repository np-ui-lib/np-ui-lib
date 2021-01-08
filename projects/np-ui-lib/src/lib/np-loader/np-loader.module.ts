import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpLoaderDirective } from './np-loader.directive';

@NgModule({
  declarations: [NpLoaderDirective],
  imports: [CommonModule],
  exports: [NpLoaderDirective]
})
export class NpLoaderModule { }
