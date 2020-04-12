import { Component, OnInit, ViewChild } from '@angular/core';
import { NpUiModalComponent } from 'projects/np-ui-lib/src/public-api';

@Component({
  selector: 'app-np-ui-modal-demo',
  templateUrl: './np-ui-modal-demo.component.html',
  styleUrls: ['./np-ui-modal-demo.component.css']
})
export class NpUiModalDemoComponent implements OnInit {

  firstName: string;
  lastName: string;
  birthDate: Date;
  birthTime: string;
  isActive: boolean = true;

  @ViewChild("modalDemo", { static: true }) modalDemo: NpUiModalComponent;
  @ViewChild("modalDemo2", { static: true }) modalDemo2: NpUiModalComponent;

  constructor() { }

  ngOnInit(): void {
  }

  openModal() {
    this.modalDemo.open();
  }

  closeModal() {
    this.modalDemo.close();
  }

  openModal2() {
    this.modalDemo2.open();
  }

  closeModal2() {
    this.modalDemo2.close();
  }

  onOpenModal2() {
    this.modalDemo2.showLoader();
    alert("Modal 2 open");
    setTimeout(() => {
      this.modalDemo2.hideLoader();
    }, 3000);
  }

  onCloseModal2() {
    alert("Modal 2 close");
  }

}
