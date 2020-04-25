import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpMenubarComponent } from './np-menubar.component';
import { RouterModule } from '@angular/router';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [NpMenubarComponent],
  imports: [
    CommonModule,
    RouterModule,
    OverlayModule
  ],
  exports: [NpMenubarComponent]
})
export class NpMenubarModule { }
