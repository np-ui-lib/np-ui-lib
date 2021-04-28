import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NpTreeViewDemoComponent } from "./np-tree-view-demo.component";

const routes: Routes = [
  {
    path: "",
    component: NpTreeViewDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NpTreeViewDemoRoutingModule {}
