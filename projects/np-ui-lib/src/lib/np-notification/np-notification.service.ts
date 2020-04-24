import { Injectable } from "@angular/core";
import { NpNotification } from './np-notification.model';

@Injectable({
    providedIn: 'root'
})
export class NpNotificationService {

    messages: NpNotification[] = [];

    show(msg: NpNotification) {
        this.messages.push(msg);
        setTimeout(() => {
            this.close(msg);
        }, msg.autoCloseTimeout ? msg.autoCloseTimeout : 10000);
    }

    close(msg: NpNotification) {
        var idx = this.messages.indexOf(msg);
        if (idx > -1) {
            this.messages.splice(idx, 1);
        }
    }

    closeAll() {
        this.messages = [];
    }
}