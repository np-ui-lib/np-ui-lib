import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpNotificationsDemoComponent } from './np-notifications-demo.component';


const routes: Routes = [
  {
    path: '',
    component: NpNotificationsDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpNotificationsDemoRoutingModule { }
