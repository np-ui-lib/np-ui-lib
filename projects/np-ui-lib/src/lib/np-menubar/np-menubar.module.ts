import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpMenubarComponent } from './np-menubar.component';
import { RouterModule } from '@angular/router';
import { OverlayModule } from '@angular/cdk/overlay';
import { NpPopupMenubarDirective } from './np-popup-menubar.directive';

@NgModule({
  declarations: [NpMenubarComponent, NpPopupMenubarDirective],
  imports: [
    CommonModule,
    RouterModule,
    OverlayModule
  ],
  entryComponents: [
    NpMenubarComponent,
  ],
  exports: [NpMenubarComponent, NpPopupMenubarDirective]
})
export class NpMenubarModule { }
