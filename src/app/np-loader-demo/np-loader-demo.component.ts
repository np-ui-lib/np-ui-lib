import { Component, OnInit, ViewChild } from '@angular/core';
import { NpTabsComponent, NpModalComponent } from 'np-ui-lib';

@Component({
  selector: 'app-np-loader-demo',
  templateUrl: './np-loader-demo.component.html',
  styleUrls: ['./np-loader-demo.component.css']
})
export class NpLoaderDemoComponent implements OnInit {

  loader1: boolean = false;
  loader2: boolean = false;
  loader3: boolean = false;
  loader4: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  importText = "import { NpLoaderModule } from 'np-ui-lib';"
  htmlText = '<span [np-loader]="true"></span>';

}
