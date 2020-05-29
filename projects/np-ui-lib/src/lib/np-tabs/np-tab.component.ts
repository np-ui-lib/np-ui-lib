import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy, TemplateRef, OnInit } from '@angular/core';

@Component({
    selector: 'np-tab',
    template: '<div *ngIf="active" [attr.id]="inputId"><ng-content></ng-content></div>',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.Default
})
export class NpTabComponent implements OnInit {
    static controlCount = 1;
    @Input() inputId: string = `np-tab_${NpTabComponent.controlCount++}`;
    @Input() title: string | TemplateRef<any>;
    @Input() active: boolean;
    @Input() disabled: boolean;
    @Input() height: number;
    isLoadingFirstTime: boolean = true;

    _titleIsTemplate: boolean;

    ngOnInit(): void {
        if (this.title instanceof TemplateRef) {
            this._titleIsTemplate = true;
        }
    }
}
