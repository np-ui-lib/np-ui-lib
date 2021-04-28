import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NpTabsDemoComponent } from "./np-tabs-demo.component";

const routes: Routes = [
  {
    path: "",
    component: NpTabsDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NpTabsDemoRoutingModule {}
