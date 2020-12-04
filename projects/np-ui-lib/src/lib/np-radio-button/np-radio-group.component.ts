import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    selector: 'np-radio-group',
    templateUrl: './np-radio-group.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.Default
})
export class NpRadioGroupComponent {
    static controlCount = 1;

    // Orientation can be 'horizontal' or 'vertical'
    @Input() orientation = 'horizontal';
    @Input() inputId = `np-radio-group_${NpRadioGroupComponent.controlCount++}`;
}
