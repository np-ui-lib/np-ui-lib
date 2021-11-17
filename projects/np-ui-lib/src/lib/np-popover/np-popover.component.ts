import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  TemplateRef,
} from "@angular/core";

@Component({
  selector: "np-popover",
  templateUrl: "./np-popover.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class NpPopoverComponent implements OnInit {
  private static controlCount = 1;

  @Input() header: string | TemplateRef<any>;
  @Input() body: string | TemplateRef<any>;
  @Input() width: number;
  @Input() styleClass: string;
  @Input() context: any;
  @Input() inputId: string = `np-popover_${NpPopoverComponent.controlCount++}`;

  isHeaderTemplate: boolean;
  isBodyTemplate: boolean;

  ngOnInit(): void {
    if (this.header instanceof TemplateRef) {
      this.isHeaderTemplate = true;
    }
    if (this.body instanceof TemplateRef) {
      this.isBodyTemplate = true;
    }
  }
}
