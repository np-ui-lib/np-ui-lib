import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';
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

  @Input() styleClass: string;

  get messageService(): NpUiNotificationService {
    return this.npUiNotificationService;
  }

  _close(msg: NpUiNotification) {
    this.npUiNotificationService.close(msg);
  }

  _closeAll() {
    this.npUiNotificationService.closeAll();
  }

}
