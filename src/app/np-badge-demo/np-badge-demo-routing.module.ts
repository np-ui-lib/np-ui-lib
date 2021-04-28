import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NpBadgeDemoComponent } from "./np-badge-demo.component";

const routes: Routes = [
  {
    path: "",
    component: NpBadgeDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NpBadgeDemoRoutingModule {}
