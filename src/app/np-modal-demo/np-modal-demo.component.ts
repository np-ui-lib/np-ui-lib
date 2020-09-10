import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NpModalService, NpModalConfig } from 'np-ui-lib';
import { NpModalRef } from 'dist/np-ui-lib/lib/np-modal/np-modal-ref';
import { NpModalDemoChildComponent } from './np-modal-demo-child/np-modal-demo-child.component';

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

  modal2Ref: NpModalRef;
  @ViewChild('modal3', { static: true }) modal3: TemplateRef<any>;
  modal3Ref: NpModalRef;

  constructor(private modalService: NpModalService) { }

  firstName: string;
  lastName: string;
  birthDate: Date;
  birthTime: string;
  isActive = true;
  description: string;

  myForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    birthDate: new FormControl(null, Validators.required),
    birthTime: new FormControl('', Validators.required),
    isActive: new FormControl(false, Validators.required),
    description: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
  }

  openModal1() {
    this.modalService.open('Basic modal with string content', null, null);
  }

  openModal2() {
    const config = new NpModalConfig({ height: 400, width: 400, hasBackDrop: false });
    this.modal2Ref = this.modalService.open(NpModalDemoChildComponent, config, null);
  }

  openModal3() {
    this.myForm.reset();
    this.modal3Ref = this.modalService.open(this.modal3, null, null);
    this.modal3Ref.onClose.subscribe(this.onCloseModal3);
  }

  closeModal3() {
    if (this.modal3Ref) {
      this.modal3Ref.close();
    }
  }

  onCloseModal3() {
    alert('Modal 2 close');
  }

  onSubmit() {
    if (this.myForm.invalid) {
      this.markFormGroupTouched(this.myForm);
    }
    else {
      this.closeModal3();
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
