import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';
import { NpNotificationsService } from './np-notifications.service';
import { NpNotification } from './np-notification.model';

@Component({
  selector: 'np-notifications',
  templateUrl: './np-notifications.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NpNotificationsComponent {

  private static controlCount = 1;

  @Input() styleClass: string;
  @Input() inputId = `np-notifications_${NpNotificationsComponent.controlCount++}`;

  constructor(private npNotificationsService: NpNotificationsService) { }

  get messageService(): NpNotificationsService {
    return this.npNotificationsService;
  }

  _close(msg: NpNotification) {
    this.npNotificationsService.close(msg);
  }

  _closeAll() {
    this.npNotificationsService.closeAll();
  }

}
