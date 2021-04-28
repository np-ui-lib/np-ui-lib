import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NpModalDemoRoutingModule } from "./np-modal-demo-routing.module";
import { NpModalDemoComponent } from "./np-modal-demo.component";
import {
  NpModalModule,
  NpDatePickerModule,
  NpTimePickerModule,
  NpSwitchModule,
  NpTabsModule,
  NpCardModule,
  NpAutofocusModule,
} from "np-ui-lib";
import { ReactiveFormsModule } from "@angular/forms";
import { NpModalDemoChildComponent } from "./np-modal-demo-child/np-modal-demo-child.component";

@NgModule({
  declarations: [NpModalDemoComponent, NpModalDemoChildComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NpModalDemoRoutingModule,
    NpModalModule,
    NpDatePickerModule,
    NpTimePickerModule,
    NpSwitchModule,
    NpTabsModule,
    NpCardModule,
    NpAutofocusModule,
  ],
  entryComponents: [NpModalDemoChildComponent],
})
export class NpModalDemoModule {}
