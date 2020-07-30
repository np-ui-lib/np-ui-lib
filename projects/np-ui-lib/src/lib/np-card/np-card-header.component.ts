import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'np-card-header',
    template: '<div class="np-cd-header"><ng-content></ng-content></div>',
    styleUrls: ['./np-card.component.css'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.Default
})
export class NpCardHeaderComponent {

}
