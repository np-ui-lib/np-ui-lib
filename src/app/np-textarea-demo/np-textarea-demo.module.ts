import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpTextareaDemoRoutingModule } from './np-textarea-demo-routing.module';
import { NpTextareaDemoComponent } from './np-textarea-demo.component';
import { NpCardModule, NpTabsModule, NpTextareaModule } from 'np-ui-lib';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NpTextareaDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    NpTextareaDemoRoutingModule,
    NpTextareaModule,
    NpCardModule,
    NpTabsModule
  ]
})
export class NpTextareaDemoModule { }
