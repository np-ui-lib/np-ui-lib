import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-np-time-picker-demo',
  templateUrl: './np-time-picker-demo.component.html',
  styleUrls: ['./np-time-picker-demo.component.css']
})
export class NpTimePickerDemoComponent implements OnInit {

  timePicker1 = '10:0:0 AM';
  timePicker2 = '10:0:0';
  timePicker3 = '10:0:0 AM';
  timePicker4: string;
  timePicker5: string;
  timePicker5Disable = false;
  timePicker5Required = false;
  timePicker6: string;
  timePicker71: string;
  timePicker72: string;
  timePicker8: string;
  timePicker9: string;
  timePicker10: string;

  importText = 'import { NpTimePickerModule } from \'np-ui-lib\';';
  htmlText = '<np-time-picker [(ngModel)]="value"></np-time-picker>';

  constructor() { }

  ngOnInit(): void {
  }

  onChange(value: string) {
    alert('time changed ' + value);
  }

}
