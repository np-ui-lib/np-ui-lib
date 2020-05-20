import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpFileUploadDemoComponent } from './np-file-upload-demo.component';

const routes: Routes = [
  {
    path: '',
    component: NpFileUploadDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpFileUploadDemoRoutingModule { }
