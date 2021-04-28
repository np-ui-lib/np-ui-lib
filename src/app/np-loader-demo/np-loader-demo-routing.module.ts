import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NpLoaderDemoComponent } from "./np-loader-demo.component";

const routes: Routes = [
  {
    path: "",
    component: NpLoaderDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NpLoaderDemoRoutingModule {}
