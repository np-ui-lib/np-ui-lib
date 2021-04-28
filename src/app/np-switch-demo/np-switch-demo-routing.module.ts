import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NpSwitchDemoComponent } from "./np-switch-demo.component";

const routes: Routes = [
  {
    path: "",
    component: NpSwitchDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NpSwitchDemoRoutingModule {}
