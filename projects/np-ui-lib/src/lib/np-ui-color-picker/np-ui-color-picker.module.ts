import { NgModule } from '@angular/core';
import { NpUiColorPickerComponent } from './np-ui-color-picker.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [NpUiColorPickerComponent],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [NpUiColorPickerComponent]
})
export class NpUiColorPickerModule { }