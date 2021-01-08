import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { NpModalRef } from '../np-modal/np-modal-ref';
import { NpTranslationsService } from '../np-translations/np-translations.service';

@Component({
  selector: 'np-dialog',
  templateUrl: './np-dialog.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NpDialogComponent implements OnInit {

  private static controlCount = 1;

  title: string;
  value: string;
  type: string;
  message: string;
  styleClass: string;
  inputId = `np-modal_${NpDialogComponent.controlCount++}`;

  constructor(public modalRef: NpModalRef, private translationService: NpTranslationsService) { }

  ngOnInit(): void {
    this.type = this.modalRef.data ? this.modalRef.data.type : 'alert';
    this.title = this.translationService.translate(this.type === 'alert' ? 'Alert' : this.type === 'confirm' ? 'Confirm' : 'Prompt');
    this.message = this.modalRef.data ? this.modalRef.data.message : '';
    if (this.modalRef.config.inputId) {
      this.inputId = this.modalRef.config.inputId;
    }
    if (this.modalRef.config.styleClass) {
      this.styleClass = this.modalRef.config.styleClass;
    }
  }

  onOk() {
    if (this.type === 'prompt') {
      this.modalRef.close(this.value);
    } else if (this.type === 'confirm') {
      this.modalRef.close(true);
    } else {
      this.modalRef.close();
    }
  }

  onCancel() {
    this.modalRef.close();
  }
}
