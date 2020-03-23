import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-np-ui-color-picker-demo',
  templateUrl: './np-ui-color-picker-demo.component.html',
  styleUrls: ['./np-ui-color-picker-demo.component.css']
})
export class NpUiColorPickerDemoComponent implements OnInit {

  color1: string = "#5fe64b";
  color2: string = "#5fe64b";
  color3: string;
  color4: string = "#5fe64b";
  color4Required = false;
  color4Disabled = false;
  color5: string;
  existingColors5 = ['#FFFFFF', '#C0C0C0', '#808080', '#000000'];
  color6: string;
  color7: string;
  color8: string;
  color9: string;
  color10: string;
  
  constructor() { }

  ngOnInit(): void {
  }

  onChangeColor(e) {
    alert("Selected color is " + e);
  }

}
