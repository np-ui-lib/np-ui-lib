import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NpUiDataGridComponent } from './np-ui-data-grid.component';
import { NpFilterTypesPipe } from './pipes/np-ui-filter-types.pipe';
import { NpSearchColumnsPipe } from './pipes/np-ui-search-columns.pipe';
import { NpFileService } from './services/np-ui-file.service';
import { NpFilterService } from './services/np-ui-filter.service';
import { NpODataService } from './services/np-ui-odata.service';
import { NpPagerService } from './services/np-ui-pager.service';
import { NpUtilityService } from './services/np-ui-utility.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NpUiDataGridComponent,
    NpFilterTypesPipe,
    NpSearchColumnsPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    DragDropModule
  ],
  exports: [
    NpUiDataGridComponent
  ],
  providers: [
    NpPagerService,
    NpFilterService,
    NpUtilityService,
    NpODataService,
    NpFileService
  ]
})
export class NpUiDataGridModule { }
