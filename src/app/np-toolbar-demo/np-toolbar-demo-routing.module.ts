import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NpToolbarDemoComponent } from "./np-toolbar-demo.component";

const routes: Routes = [
  {
    path: "",
    component: NpToolbarDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NpToolbarDemoRoutingModule {}
