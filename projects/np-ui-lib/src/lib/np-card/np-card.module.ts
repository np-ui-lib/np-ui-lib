import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpCardComponent } from './np-card.component';
import { NpCardHeaderComponent } from './np-card-header.component';
import { NpCardBodyComponent } from './np-card-body.component';
import { NpCardFooterComponent } from './np-card-footer.component';

@NgModule({
  declarations: [NpCardComponent, NpCardHeaderComponent, NpCardBodyComponent, NpCardFooterComponent],
  imports: [
    CommonModule
  ],
  exports: [NpCardComponent, NpCardHeaderComponent, NpCardBodyComponent, NpCardFooterComponent]
})
export class NpCardModule { }
