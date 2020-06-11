import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HowToAddRoutingModule } from './how-to-add-routing.module';
import { HowToAddComponent } from './how-to-add.component';

@NgModule({
  declarations: [HowToAddComponent],
  imports: [
    CommonModule,
    HowToAddRoutingModule
  ]
})
export class HowToAddModule { }
