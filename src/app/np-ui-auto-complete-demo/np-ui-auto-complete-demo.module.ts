import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpUiAutoCompleteDemoRoutingModule } from './np-ui-auto-complete-demo-routing.module';
import { NpUiAutoCompleteDemoComponent } from './np-ui-auto-complete-demo.component';
import { FormsModule } from '@angular/forms';
import { NpUiAutoCompleteModule, NpUiHightLightPipe, NpUiUtility } from 'np-ui-lib';

@NgModule({
  declarations: [NpUiAutoCompleteDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    NpUiAutoCompleteDemoRoutingModule,
    NpUiAutoCompleteModule,
    NpUiUtility
  ],
  providers: [NpUiHightLightPipe]
})
export class NpUiAutoCompleteDemoModule { }
