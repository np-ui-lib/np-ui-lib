import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'np-ui-progress',
  templateUrl: './np-ui-progress.component.html',
  styleUrls: ['./np-ui-progress.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NpUiProgressComponent {

  @Input() value: number;

  @Input() styleClass: string;

  @Input() indeterminate: boolean;

  @Input() striped: boolean;

  @Input() animated: boolean;

  getTooltipText() {
    return this.value + "%";
  }

}
