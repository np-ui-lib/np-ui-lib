import { Injectable } from "@angular/core";
import { NpUiNotification } from './np-ui-notification.model';

@Injectable({
    providedIn: 'root'
})
export class NpUiNotificationService {

    messages: NpUiNotification[] = [];

    show(msg: NpUiNotification) {
        this.messages.push(msg);
        setTimeout(() => {
            this.close(msg);
        }, msg.autoCloseTimeout ? msg.autoCloseTimeout : 10000);
    }

    close(msg: NpUiNotification) {
        var idx = this.messages.indexOf(msg);
        if (idx > -1) {
            this.messages.splice(idx, 1);
        }
    }

    closeAll() {
        this.messages = [];
    }
}