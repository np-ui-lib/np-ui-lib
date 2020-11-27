import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpRadioButtonDemoRoutingModule } from './np-radio-button-demo-routing.module';
import { NpRadioButtonDemoComponent } from './np-radio-button-demo.component';
import { FormsModule } from '@angular/forms';
import { NpCardModule, NpRadioButtonModule, NpTabsModule } from 'np-ui-lib';

@NgModule({
  declarations: [NpRadioButtonDemoComponent],
  imports: [
    CommonModule,
    NpRadioButtonDemoRoutingModule,
    FormsModule,
    NpRadioButtonModule,
    NpTabsModule,
    NpCardModule
  ]
})
export class NpRadioButtonDemoModule { }
