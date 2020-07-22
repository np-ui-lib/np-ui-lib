import { Component, OnInit } from '@angular/core';
import { NpNotificationService, NpNotification } from 'np-ui-lib';

@Component({
  selector: 'app-np-notification-demo',
  templateUrl: './np-notification-demo.component.html',
  styleUrls: ['./np-notification-demo.component.css']
})
export class NpNotificationDemoComponent implements OnInit {

  importText = 'import { NpNotificationModule } from \'np-ui-lib\';';
  htmlText = `<np-notification></np-notification>`;
  importServiceAndClass = `import { NpNotificationService, NpNotification } from 'np-ui-lib'; `;
  createServiceObject = `constructor(private notificationService: NpNotificationService) { }`;
  methodText = `var msg = new NpNotification({ message: "This is success", type: "Success" });
    <br>this.notificationService.show(msg);`;

  constructor(private notificationService: NpNotificationService) { }

  ngOnInit(): void {
  }

  success() {
    var msg = new NpNotification({ message: 'This is success', type: 'Success' });
    this.notificationService.show(msg);
  }

  error() {
    var msg = new NpNotification({ message: 'This is error', type: 'Error' });
    this.notificationService.show(msg);
  }

  warning() {
    var msg = new NpNotification({ message: 'This is warning', type: 'Warning' });
    this.notificationService.show(msg);
  }

  info() {
    var msg = new NpNotification({ message: 'This is info', type: 'Info', autoCloseTimeout: 5000 });
    this.notificationService.show(msg);
  }

  removeAll() {
    this.notificationService.closeAll();
  }

  successWithHeader() {
    var msg = new NpNotification({ message: 'This is success', type: 'Success', header: 'Success' });
    this.notificationService.show(msg);
  }

  errorWithHTML() {
    var msg = new NpNotification({
      message: '<b>This is</b> <i>error</i> message <b>HTML<b> text.',
      type: 'Error', header: '<i>Error</i>'
    });
    this.notificationService.show(msg);
  }

}
