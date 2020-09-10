import { Component, OnInit, TemplateRef, Type, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { NpModalRef } from './np-modal-ref';

@Component({
    selector: 'np-modal',
    templateUrl: './np-modal-container.component.html',
    styleUrls: ['./np-modal-container.component.css'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.Default
})
export class NpModalContainerComponent implements OnInit {
    static controlCount = 1;

    contentType: 'template' | 'string' | 'component';
    content: string | TemplateRef<any> | Type<any>;
    context: any;
    showCloseButton: boolean;
    header: string;

    constructor(private modalRef: NpModalRef) { }

    ngOnInit() {
        this.content = this.modalRef.content;
        if (typeof this.content === 'string') {
            this.contentType = 'string';
        }
        else if (this.content instanceof TemplateRef) {
            this.contentType = 'template';
            this.context = {
                close: this.modalRef.close.bind(this.modalRef)
            };
        }
        else {
            this.contentType = 'component';
        }
        this.header = this.modalRef.config.header;
        this.showCloseButton = this.modalRef.config.showCloseButton;
    }

    close() {
        this.modalRef.close(null);
    }
}
