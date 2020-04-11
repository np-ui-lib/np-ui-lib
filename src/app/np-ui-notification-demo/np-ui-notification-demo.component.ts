import { Component, OnInit } from '@angular/core';
import { NpUiNotificationService, NpUiNotification } from 'projects/np-ui-lib/src/public-api';

@Component({
  selector: 'app-np-ui-notification-demo',
  templateUrl: './np-ui-notification-demo.component.html',
  styleUrls: ['./np-ui-notification-demo.component.css']
})
export class NpUiNotificationDemoComponent implements OnInit {

  constructor(private notificationService: NpUiNotificationService) { }

  ngOnInit(): void {
  }

  success() {
    var msg = new NpUiNotification({ message: "This is success", type: "Success" });
    this.notificationService.show(msg);
  }

  error() {
    var msg = new NpUiNotification({ message: "This is error", type: "Error" });
    this.notificationService.show(msg);
  }

  warning() {
    var msg = new NpUiNotification({ message: "This is warning", type: "Warning" });
    this.notificationService.show(msg);
  }

  info() {
    var msg = new NpUiNotification({ message: "This is info", type: "Info", autoCloseTimeout: 5000 });
    this.notificationService.show(msg);
  }

  removeAll() {
    this.notificationService.closeAll();
  }

  successWithHeader() {
    var msg = new NpUiNotification({ message: "This is success", type: "Success", header: "Success" });
    this.notificationService.show(msg);
  }

  errorWithHTML() {
    var msg = new NpUiNotification({ message: "<b>This is</b> <i>error</i> message <b>HTML<b> text.", type: "Error", header: "<i>Error</i>" });
    this.notificationService.show(msg);
  }

}
