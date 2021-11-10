import { DragDropModule } from "@angular/cdk/drag-drop";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { OverlayModule } from "@angular/cdk/overlay";
import { PortalModule } from "@angular/cdk/portal";

import { NpDataGridComponent } from "./np-data-grid.component";
import { NpFilterTypesPipe } from "./pipes/np-filter-types.pipe";
import { NpSearchColumnsPipe } from "./pipes/np-search-columns.pipe";
import { NpFileService } from "./services/np-file.service";
import { NpFilterService } from "./services/np-filter.service";
import { NpODataService } from "./services/np-odata.service";
import { NpGridUtilityService } from "./services/np-grid-utility.service";
import { NpDatePickerModule } from "../np-date-picker/np-date-picker.module";
import { NpDialogModule } from "../np-dialog/np-dialog.module";
import { NpPaginatorModule } from "../np-paginator/np-paginator.module";
import { NpCheckboxModule } from "../np-checkbox/np-checkbox.module";
import { NpTranslationsModule } from "../np-translations/np-translations.module";

@NgModule({
  declarations: [NpDataGridComponent, NpFilterTypesPipe, NpSearchColumnsPipe],
  imports: [
    CommonModule,
    FormsModule,
    DragDropModule,
    OverlayModule,
    PortalModule,
    NpDatePickerModule,
    NpDialogModule,
    NpPaginatorModule,
    NpCheckboxModule,
    NpTranslationsModule,
  ],
  exports: [NpDataGridComponent],
  providers: [
    NpFilterService,
    NpGridUtilityService,
    NpODataService,
    NpFileService,
  ],
})
export class NpDataGridModule {}
