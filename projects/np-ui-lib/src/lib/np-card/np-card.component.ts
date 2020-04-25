import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'np-card',
  templateUrl: './np-card.component.html',
  styleUrls: ['./np-card.component.css']
})
export class NpCardComponent implements OnInit {

  @Input() styleClass: string;
  @Input() width: number;

  constructor() { }

  ngOnInit(): void {
  }

}
