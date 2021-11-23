import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NpListComponent } from "./np-list.component";
import { NpPaginatorModule } from "../np-paginator/np-paginator.module";
import { NpCheckboxModule } from "../np-checkbox/np-checkbox.module";
import { FormsModule } from "@angular/forms";
import { NpOrderByModule } from "../np-utility/np-orderby.module";

@NgModule({
  declarations: [NpListComponent],
  imports: [
    CommonModule,
    FormsModule,
    NpPaginatorModule,
    NpCheckboxModule,
    NpOrderByModule,
  ],
  exports: [NpListComponent],
})
export class NpListModule { }
