import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-np-utility-demo',
  templateUrl: './np-utility-demo.component.html'
})
export class NpUtilityDemoComponent implements OnInit {

  constructor() { }

  firstName: string;
  lastName: string;
  birthDate: Date;
  birthTime: string;
  isActive = true;
  description: string;
  photo: any;

  ngOnInit(): void {

  }

}
