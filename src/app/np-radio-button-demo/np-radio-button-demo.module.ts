import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpRadioButtonDemoRoutingModule } from './np-radio-button-demo-routing.module';
import { NpRadioButtonDemoComponent } from './np-radio-button-demo.component';
import { FormsModule } from '@angular/forms';
import { NpRadioButtonModule } from 'np-ui-lib';

@NgModule({
  declarations: [NpRadioButtonDemoComponent],
  imports: [
    CommonModule,
    NpRadioButtonDemoRoutingModule,
    FormsModule,
    NpRadioButtonModule
  ]
})
export class NpRadioButtonDemoModule { }
