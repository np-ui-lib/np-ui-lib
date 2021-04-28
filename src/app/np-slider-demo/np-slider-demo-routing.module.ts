import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NpSliderDemoComponent } from "./np-slider-demo.component";

const routes: Routes = [
  {
    path: "",
    component: NpSliderDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NpSliderDemoRoutingModule {}
