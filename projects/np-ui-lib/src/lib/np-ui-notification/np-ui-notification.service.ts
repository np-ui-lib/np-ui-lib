import { Injectable } from "@angular/core";
import { NpUiNotification } from './np-ui-notification.model';

@Injectable({
    providedIn: 'root'
})
export class NpUiNotificationService {

    messages: NpUiNotification[] = [];

    show(msg: NpUiNotification) {
        this.messages.push(msg);
        this.autoRemoveMessage(msg, msg.timeout);
    }

    private autoRemoveMessage(msg: NpUiNotification, timeout: number = 10000) {
        setTimeout(() => {
            this.removeMessage(msg);
        }, timeout);
    }

    removeMessage(msg: NpUiNotification) {
        var idx = this.messages.indexOf(msg);
        if (idx > -1) {
            this.messages.splice(idx, 1);
        }
    }

    removeAll() {
        this.messages = [];
    }
}