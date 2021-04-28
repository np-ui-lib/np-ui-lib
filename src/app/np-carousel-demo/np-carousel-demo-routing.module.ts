import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NpCarouselDemoComponent } from "./np-carousel-demo.component";

const routes: Routes = [
  {
    path: "",
    component: NpCarouselDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NpCarouselDemoRoutingModule {}
