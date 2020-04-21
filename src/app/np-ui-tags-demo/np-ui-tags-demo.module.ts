import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpUiTagsDemoRoutingModule } from './np-ui-tags-demo-routing.module';
import { NpUiTagsDemoComponent } from './np-ui-tags-demo.component';
import { NpUiTagsModule } from 'np-ui-lib';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [NpUiTagsDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    NpUiTagsDemoRoutingModule,
    NpUiTagsModule
  ]
})
export class NpUiTagsDemoModule { }
