import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NpBreadcrumbItem } from './np-breadcrumb.model';

@Component({
  selector: 'np-breadcrumb',
  templateUrl: './np-breadcrumb.component.html',
  styleUrls: ['./np-breadcrumb.component.css']
})
export class NpBreadcrumbComponent implements OnInit {
  static controlCount = 1;

  @Input() items: NpBreadcrumbItem[];
  @Input() showIcon = true;
  @Input() iconCss: string;
  @Input() styleClass: string;
  @Input() inputId = `np-breadcrumb_${NpBreadcrumbComponent.controlCount++}`;

  @Output() onClick: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
  }

  _onClick(item: NpBreadcrumbItem) {
    if (this.onClick && !item.disabled) {
      this.onClick.emit(item);
    }
  }

}
