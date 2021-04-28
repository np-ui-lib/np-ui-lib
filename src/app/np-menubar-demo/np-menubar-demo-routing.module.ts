import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NpMenubarDemoComponent } from "./np-menubar-demo.component";

const routes: Routes = [
  {
    path: "",
    component: NpMenubarDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NpMenubarDemoRoutingModule {}
