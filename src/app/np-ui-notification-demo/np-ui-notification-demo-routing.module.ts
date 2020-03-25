import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpUiNotificationDemoComponent } from './np-ui-notification-demo.component';


const routes: Routes = [
  {
    path: '',
    component: NpUiNotificationDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpUiNotificationDemoRoutingModule { }
