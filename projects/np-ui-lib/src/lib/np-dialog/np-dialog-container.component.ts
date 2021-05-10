import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  TemplateRef,
} from "@angular/core";
import { NpTranslationsService } from "../np-translations/np-translations.service";
import { NpDialogRef } from "./np-dialog-ref";

@Component({
  selector: "np-dialog",
  templateUrl: "./np-dialog-container.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class NpDialogContainerComponent implements OnInit {
  private static controlCount = 1;

  title: string;
  value: string;
  type: string;
  message: string | TemplateRef<any>;
  contentType: "template" | "string";
  context: any;
  styleClass: string;
  inputId = `np-dialog_${NpDialogContainerComponent.controlCount++}`;

  constructor(
    public dialogRef: NpDialogRef,
    private translationService: NpTranslationsService
  ) {}

  ngOnInit(): void {
    this.type = this.dialogRef.config.type
      ? this.dialogRef.config.type
      : "alert";
    this.title = this.translationService.translate(
      this.type === "alert"
        ? "Alert"
        : this.type === "confirm"
        ? "Confirm"
        : "Prompt"
    );
    this.message = this.dialogRef.content;
    if (typeof this.message === "string") {
      this.contentType = "string";
    } else {
      this.contentType = "template";
      this.context = {
        data: this.dialogRef.data,
      };
    }
    if (this.dialogRef.config.inputId) {
      this.inputId = this.dialogRef.config.inputId;
    }
    if (this.dialogRef.config.styleClass) {
      this.styleClass = this.dialogRef.config.styleClass;
    }
  }

  onOk() {
    if (this.type === "prompt") {
      this.dialogRef.close(this.value ? this.value : "");
    } else if (this.type === "confirm") {
      this.dialogRef.close(true);
    } else {
      this.dialogRef.close(undefined);
    }
  }

  onCancel() {
    if (this.type === "prompt") {
      this.dialogRef.close(null);
    } else if (this.type === "confirm") {
      this.dialogRef.close(false);
    } else {
      this.dialogRef.close(undefined);
    }
  }
}
