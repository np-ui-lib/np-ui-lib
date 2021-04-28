import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NpSidepanelDemoComponent } from "./np-sidepanel-demo.component";

const routes: Routes = [
  {
    path: "",
    component: NpSidepanelDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NpSidepanelDemoRoutingModule {}
