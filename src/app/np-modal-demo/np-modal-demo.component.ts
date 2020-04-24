import { Component, OnInit, ViewChild } from '@angular/core';
import { NpModalComponent } from 'np-ui-lib';

@Component({
  selector: 'app-np-modal-demo',
  templateUrl: './np-modal-demo.component.html',
  styleUrls: ['./np-modal-demo.component.css']
})
export class NpModalDemoComponent implements OnInit {

  firstName: string;
  lastName: string;
  birthDate: Date;
  birthTime: string;
  isActive: boolean = true;

  @ViewChild("modalDemo", { static: true }) modalDemo: NpModalComponent;
  @ViewChild("modalDemo2", { static: true }) modalDemo2: NpModalComponent;

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
