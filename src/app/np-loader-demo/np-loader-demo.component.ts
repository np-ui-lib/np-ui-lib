import { Component, OnInit, ViewChild } from '@angular/core';
import { NpTabsComponent, NpModalComponent } from 'np-ui-lib';

@Component({
  selector: 'app-np-loader-demo',
  templateUrl: './np-loader-demo.component.html',
  styleUrls: ['./np-loader-demo.component.css']
})
export class NpLoaderDemoComponent implements OnInit {

  loader1: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
