import { Component, OnInit, ViewChild } from '@angular/core';
import { NpModalComponent } from 'np-ui-lib';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-np-modal-demo',
  templateUrl: './np-modal-demo.component.html',
  styleUrls: ['./np-modal-demo.component.css']
})
export class NpModalDemoComponent implements OnInit {

  importText = 'import { NpModalModule } from \'np-ui-lib\';';
  htmlText = `<np-modal #modalDemo [height]="200" [width]="500">
  <np-modal-header>
      <p>Modal header</p>
  </np-modal-header>
  <div>
      <p>Modal content</p>
  </div>
  <np-modal-footer>
      <p>Modal footer</p>
  </np-modal-footer>
</np-modal>`;

  constructor() { }

  firstName: string;
  lastName: string;
  birthDate: Date;
  birthTime: string;
  isActive = true;
  description: string;

  @ViewChild('modalDemo', { static: true }) modalDemo: NpModalComponent;
  @ViewChild('modalDemo2', { static: true }) modalDemo2: NpModalComponent;

  myForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    birthDate: new FormControl(null),
    birthTime: new FormControl(''),
    isActive: new FormControl(false),
    description: new FormControl(''),
  });

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
    alert('Modal 2 open');
  }

  onCloseModal2() {
    alert('Modal 2 close');
  }

  onSubmit() {
    if (this.myForm.invalid) {
      this.markFormGroupTouched(this.myForm);
    }
    else {
      this.closeModal2();
    }
  }

  reset() {
    this.myForm.reset();
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    (Object as any).values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }

}
