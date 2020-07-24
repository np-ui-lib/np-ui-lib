import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-np-color-picker-demo',
  templateUrl: './np-color-picker-demo.component.html',
  styleUrls: ['./np-color-picker-demo.component.css']
})
export class NpColorPickerDemoComponent implements OnInit {

  color1 = '#5fe64b';
  color2 = '#5fe64b';
  color3: string;
  color4 = '#5fe64b';
  color4Required = false;
  color4Disabled = false;
  color5: string;
  existingColors5 = ['#FFFFFF', '#C0C0C0', '#808080', '#000000'];
  color6: string;
  color7: string;
  color8: string;
  color9: string;
  color10: string;

  importText = 'import { NpColorPickerModule } from \'np-ui-lib\';';
  htmlText = '<np-color-picker [(ngModel)]="color1"></np-color-picker>';

  constructor() { }

  ngOnInit(): void {
  }

  onChangeColor(e) {
    alert('Selected color is ' + e);
  }

}
