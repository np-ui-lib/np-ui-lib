import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NpPanelDemoComponent } from "./np-panel-demo.component";

const routes: Routes = [
  {
    path: "",
    component: NpPanelDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NpPanelDemoRoutingModule {}
