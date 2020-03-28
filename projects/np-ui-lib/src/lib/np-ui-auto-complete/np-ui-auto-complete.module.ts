import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpUiAutoCompleteComponent } from './np-ui-auto-complete.component';
import { FormsModule } from '@angular/forms';
import { NpUiUtility } from '../np-ui-utility/np-ui-utility.module';
import { NpUiHightLightPipe } from '../np-ui-utility/np-ui-highlight.pipe';

@NgModule({
  declarations: [NpUiAutoCompleteComponent],
  imports: [
    CommonModule,
    FormsModule,
    NpUiUtility
  ],
  providers: [NpUiHightLightPipe],
  exports: [NpUiAutoCompleteComponent]
})
export class NpUiAutoCompleteModule { }
