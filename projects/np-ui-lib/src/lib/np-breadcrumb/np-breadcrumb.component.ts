import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NpBreadCrumbItem } from './np-breadcrumb.model';

@Component({
  selector: 'np-breadcrumb',
  templateUrl: './np-breadcrumb.component.html',
  styleUrls: ['./np-breadcrumb.component.css']
})
export class NpBreadcrumbComponent implements OnInit {

  @Input() styleClass: string;
  @Input() items: NpBreadCrumbItem[];
  @Input() showHomeIcon: boolean = true;
  @Input() homeIconCss: string;
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  static controlCount = 1;
  @Input() inputId: string = `np-breadcrumb_${NpBreadcrumbComponent.controlCount++}`;

  constructor() { }

  ngOnInit(): void {
  }

  _onClick(item: NpBreadCrumbItem) {
    if (this.onClick) {
      this.onClick.emit(item)
    }
  }

}
