import {
  Component,
  Input,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  TemplateRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ContentChild,
  OnDestroy,
} from "@angular/core";
import { TemplatePortal } from "@angular/cdk/portal";
import { NpTabContent } from "./np-tab-content.directive";

@Component({
  selector: "np-tab",
  template: "<ng-template><ng-content></ng-content></ng-template>",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class NpTabComponent implements OnInit, OnDestroy {
  private static controlCount = 1;

  @Input() title: string | TemplateRef<any>;
  @Input() iconCss: string;
  @Input() active: boolean = false;
  @Input() disabled: boolean = false;
  @Input() inputId: string = `np-tab_${NpTabComponent.controlCount++}`;

  isLoadFirstTime: boolean = true;
  titleIsTemplate: boolean;

  @ContentChild(NpTabContent, { read: TemplateRef, static: true })
  _explicitContent: TemplateRef<any>;
  @ViewChild(TemplateRef, { static: true }) _implicitContent: TemplateRef<any>;
  private _contentPortal: TemplatePortal | null = null;
  get content(): TemplatePortal | null {
    return this._contentPortal;
  }

  constructor(private _viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    if (this.title instanceof TemplateRef) {
      this.titleIsTemplate = true;
    }
    this._contentPortal = new TemplatePortal(
      this._explicitContent || this._implicitContent,
      this._viewContainerRef
    );
  }

  ngOnDestroy(): void {
    if (this._contentPortal && this._contentPortal.isAttached) {
      this._contentPortal.detach();
    }
  }

  _isActive(): boolean {
    return this.active;
  }
}
