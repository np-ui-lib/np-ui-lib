import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'np-ui-modal-content',
    template: '<ng-content></ng-content>',
    styleUrls: ['./np-ui-modal.component.css']
})
export class NpUiModalContentComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
