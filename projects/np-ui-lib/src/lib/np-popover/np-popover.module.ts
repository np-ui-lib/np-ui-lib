import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NpPopoverComponent } from "./np-popover.component";
import { OverlayModule } from "@angular/cdk/overlay";
import { NpPopoverDirective } from "./np-popover.directive";

@NgModule({
  declarations: [NpPopoverComponent, NpPopoverDirective],
  imports: [CommonModule, OverlayModule],
  exports: [NpPopoverDirective],
  entryComponents: [NpPopoverComponent],
})
export class NpPopoverModule {}
