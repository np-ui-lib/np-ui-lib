import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'np-ui-modal-header',
    template: '<ng-content></ng-content>',
    styleUrls: ['./np-ui-modal.component.css'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.Default
})
export class NpUiModalHeaderComponent {

}
