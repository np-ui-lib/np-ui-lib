import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { NpModalRef } from '../np-modal/np-modal-ref';

@Component({
  selector: 'np-dialog',
  templateUrl: './np-dialog.component.html',
  styleUrls: ['./np-dialog.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NpDialogComponent implements OnInit {
  static controlCount = 1;

  value: string;
  type: string;
  message: string;
  styleClass: string;
  inputId = `np-modal_${NpDialogComponent.controlCount++}`;

  constructor(private modalRef: NpModalRef) { }

  ngOnInit(): void {
    this.type = this.modalRef.data ? this.modalRef.data.type : 'alert';
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
