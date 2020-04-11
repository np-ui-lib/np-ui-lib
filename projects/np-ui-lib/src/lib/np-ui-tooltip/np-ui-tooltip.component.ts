import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy, TemplateRef, OnInit } from '@angular/core';

@Component({
  templateUrl: './np-ui-tooltip.component.html',
  styleUrls: ['./np-ui-tooltip.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class NpUiTooltipComponent implements OnInit {
  _isTemplate: boolean;
  @Input() tooltipText: string | TemplateRef<any>;
  @Input() styleClass: string;
  ngOnInit(): void {
    if (this.tooltipText instanceof TemplateRef) {
      this._isTemplate = true;
    }
  }
}
