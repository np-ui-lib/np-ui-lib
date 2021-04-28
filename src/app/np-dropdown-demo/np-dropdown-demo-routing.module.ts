import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NpDropdownDemoComponent } from "./np-dropdown-demo.component";

const routes: Routes = [
  {
    path: "",
    component: NpDropdownDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NpDropdownDemoRoutingModule {}
