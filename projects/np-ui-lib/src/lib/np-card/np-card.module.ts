import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpCardComponent } from './np-card.component';
import { NpCardHeaderComponent } from './np-card-header.component';
import { NpCardFooterComponent } from './np-card-footer.component';

@NgModule({
  declarations: [NpCardComponent, NpCardHeaderComponent, NpCardFooterComponent],
  imports: [
    CommonModule
  ],
  exports: [NpCardComponent, NpCardHeaderComponent, NpCardFooterComponent]
})
export class NpCardModule { }
