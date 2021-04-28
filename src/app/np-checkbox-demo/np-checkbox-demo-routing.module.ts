import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NpCheckboxDemoComponent } from "./np-checkbox-demo.component";

const routes: Routes = [
  {
    path: "",
    component: NpCheckboxDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NpCheckboxDemoRoutingModule {}
