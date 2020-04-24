import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'np-modal-header',
    template: '<ng-content></ng-content>',
    styleUrls: ['./np-modal.component.css'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.Default
})
export class NpModalHeaderComponent {

}
