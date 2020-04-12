import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'np-ui-modal-footer',
    template: '<ng-content></ng-content>',
    styleUrls: ['./np-ui-modal.component.css']
})
export class NpUiModalFooterComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
