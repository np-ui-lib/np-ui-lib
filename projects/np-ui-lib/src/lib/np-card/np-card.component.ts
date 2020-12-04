import { Component, OnInit, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'np-card',
  templateUrl: './np-card.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NpCardComponent implements OnInit {
  static controlCount = 1;

  @Input() width: number;
  @Input() styleClass: string;
  @Input() inputId = `np-card_${NpCardComponent.controlCount++}`;

  constructor() { }

  ngOnInit(): void {
  }

}
