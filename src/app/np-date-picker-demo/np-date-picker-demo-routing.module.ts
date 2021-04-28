import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NpDatePickerDemoComponent } from "./np-date-picker-demo.component";

const routes: Routes = [
  {
    path: "",
    component: NpDatePickerDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NpDatePickerDemoRoutingModule {}
