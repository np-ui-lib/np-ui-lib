import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'np-ui-modal-header',
    template: '<ng-content></ng-content>',
    styleUrls: ['./np-ui-modal.component.css']
})
export class NpUiModalHeaderComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
