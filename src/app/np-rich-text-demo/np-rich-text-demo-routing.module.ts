import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpRichTextDemoComponent } from './np-rich-text-demo.component';

const routes: Routes = [
  {
    path: '',
    component: NpRichTextDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpRichTextDemoRoutingModule { }
