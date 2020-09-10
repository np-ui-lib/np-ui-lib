import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { NpModalRef } from 'np-ui-lib';

@Component({
  selector: 'app-np-modal-demo-child',
  templateUrl: './np-modal-demo-child.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class NpModalDemoChildComponent implements OnInit {

  constructor(private ref: NpModalRef) { }

  ngOnInit(): void {
  }

  closeModal2() {
    this.ref.close();
  }

}
