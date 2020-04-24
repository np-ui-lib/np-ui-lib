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
  @Input() showLable: boolean = true;

  getTooltipText() {
    return `${this.value}%`;
  }

}
