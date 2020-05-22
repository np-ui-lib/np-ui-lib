import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'np-progress',
  templateUrl: './np-progress.component.html',
  styleUrls: ['./np-progress.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NpProgressComponent {

  @Input() value: number;
  @Input() styleClass: string;
  @Input() indeterminate: boolean;
  @Input() striped: boolean;
  @Input() animated: boolean;
  @Input() showLabel: boolean = true;
  @Input() height: number;

  getTooltipText() {
    return `${this.value}%`;
  }

}
