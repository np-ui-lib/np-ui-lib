import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpVirtualScrollDemoComponent } from './np-virtual-scroll-demo.component';


const routes: Routes = [{
  path: '',
  component: NpVirtualScrollDemoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpVirtualScrollDemoRoutingModule { }
