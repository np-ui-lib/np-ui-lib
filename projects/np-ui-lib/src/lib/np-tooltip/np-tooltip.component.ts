import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy, TemplateRef, OnInit } from '@angular/core';

@Component({
  templateUrl: './np-tooltip.component.html',
  styleUrls: ['./np-tooltip.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NpTooltipComponent implements OnInit {
  _isTemplate: boolean;
  @Input() tooltip: string | TemplateRef<any>;
  @Input() styleClass: string;
  static controlCount = 1;
  @Input() inputId: string = `np-tooltip_${NpTooltipComponent.controlCount++}`;

  ngOnInit(): void {
    if (this.tooltip instanceof TemplateRef) {
      this._isTemplate = true;
    }
  }
}
