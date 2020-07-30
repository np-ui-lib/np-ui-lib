import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpCardComponent } from './np-card.component';
import { NpCardHeaderComponent } from './np-card-header.component';
import { NpCardImageComponent } from './np-card-image.component';
import { NpCardFooterComponent } from './np-card-footer.component';

@NgModule({
  declarations: [NpCardComponent, NpCardHeaderComponent, NpCardImageComponent, NpCardFooterComponent],
  imports: [
    CommonModule
  ],
  exports: [NpCardComponent, NpCardHeaderComponent, NpCardImageComponent, NpCardFooterComponent]
})
export class NpCardModule { }
