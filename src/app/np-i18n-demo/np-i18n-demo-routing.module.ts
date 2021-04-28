import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NpI18nDemoComponent } from "./np-i18n-demo.component";

const routes: Routes = [
  {
    path: "",
    component: NpI18nDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NpI18nDemoRoutingModule {}
