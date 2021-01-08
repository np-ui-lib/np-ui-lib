import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'np-progress',
  templateUrl: './np-progress.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NpProgressComponent {

  private static controlCount = 1;

  @Input() value: number;
  @Input() styleClass: string;
  @Input() indeterminate: boolean;
  @Input() striped: boolean;
  @Input() animated: boolean;
  @Input() showLabel = true;
  @Input() height: number;
  @Input() inputId = `np-progress_${NpProgressComponent.controlCount++}`;

  getTextValue() {
    return `${this.value}%`;
  }

}
