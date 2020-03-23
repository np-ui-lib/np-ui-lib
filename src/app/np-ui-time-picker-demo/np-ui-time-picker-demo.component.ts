import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-np-ui-time-picker-demo',
  templateUrl: './np-ui-time-picker-demo.component.html',
  styleUrls: ['./np-ui-time-picker-demo.component.css']
})
export class NpUiTimePickerDemoComponent implements OnInit {

  timePicker1: string = "10:0:0 AM";
  timePicker2: string = "10:0:0";
  timePicker3: string = "10:0:0 AM";
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
  
  constructor() { }

  ngOnInit(): void {
  }

  onChange(value: string) {
    alert("time changed " + value);
  }

}
