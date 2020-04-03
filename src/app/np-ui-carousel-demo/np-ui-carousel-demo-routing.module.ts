import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpUiCarouselDemoComponent } from './np-ui-carousel-demo.component';


const routes: Routes = [{
  path: "",
  component: NpUiCarouselDemoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpUiCarouselDemoRoutingModule { }
