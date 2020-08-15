import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy, TemplateRef, OnInit } from '@angular/core';

@Component({
    selector: 'np-tab',
    template: '<div *ngIf="_isActive()" [attr.id]="inputId"><ng-content></ng-content></div>',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.Default
})
export class NpTabComponent implements OnInit {
    static controlCount = 1;

    @Input() title: string | TemplateRef<any>;
    @Input() active = false;
    @Input() disabled = false;
    @Input() inputId = `np-tab_${NpTabComponent.controlCount++}`;

    isLoadFirstTime = true;
    titleIsTemplate: boolean;

    ngOnInit(): void {
        if (this.title instanceof TemplateRef) {
            this.titleIsTemplate = true;
        }
    }

    _isActive() {
        return this.active;
    }
}
