import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NpBreadCrumbItem } from './np-breadcrumb.model';

@Component({
  selector: 'np-breadcrumb',
  templateUrl: './np-breadcrumb.component.html',
  styleUrls: ['./np-breadcrumb.component.css']
})
export class NpBreadcrumbComponent implements OnInit {
  static controlCount = 1;

  @Input() styleClass: string;
  @Input() items: NpBreadCrumbItem[];
  @Input() showHomeIcon = true;
  @Input() homeIconCss: string;
  @Input() inputId = `np-breadcrumb_${NpBreadcrumbComponent.controlCount++}`;
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
  }

  _onClick(item: NpBreadCrumbItem) {
    if (this.onClick) {
      this.onClick.emit(item);
    }
  }

}
