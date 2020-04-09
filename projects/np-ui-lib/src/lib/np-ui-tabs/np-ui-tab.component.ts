import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy, TemplateRef, OnInit } from '@angular/core';

@Component({
    selector: 'np-ui-tab',
    templateUrl: './np-ui-tab.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.Default
})
export class NpUiTabComponent implements OnInit {

    @Input() title: string | TemplateRef<any>;
    @Input() active: boolean;
    @Input() disabled: boolean;
    @Input() height: number;

    _titleIsTemplate: boolean;

    ngOnInit(): void {
        if (this.title instanceof TemplateRef) {
            this._titleIsTemplate = true;
        }
    }
}
