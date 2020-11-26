import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    selector: 'np-checkbox-group',
    templateUrl: './np-checkbox-group.component.html',
    styleUrls: ['./np-checkbox.component.css'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.Default
})
export class NpCheckboxGroupComponent {
    // Orientation can be 'horizontal' or 'vertical'
    @Input() orientation = 'horizontal';
}