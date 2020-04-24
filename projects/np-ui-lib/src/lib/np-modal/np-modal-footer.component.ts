import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'np-modal-footer',
    template: '<ng-content></ng-content>',
    styleUrls: ['./np-modal.component.css'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.Default
})
export class NpModalFooterComponent {

}
