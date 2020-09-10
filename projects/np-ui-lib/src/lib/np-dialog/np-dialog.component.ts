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
  value: string;
  type: string;
  message: string;

  constructor(private ref: NpModalRef) { }

  ngOnInit(): void {
    this.type = this.ref.data ? this.ref.data.type : 'alert';
    this.message = this.ref.data ? this.ref.data.message : '';
  }

  onOk() {
    if (this.type === 'prompt') {
      this.ref.close(this.value);
    } else if (this.type === 'confirm') {
      this.ref.close(true);
    } else {
      this.ref.close();
    }
  }

  onCancel() {
    this.ref.close();
  }
}
