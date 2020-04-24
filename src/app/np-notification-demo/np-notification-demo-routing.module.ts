import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpNotificationDemoComponent } from './np-notification-demo.component';


const routes: Routes = [
  {
    path: '',
    component: NpNotificationDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpNotificationDemoRoutingModule { }
