import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NpListDemoComponent } from "./np-list-demo.component";

const routes: Routes = [
  {
    path: "",
    component: NpListDemoComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NpListDemoRoutingModule {}
