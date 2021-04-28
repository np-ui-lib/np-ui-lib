import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NpCardComponent } from "./np-card.component";
import { NpCardHeaderComponent } from "./np-card-header.component";
import { NpCardImageComponent } from "./np-card-image.component";
import { NpCardFooterComponent } from "./np-card-footer.component";
import { NpCardBodyComponent } from "./np-card-body.component";

@NgModule({
  declarations: [
    NpCardComponent,
    NpCardHeaderComponent,
    NpCardImageComponent,
    NpCardBodyComponent,
    NpCardFooterComponent,
  ],
  imports: [CommonModule],
  exports: [
    NpCardComponent,
    NpCardHeaderComponent,
    NpCardImageComponent,
    NpCardBodyComponent,
    NpCardFooterComponent,
  ],
})
export class NpCardModule {}
