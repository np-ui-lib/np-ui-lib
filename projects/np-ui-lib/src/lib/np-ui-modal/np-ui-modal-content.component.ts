import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'np-ui-modal-content',
    template: '<ng-content></ng-content>',
    styleUrls: ['./np-ui-modal.component.css'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.Default
})
export class NpUiModalContentComponent {

}
