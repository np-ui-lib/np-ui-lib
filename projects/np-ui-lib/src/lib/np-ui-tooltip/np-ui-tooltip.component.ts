import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy, TemplateRef } from '@angular/core';

@Component({
  templateUrl: './np-ui-tooltip.component.html',
  styleUrls: ['./np-ui-tooltip.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class NpUiTooltipComponent {

  @Input() tooltipText: string;
  @Input() tooltipTemplate: TemplateRef<any>;

}
