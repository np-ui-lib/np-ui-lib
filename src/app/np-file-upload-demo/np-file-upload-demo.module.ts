import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NpFileUploadDemoRoutingModule } from "./np-file-upload-demo-routing.module";
import { NpFileUploadDemoComponent } from "./np-file-upload-demo.component";
import {
  NpFileUploadModule,
  NpCardModule,
  NpTabsModule,
  NpAlertModule,
} from "np-ui-lib";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [NpFileUploadDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    NpFileUploadDemoRoutingModule,
    NpFileUploadModule,
    NpTabsModule,
    NpCardModule,
    NpAlertModule,
  ],
})
export class NpFileUploadDemoModule {}
