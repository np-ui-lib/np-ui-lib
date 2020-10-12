import { Component, OnInit, ViewChild } from '@angular/core';
import { NpCalendarComponent, NpCalendarEvent, NpDialogComponent, NpModalService } from 'np-ui-lib';

@Component({
  selector: 'app-np-calendar-demo',
  templateUrl: './np-calendar-demo.component.html'
})
export class NpCalendarDemoComponent implements OnInit {

  @ViewChild('myCalendar', { static: true }) myCalendar: NpCalendarComponent;
  @ViewChild('myCalendar2', { static: true }) myCalendar2: NpCalendarComponent;

  disabledDates = [];
  disableWeekDays = ['Sunday', 'Saturday'];

  constructor(private modalService: NpModalService) { }

  ngOnInit(): void {
    const date4 = new Date();
    date4.setDate(1);
    const date5 = new Date();
    date5.setDate(2);
    this.disabledDates = [date4, date5];
  }

  onClickDate(date: Date) {
    const prompt = this.modalService.open(NpDialogComponent,
      null, { type: 'prompt', message: 'Add event description' });
    prompt.onClose.subscribe((data) => {
      if (data && data.length > 0) {
        this.myCalendar.addEvents([new NpCalendarEvent({ startDate: date, description: data })]);
      }
    });
  }

  onClickEvent(event: NpCalendarEvent) {
    const confirm = this.modalService.open(NpDialogComponent,
      null, { type: 'confirm', message: 'Are you sure to delete event?' });
    confirm.onClose.subscribe((data) => {
      if (data === true) {
        this.myCalendar.removeEvents([event]);
      }
    });
  }

  onLoadMonth($event) {
    console.log(JSON.stringify($event));
    const date1 = new Date();
    date1.setHours(1);
    const date2 = new Date();
    date2.setHours(2);
    const date3 = new Date();
    date3.setHours(24);
    const events = [
      new NpCalendarEvent({ startDate: date1, description: 'Meeting with client' }),
      new NpCalendarEvent({
        startDate: date2, description: 'Retrospective Meeting with scrum team of np-ui-lib project',
        backgroundColor: '#1e7e34', fontColor: 'black'
      }),
      new NpCalendarEvent({ startDate: date3, description: 'Weekly sync up meeting on skype' })
    ];
    this.myCalendar.addEvents(events);
  }

  onClickDate2(date: Date) {
    const prompt = this.modalService.open(NpDialogComponent,
      null, { type: 'prompt', message: 'Add event description' });
    prompt.onClose.subscribe((data) => {
      if (data && data.length > 0) {
        this.myCalendar2.addEvents([new NpCalendarEvent({ startDate: date, description: data })]);
      }
    });
  }

  onClickEvent2(event: NpCalendarEvent) {
    const confirm = this.modalService.open(NpDialogComponent,
      null, { type: 'confirm', message: 'Are you sure to delete event?' });
    confirm.onClose.subscribe((data) => {
      if (data === true) {
        this.myCalendar2.removeEvents([event]);
      }
    });
  }

  onLoadMonth2($event) {
    console.log(JSON.stringify($event));
    const date1 = new Date();
    date1.setHours(1);
    const date2 = new Date();
    date2.setHours(2);
    const date3 = new Date();
    date3.setHours(24);
    const events = [
      new NpCalendarEvent({ startDate: date1, description: 'Meeting with client' }),
      new NpCalendarEvent({
        startDate: date2, description: 'Retrospective Meeting with scrum team of np-ui-lib project',
        backgroundColor: '#1e7e34', fontColor: 'black'
      }),
      new NpCalendarEvent({ startDate: date3, description: 'Weekly sync up meeting on skype' })
    ];
    this.myCalendar2.addEvents(events);
  }

}
