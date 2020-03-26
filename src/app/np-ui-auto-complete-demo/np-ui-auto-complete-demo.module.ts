import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpUiAutoCompleteDemoRoutingModule } from './np-ui-auto-complete-demo-routing.module';
import { NpUiAutoCompleteDemoComponent } from './np-ui-auto-complete-demo.component';
import { FormsModule } from '@angular/forms';
import { NpUiAutoCompleteModule } from 'projects/np-ui-lib/src/public-api';


@NgModule({
  declarations: [NpUiAutoCompleteDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    NpUiAutoCompleteDemoRoutingModule,
    NpUiAutoCompleteModule
  ]
})
export class NpUiAutoCompleteDemoModule { }
