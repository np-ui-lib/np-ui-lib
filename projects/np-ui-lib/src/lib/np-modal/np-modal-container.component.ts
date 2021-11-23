import {
  Component,
  OnInit,
  TemplateRef,
  Type,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from "@angular/core";
import { NpModalRef } from "./np-modal-ref";

@Component({
  selector: "np-modal",
  templateUrl: "./np-modal-container.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class NpModalContainerComponent implements OnInit {
  private static controlCount = 1;

  contentType: "template" | "string" | "component";
  content: string | TemplateRef<any> | Type<any>;
  context: any;
  showCloseButton: boolean;
  header: string;
  styleClass: string;
  inputId: string = `np-modal_${NpModalContainerComponent.controlCount++}`;

  constructor(public modalRef: NpModalRef) { }

  ngOnInit(): void {
    this.content = this.modalRef.content;
    if (typeof this.content === "string") {
      this.contentType = "string";
    } else if (this.content instanceof TemplateRef) {
      this.contentType = "template";
      this.context = {
        close: this.modalRef.close.bind(this.modalRef),
        data: this.modalRef.data,
      };
    } else {
      this.contentType = "component";
    }
    this.header = this.modalRef.config.header;
    this.showCloseButton = this.modalRef.config.showCloseButton;
    if (this.modalRef.config.inputId) {
      this.inputId = this.modalRef.config.inputId;
    }
    if (this.modalRef.config.styleClass) {
      this.styleClass = this.modalRef.config.styleClass;
    }
  }

  close(): void {
    this.modalRef.close(null);
  }
}
