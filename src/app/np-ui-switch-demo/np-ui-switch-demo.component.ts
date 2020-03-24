import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-np-ui-switch-demo',
  templateUrl: './np-ui-switch-demo.component.html',
  styleUrls: ['./np-ui-switch-demo.component.css']
})
export class NpUiSwitchDemoComponent implements OnInit {

  switch1: boolean = true;

  switch2: boolean = false;

  switch3: boolean = true;

  switch41: boolean = true;

  switch42: boolean = true;

  switch5: boolean = true;

  switch6: boolean = true;

  switch7: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeSwitch5(value) {
    alert(value);
  }
}
