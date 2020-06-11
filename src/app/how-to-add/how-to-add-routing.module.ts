import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HowToAddComponent } from './how-to-add.component';

const routes: Routes = [
  {
    path: "",
    component: HowToAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HowToAddRoutingModule { }
