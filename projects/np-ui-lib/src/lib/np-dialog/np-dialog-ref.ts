import { Subject } from "rxjs";
import { OverlayRef } from "@angular/cdk/overlay";
import { TemplateRef } from "@angular/core";
import { NpDialogConfig } from "./np-dialog.config";

export class NpDialogRef {
  onClose = new Subject<any>();

  constructor(
    public overlay: OverlayRef,
    public content: string | TemplateRef<any>,
    public config: NpDialogConfig,
    public data: any
  ) {}

  close(data?: any) {
    this._close(data);
  }

  private _close(data: any) {
    this.overlay.dispose();
    this.onClose.next(data);
    this.onClose.complete();
  }
}
