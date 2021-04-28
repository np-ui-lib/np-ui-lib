import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NpTextareaDemoComponent } from "./np-textarea-demo.component";

const routes: Routes = [
  {
    path: "",
    component: NpTextareaDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NpTextareaDemoRoutingModule {}
