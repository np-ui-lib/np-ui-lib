import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'np-card-image',
    template: '<div class="np-cd-image"><ng-content></ng-content></div>',
    styleUrls: ['./np-card.component.css'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.Default
})
export class NpCardImageComponent {

}
