import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "np-timeline",
  templateUrl: "./np-timeline.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class NpTimelineComponent implements OnInit {
  private static controlCount = 1;

  @Input() items: any[];
  @Input() itemTemplate: TemplateRef<any>;
  @Input() height: number;
  @Input() styleClass: string;
  @Input() inputId: string = `np-timeline_${NpTimelineComponent.controlCount++}`;

  constructor() {}

  ngOnInit(): void {}

  _trackBy(index: number): number {
    return index;
  }
}
