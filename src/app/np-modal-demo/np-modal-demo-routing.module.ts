import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NpModalDemoComponent } from "./np-modal-demo.component";

const routes: Routes = [
  {
    path: "",
    component: NpModalDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NpModalDemoRoutingModule {}
