import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpUiAutoCompleteComponent } from './np-ui-auto-complete.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [NpUiAutoCompleteComponent],
    imports: [
      CommonModule,
      FormsModule
    ],
    exports: [NpUiAutoCompleteComponent]
})
export class NpUiAutoCompleteModule { }
