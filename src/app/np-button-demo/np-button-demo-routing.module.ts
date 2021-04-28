import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NpButtonDemoComponent } from "./np-button-demo.component";

const routes: Routes = [
  {
    path: "",
    component: NpButtonDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NpButtonDemoRoutingModule {}
