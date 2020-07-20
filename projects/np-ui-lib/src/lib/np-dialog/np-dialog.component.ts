import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { NpModalComponent } from '../np-modal/np-modal.component';

@Component({
  selector: 'np-dialog',
  templateUrl: './np-dialog.component.html',
  styleUrls: ['./np-dialog.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NpDialogComponent implements OnInit {
  static controlCount = 1;

  @Input() message: string;
  /* type should be alert, prompt, or confirm */
  @Input() type: string;
  @Output() valueChange: EventEmitter<any> = new EventEmitter();
  @Input() inputId = `np-dialog_${NpDialogComponent.controlCount++}`;
  @Input() styleClass: string;
  @Output() onOkClick: EventEmitter<any> = new EventEmitter();
  @Output() onCancelClick: EventEmitter<any> = new EventEmitter();

  value: string;

  @ViewChild('modal', { static: true }) modal: NpModalComponent;

  constructor() { }

  ngOnInit(): void {
    this.modal.inputId = this.inputId;
  }

  onOk() {
    this.close();
    if (this.type === 'prompt') {
      this.onOkClick.emit(this.value);
    } else {
      this.onOkClick.emit();
    }
  }

  onCancel() {
    this.close();
    this.onCancelClick.emit();
  }

  open() {
    this.modal.open();
  }

  close() {
    this.modal.close();
  }
}
