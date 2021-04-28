import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NpCalendarDemoComponent } from "./np-calendar-demo.component";

const routes: Routes = [
  {
    path: "",
    component: NpCalendarDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NpCalendarDemoRoutingModule {}
