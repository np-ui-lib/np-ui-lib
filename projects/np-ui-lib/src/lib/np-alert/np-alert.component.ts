import {
  Component,
  OnInit,
  Input,
  ElementRef,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from "@angular/core";

@Component({
  selector: "np-alert",
  templateUrl: "./np-alert.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class NpAlertComponent implements OnInit {
  private static controlCount = 1;

  /* type should be 'success' | 'danger' | 'info' | 'warning' */
  @Input() type: 'success' | 'danger' | 'info' | 'warning';
  @Input() styleClass: string;
  @Input() showCloseButton: boolean = false;
  @Input() autoClose: boolean = false;
  @Input() autoCloseTimeout: number = 10000;
  @Input() inputId: string = `np-alert_${NpAlertComponent.controlCount++}`;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    if (this.autoClose) {
      setTimeout(
        () => {
          this.close();
        },
        this.autoCloseTimeout
      );
    }
  }

  close(): void {
    this.el.nativeElement.remove();
  }
}
