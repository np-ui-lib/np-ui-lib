import { Component, OnInit } from '@angular/core';
import { NpNotificationsService, NpNotification } from 'np-ui-lib';

@Component({
  selector: 'app-np-notifications-demo',
  templateUrl: './np-notifications-demo.component.html'
})
export class NpNotificationsDemoComponent implements OnInit {

  importText = 'import { NpNotificationsModule } from \'np-ui-lib\';';
  htmlText = `<np-notifications></np-notifications>`;
  importServiceAndClass = `import { NpNotificationsService, NpNotification } from 'np-ui-lib'; `;
  createServiceObject = `constructor(private notificationsService: NpNotificationsService) { }`;
  methodText = `var msg = new NpNotification({ type: "success", message: "This is success message content." });
    <br>this.notificationsService.show(msg);`;

  constructor(private notificationsService: NpNotificationsService) { }

  ngOnInit(): void {
  }

  success() {
    const msg = new NpNotification({ type: 'success', message: 'This is success message content.' });
    this.notificationsService.show(msg);
  }

  error() {
    const msg = new NpNotification({ type: 'error', message: 'This is error message content.' });
    this.notificationsService.show(msg);
  }

  warning() {
    const msg = new NpNotification({ type: 'warning', message: 'This is warning message content.' });
    this.notificationsService.show(msg);
  }

  info() {
    const msg = new NpNotification({ type: 'info', message: 'This is info message content.', autoCloseTimeout: 5000 });
    this.notificationsService.show(msg);
  }

  closeAll() {
    this.notificationsService.closeAll();
  }

  successWithHeader() {
    const msg = new NpNotification({
      type: 'success',
      header: 'Success',
      message: 'Data saved successfully.'
    });
    this.notificationsService.show(msg);
  }

  errorWithHTML() {
    const msg = new NpNotification({
      type: 'error',
      header: '<i>Error</i>',
      message: '<i>Error in saving data.<i>'
    });
    this.notificationsService.show(msg);
  }

}
