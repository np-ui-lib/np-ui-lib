import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-np-switch-demo',
  templateUrl: './np-switch-demo.component.html',
  styleUrls: ['./np-switch-demo.component.css']
})
export class NpSwitchDemoComponent implements OnInit {

  switch1 = true;
  switch2 = false;
  switch3 = true;
  switch4: boolean;
  switch5 = true;
  switch6 = true;
  switch7 = true;
  switch8 = true;

  importText = 'import { NpSwitchModule } from \'np-ui-lib\';';
  htmlText = '<np-switch [(ngModel)]="switch1"></np-switch>';

  constructor() { }

  ngOnInit(): void {
  }

  onChangeSwitch8(value) {
    alert(value);
  }
}
