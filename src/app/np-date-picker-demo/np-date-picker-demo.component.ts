import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-np-date-picker-demo',
  templateUrl: './np-date-picker-demo.component.html'
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
  date15: Date;

  importText = `import { NpDatePickerModule } from 'np-ui-lib';`;
  htmlText = `<np-date-picker [(ngModel)]="value"></np-date-picker>`;
  dateClassText = 'function(date: Date) { return "red-background";}';

  constructor() { }

  ngOnInit(): void {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    this.disableDates7.push(today);
    this.disableDates7.push(tomorrow);
    this.dateLabels12.push({
      date: today,
      label: 'Today'
    });
    this.dateLabels12.push({
      date: tomorrow,
      label: 'Tomorrow'
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

  getClassForDate(date: Date) {
    if (date.getDate() == 1 || date.getDate() == 28) {
      return 'red-background';
    }
    return 'green-background';
  }

}
