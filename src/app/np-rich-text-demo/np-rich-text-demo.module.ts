import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NpRichTextDemoRoutingModule } from "./np-rich-text-demo-routing.module";
import { NpRichTextDemoComponent } from "./np-rich-text-demo.component";
import { NpCardModule, NpRichTextModule, NpTabsModule } from "np-ui-lib";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [NpRichTextDemoComponent],
  imports: [
    CommonModule,
    NpRichTextDemoRoutingModule,
    NpRichTextModule,
    FormsModule,
    NpTabsModule,
    NpCardModule,
  ],
})
export class NpRichTextDemoModule {}
