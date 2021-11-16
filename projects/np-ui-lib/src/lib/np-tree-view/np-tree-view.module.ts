import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NpTreeViewComponent } from "./np-tree-view.component";
import { NpCheckboxModule } from "../np-checkbox/np-checkbox.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [NpTreeViewComponent],
  imports: [CommonModule, FormsModule, NpCheckboxModule],
  exports: [NpTreeViewComponent],
})
export class NpTreeViewModule { }
