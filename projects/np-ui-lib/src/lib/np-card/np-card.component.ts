import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'np-card',
  templateUrl: './np-card.component.html',
  styleUrls: ['./np-card.component.css']
})
export class NpCardComponent implements OnInit {

  @Input() styleClass: string;
  @Input() width: number;
  static controlCount = 1;
  @Input() inputId: string = `np-card_${NpCardComponent.controlCount++}`;

  constructor() { }

  ngOnInit(): void {
  }

}
