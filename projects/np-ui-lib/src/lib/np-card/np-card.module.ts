import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpCardComponent } from './np-card.component';
import { NpCardHeaderComponent } from './np-card-header.component';
import { NpCardFooterComponent } from './np-card-footer.component';
import { NpCardTitleComponent } from './np-card-title.component';

@NgModule({
  declarations: [NpCardComponent, NpCardHeaderComponent, NpCardFooterComponent, NpCardTitleComponent],
  imports: [
    CommonModule
  ],
  exports: [NpCardComponent, NpCardHeaderComponent, NpCardFooterComponent, NpCardTitleComponent]
})
export class NpCardModule { }
