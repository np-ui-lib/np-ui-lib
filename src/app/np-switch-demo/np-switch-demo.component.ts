import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-np-switch-demo',
  templateUrl: './np-switch-demo.component.html',
  styleUrls: ['./np-switch-demo.component.css']
})
export class NpSwitchDemoComponent implements OnInit {

  switch1: boolean = true;
  switch2: boolean = false;
  switch3: boolean = true;
  switch4: boolean;
  switch5: boolean = true;
  switch6: boolean = true;
  switch7: boolean = true;
  switch8: boolean = true;

  importText = "import { NpSwitchModule } from 'np-ui-lib';"
  htmlText = '<np-switch [(ngModel)]="switch1"></np-switch>';

  constructor() { }

  ngOnInit(): void {
  }

  onChangeSwitch8(value) {
    alert(value);
  }
}
