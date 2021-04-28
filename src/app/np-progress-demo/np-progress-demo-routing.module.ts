import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NpProgressDemoComponent } from "./np-progress-demo.component";

const routes: Routes = [
  {
    path: "",
    component: NpProgressDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NpProgressDemoRoutingModule {}
