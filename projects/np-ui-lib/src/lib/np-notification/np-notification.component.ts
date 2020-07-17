import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';
import { NpNotificationService } from './np-notification.service';
import { NpNotification } from './np-notification.model';

@Component({
  selector: 'np-notification',
  templateUrl: './np-notification.component.html',
  styleUrls: ['./np-notification.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NpNotificationComponent {
  static controlCount = 1;

  @Input() styleClass: string;
  @Input() inputId = `np-notification_${NpNotificationComponent.controlCount++}`;

  constructor(private npNotificationService: NpNotificationService) { }

  get messageService(): NpNotificationService {
    return this.npNotificationService;
  }

  _close(msg: NpNotification) {
    this.npNotificationService.close(msg);
  }

  _closeAll() {
    this.npNotificationService.closeAll();
  }

}
