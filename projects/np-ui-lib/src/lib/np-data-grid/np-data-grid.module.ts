import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NpDataGridComponent } from './np-data-grid.component';
import { NpFilterTypesPipe } from './pipes/np-filter-types.pipe';
import { NpSearchColumnsPipe } from './pipes/np-search-columns.pipe';
import { NpFileService } from './services/np-file.service';
import { NpFilterService } from './services/np-filter.service';
import { NpODataService } from './services/np-odata.service';
import { NpPagerService } from './services/np-pager.service';
import { NpUtilityService } from './services/np-utility.service';
import { CommonModule } from '@angular/common';
import { NpDatePickerModule } from '../np-date-picker/np-date-picker.module';
import { OverlayModule } from "@angular/cdk/overlay";
import { PortalModule } from "@angular/cdk/portal";
import { NpModalModule } from '../np-modal/np-modal.module';

@NgModule({
  declarations: [
    NpDataGridComponent,
    NpFilterTypesPipe,
    NpSearchColumnsPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    DragDropModule,
    OverlayModule,
    PortalModule,
    NpDatePickerModule,
    NpModalModule
  ],
  exports: [
    NpDataGridComponent
  ],
  providers: [
    NpPagerService,
    NpFilterService,
    NpUtilityService,
    NpODataService,
    NpFileService
  ]
})
export class NpDataGridModule { }