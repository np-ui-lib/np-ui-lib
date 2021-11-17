import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from "@angular/core";
import { NpBreadcrumbItem } from "./np-breadcrumb.model";

@Component({
  selector: "np-breadcrumb",
  templateUrl: "./np-breadcrumb.component.html",
  styleUrls: ["./np-breadcrumb.component.scss"],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class NpBreadcrumbComponent {
  private static controlCount = 1;

  @Input() items: NpBreadcrumbItem[];
  @Input() showIcon: boolean = true;
  @Input() iconCss: string;
  @Input() styleClass: string;
  @Input() inputId: string = `np-breadcrumb_${NpBreadcrumbComponent.controlCount++}`;

  @Output() onClick: EventEmitter<any> = new EventEmitter();

  _onClick(item: NpBreadcrumbItem): void {
    if (this.onClick && !item.disabled) {
      this.onClick.emit(item);
    }
  }
}
