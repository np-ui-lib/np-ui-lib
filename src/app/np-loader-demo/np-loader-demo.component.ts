import { Component, OnInit, ViewChild } from '@angular/core';
import { NpTabsComponent, NpModalComponent } from 'np-ui-lib';

@Component({
  selector: 'app-np-loader-demo',
  templateUrl: './np-loader-demo.component.html',
  styleUrls: ['./np-loader-demo.component.css']
})
export class NpLoaderDemoComponent implements OnInit {

  constructor() { }

  loader1 = false;
  loader2 = false;
  loader3 = false;
  loader4 = false;

  importText = 'import { NpLoaderModule } from \'np-ui-lib\';';
  htmlText = '<span [np-loader]="true"></span>';

  ngOnInit(): void {
  }

}
