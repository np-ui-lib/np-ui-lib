import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-np-file-upload-demo',
  templateUrl: './np-file-upload-demo.component.html',
  styleUrls: ['./np-file-upload-demo.component.css']
})
export class NpFileUploadDemoComponent implements OnInit {

  importText = 'import { NpFileUploadModule } from \'np-ui-lib\';';
  htmlText = `<np-file-upload [(ngModel)]="uploadedFiles"></np-file-upload>`;

  fileUpload1: any;
  fileUpload2: any;
  fileUpload3: any;
  fileUpload4: any;
  fileUpload5: any;
  fileUpload6: any;
  fileUpload7: any;
  fileUpload8: any;
  fileUpload9: any;
  fileUpload10: any;
  fileUpload11: any;

  constructor() { }

  ngOnInit(): void {
  }

  onChange($event) {
    alert('change event occurs.');
  }

  SetNullValue() {
    this.fileUpload1 = null;
  }
}
