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
  methodText = `var msg = new NpNotification({ message: "This is success", type: "success" });
    <br>this.notificationService.show(msg);`;

  constructor(private notificationService: NpNotificationService) { }

  ngOnInit(): void {
  }

  success() {
    const msg = new NpNotification({ message: 'This is success', type: 'success' });
    this.notificationService.show(msg);
  }

  error() {
    const msg = new NpNotification({ message: 'This is error', type: 'error' });
    this.notificationService.show(msg);
  }

  warning() {
    const msg = new NpNotification({ message: 'This is warning', type: 'warning' });
    this.notificationService.show(msg);
  }

  info() {
    const msg = new NpNotification({ message: 'This is info', type: 'info', autoCloseTimeout: 5000 });
    this.notificationService.show(msg);
  }

  closeAll() {
    this.notificationService.closeAll();
  }

  successWithHeader() {
    const msg = new NpNotification({ message: 'This is success', type: 'success', header: 'Success' });
    this.notificationService.show(msg);
  }

  errorWithHTML() {
    const msg = new NpNotification({
      message: '<b>This is</b> <i>error</i> message <b>HTML<b> text.',
      type: 'error', header: '<i>Error</i>'
    });
    this.notificationService.show(msg);
  }

}
