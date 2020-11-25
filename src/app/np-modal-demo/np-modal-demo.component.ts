import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NpModalService, NpModalConfig } from 'np-ui-lib';
import { NpModalDemoChildComponent } from './np-modal-demo-child/np-modal-demo-child.component';

@Component({
  selector: 'app-np-modal-demo',
  templateUrl: './np-modal-demo.component.html'
})
export class NpModalDemoComponent implements OnInit {

  importText = 'import { NpModalModule } from \'np-ui-lib\';';
  serviceInjectText = `constructor(private modalService: NpModalService) { }`;
  modalOpenText = `this.modalService.open('Modal text', config, null);`;
  configText = `const config = new NpModalConfig({ height: 400, width: 400, hasBackDrop: false });`;
  stringModalText = `this.modalService.open('Basic modal with string content', null, null);`;
  templateModalText = `@ViewChild('modalTemplate', { static: true }) modalTemplate: TemplateRef<any>;
this.modalService.open(this.modalTemplate, null, null);`;
  componentModalText = `<span class="np-text-success">// Where NpModalDemoChildComponent is another component</span>
this.modalService.open(NpModalDemoChildComponent, null, null);`;
  overlayRefText = `constructor(private ref: NpModalRef) { }`;
  subscribeText = `let reference = this.modalService.open(NpModalDemoChildComponent, null, null);
reference.onClose.subscribe((data) => { <span class="np-text-success">... // do something on modal close</span> });
reference.close() <span class="np-text-success">// use this method to close modal<span>`;
  closeText = `this.ref.close() <span class="np-text-success">// use this method to close modal</span>`;

  @ViewChild('modal2', { static: true }) modal2: TemplateRef<any>;

  constructor(private modalService: NpModalService) { }

  ngOnInit(): void {
  }

  openModal1() {
    this.modalService.open(`A paragraph is a series of sentences that are organized and coherent,
     and are all related to a single topic.`, new NpModalConfig({ header: 'Modal Header' }), null);
  }

  openModal2() {
    const config = new NpModalConfig({
      height: 400,
      width: 400,
      hasBackDrop: false,
      header: 'What is paragraph?',
      inputId: 'templateModal',
      styleClass: 'myClass'
    });
    this.modalService.open(this.modal2, config, null);
  }

  openModal3() {
    const modalRef = this.modalService.open(NpModalDemoChildComponent, new NpModalConfig({ header: 'Personal Details' }), null);
    modalRef.onClose.subscribe(this.onCloseModal3);
  }

  onCloseModal3() {
    alert('Modal closed');
  }

}
