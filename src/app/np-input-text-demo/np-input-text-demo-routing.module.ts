import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NpInputTextDemoComponent } from "./np-input-text-demo.component";

const routes: Routes = [
  {
    path: "",
    component: NpInputTextDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NpInputTextDemoRoutingModule {}
