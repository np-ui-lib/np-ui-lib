import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NpBlockUiDirective } from "./np-blockui.directive";

@NgModule({
  declarations: [NpBlockUiDirective],
  imports: [CommonModule],
  exports: [NpBlockUiDirective],
})
export class NpBlockUiModule {}
