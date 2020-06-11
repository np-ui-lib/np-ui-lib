import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpTagsComponent } from './np-tags.component';
import { NpHightLightPipe } from '../np-utility/np-highlight.pipe';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { NpUtilityModule } from '../np-utility/np-utility.module';
import { NpTreeViewModule } from '../np-tree-view/np-tree-view.module';

@NgModule({
  declarations: [NpTagsComponent],
  imports: [
    CommonModule,
    FormsModule,
    OverlayModule,
    PortalModule,
    NpUtilityModule,
    NpTreeViewModule
  ],
  providers: [NpHightLightPipe],
  exports: [NpTagsComponent]
})
export class NpTagsModule { }
