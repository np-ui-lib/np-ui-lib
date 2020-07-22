import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-np-alert-demo',
  templateUrl: './np-alert-demo.component.html',
  styleUrls: ['./np-alert-demo.component.css']
})
export class NpAlertDemoComponent implements OnInit {

  importText = 'import { NpAlertModule } from \'np-ui-lib\';';
  htmlText = `<np-alert type="Success" showCloseButton="true">
                Hi this is success alert message.
              </np-alert>`;

  constructor() { }

  ngOnInit(): void {
  }

}
