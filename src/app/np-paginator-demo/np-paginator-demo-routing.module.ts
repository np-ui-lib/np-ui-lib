import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NpPaginatorDemoComponent } from "./np-paginator-demo.component";

const routes: Routes = [
  {
    path: "",
    component: NpPaginatorDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NpPaginatorDemoRoutingModule {}
