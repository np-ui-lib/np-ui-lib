import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { NpUiNotificationService } from './np-ui-notification.service';
import { NpUiNotification } from './np-ui-notification.model';

@Component({
  selector: 'np-ui-notification',
  templateUrl: './np-ui-notification.component.html',
  styleUrls: ['./np-ui-notification.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NpUiNotificationComponent {

  constructor(private npUiNotificationService: NpUiNotificationService) { }

  get messageService(): NpUiNotificationService {
    return this.npUiNotificationService;
  }

  close(msg: NpUiNotification) {
    this.npUiNotificationService.removeMessage(msg);
  }

  closeAll() {
    this.npUiNotificationService.removeAll();
  }

}
