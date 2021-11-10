import { NgModule } from "@angular/core";
import { NpTranslatePipe } from "./np-translate.pipe";

@NgModule({
  declarations: [NpTranslatePipe],
  exports: [NpTranslatePipe],
})
export class NpTranslationsModule {}
