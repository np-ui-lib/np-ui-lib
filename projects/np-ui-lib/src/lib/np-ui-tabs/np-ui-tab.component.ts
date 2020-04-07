import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'np-ui-tab',
    templateUrl: './np-ui-tab.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.Default
})
export class NpUiTabComponent {
    @Input() title: string;
    @Input() active: boolean;
    @Input() disabled: boolean;
    @Input() height: number;
}
