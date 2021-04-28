import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NpCalendarComponent } from "./np-calendar.component";
import { NpTranslationsModule } from "../np-translations/np-tranlations.module";

@NgModule({
  declarations: [NpCalendarComponent],
  imports: [CommonModule, NpTranslationsModule],
  exports: [NpCalendarComponent],
})
export class NpCalendarModule {}
