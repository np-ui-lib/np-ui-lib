import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-np-date-picker-demo',
  templateUrl: './np-date-picker-demo.component.html',
  styleUrls: ['./np-date-picker-demo.component.css']
})
export class NpDatePickerDemoComponent implements OnInit {

  date1: Date = new Date();
  date2: Date = new Date();
  date3: Date;
  date4: Date = new Date();
  date4Disable = false;
  date4Required = false;
  date5: Date = new Date();
  date6: Date;
  date7: Date;
  disableDates7: Date[] = [];
  date81: Date;
  date82: Date;
  date9: Date;
  date10: Date;
  date11: Date;
  date12: Date;
  dateLabels12: any[] = [];
  date13: Date;
  date14: Date;

  importText = `import { NpDatePickerModule } from 'np-ui-lib';`;
  htmlText = `<np-date-picker [(ngModel)]="date1"></np-date-picker>`;

  constructor() { }

  ngOnInit(): void {
    this.disableDates7.push(new Date());
    this.dateLabels12.push({
      date: new Date(),
      label: 'Today'
    });
  }

  setDate1() {
    this.date1 = new Date(1992, 9, 28);
  }

  setDate1AsNull() {
    this.date1 = null;
  }

  setDate7() {
    this.date7 = new Date();
  }

  onChangeDate14(e) {
    alert(e);
  }

}
