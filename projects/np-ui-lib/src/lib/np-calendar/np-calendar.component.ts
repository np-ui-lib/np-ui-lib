import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewEncapsulation,
} from "@angular/core";
import { NpCalendarEvent } from "./np-calendar-event.model";

@Component({
  selector: "np-calendar",
  templateUrl: "./np-calendar.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class NpCalendarComponent implements AfterContentInit {
  private static controlCount = 1;

  @Input() disableWeekDays: string[] = [];
  @Input() disableDates: Date[] = [];
  @Input() dateClass: any;
  @Input() isStartMonthWithMonday: boolean = false;
  @Input() eventTemplate: TemplateRef<any>;
  @Input() styleClass: string;
  @Input() resetEventsOnLoad: boolean = false;
  @Input() inputId: string = `np-calendar_${NpCalendarComponent.controlCount++}`;

  @Output() onLoadMonth: EventEmitter<any> = new EventEmitter();
  @Output() onClickDate: EventEmitter<any> = new EventEmitter();
  @Output() onClickEvent: EventEmitter<any> = new EventEmitter();

  weekDays: string[];
  monthsList: any[];
  months: any[];
  years: number[] = [];
  currentMonthWeeks: any;
  currentMonth: number;
  currentYear: number;
  today: Date;
  events: NpCalendarEvent[] = [];
  originalWeekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  constructor() {
    this.monthsList = [
      { key: 0, value: "January" },
      { key: 1, value: "February" },
      { key: 2, value: "March" },
      { key: 3, value: "April" },
      { key: 4, value: "May" },
      { key: 5, value: "June" },
      { key: 6, value: "July" },
      { key: 7, value: "August" },
      { key: 8, value: "September" },
      { key: 9, value: "October" },
      { key: 10, value: "November" },
      { key: 11, value: "December" },
    ];
    this.today = new Date();
    this.today.setHours(0, 0, 0, 0);
    this.currentMonth = this.today.getMonth();
    this.currentYear = this.today.getFullYear();
  }

  ngAfterContentInit(): void {
    if (this.isStartMonthWithMonday) {
      this.weekDays = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ];
    } else {
      this.weekDays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
    }
    this._calculateDays();
    this._onLoad();
  }

  refresh(): void {
    this._calculateDays();
    this._onLoad();
  }

  addEvents(eve: NpCalendarEvent[]): void {
    eve.forEach((element: NpCalendarEvent) => {
      this.events.push(element);
    });
    this._calculateDays();
  }

  removeEvents(eve: NpCalendarEvent[]): void {
    eve.forEach((element: NpCalendarEvent) => {
      const idx = this._findIndexOfEvent(element);
      if (idx > -1) {
        this.events.splice(idx, 1);
      }
    });
    this._calculateDays();
  }

  _calculateDays(): void {
    const weeks = [];
    weeks[0] = [];
    const daysInMonth = this._getCurrentMonthData();
    const firstWeekDayOfMonth = new Date(
      this.currentYear,
      this.currentMonth,
      1
    ).getDay();
    // push extra values up to week days match to start date if month
    for (let index = 0; index < firstWeekDayOfMonth; index++) {
      weeks[0].push({ disabled: true });
    }
    if (this.isStartMonthWithMonday) {
      // if start with monday then
      if (firstWeekDayOfMonth === 0) {
        weeks[0].push(
          { disabled: true },
          { disabled: true },
          { disabled: true },
          { disabled: true },
          { disabled: true },
          { disabled: true }
        );
      } else {
        weeks[0].pop();
      }
    }
    let j = 0;
    // push all dates in month
    daysInMonth.forEach((element: any) => {
      if (weeks[j].length === 7) {
        j++;
        weeks[j] = [];
      }
      weeks[j].push(element);
    });
    if (weeks[j].length !== 7) {
      while (weeks[j].length !== 7) {
        weeks[j].push({ disabled: true });
      }
    }
    this.currentMonthWeeks = weeks;
  }

  _getCurrentMonthData(): any[] {
    const data = [];
    const totalDaysInMonth = this._daysInCurrentMonth();
    for (let i = 1; i <= totalDaysInMonth; i++) {
      const date = new Date(this.currentYear, this.currentMonth, i);
      data.push({
        date,
        day: i,
        disabled: this._checkIsFullDateDisabled(date),
        today: this._compareDate(this.today, date),
        events: this._getEventsForDate(date),
      });
    }
    return data;
  }

  _getEventsForDate(date: Date): NpCalendarEvent[] {
    if (this.events === undefined || this.events === null) {
      return null;
    }
    return this.events
      .filter((element) => {
        if (this._compareDate(element.startDate, date)) {
          return element;
        }
      })
      .sort((a: NpCalendarEvent, b: NpCalendarEvent) =>
        a.startDate > b.startDate ? 1 : b.startDate > a.startDate ? -1 : 0
      );
  }

  _daysInCurrentMonth(): number {
    let days = 0;
    switch (this.currentMonth) {
      case 0: // Jan
      case 2: // Mar
      case 4: // May
      case 6: // Jul
      case 7: // Aug
      case 9: // Oct
      case 11: // Dec
        days = 31;
        break;
      case 3: // Apr
      case 5: // Jun
      case 8: // Sept
      case 10: // Nov
        days = 30;
        break;
      case 1: // Feb
        days = this.currentYear % 4 === 0 ? 29 : 28;
        break;
    }
    return days;
  }

  _checkIsFullDateDisabled(date: Date): boolean {
    if (date === undefined || date === null) {
      return false;
    }
    if (this._checkIsWeekDayDisabled(date.getDay())) {
      return true;
    }
    return (this.disableDates.findIndex((item) => this._compareDate(item, date))) > -1;
  }

  _checkIsWeekDayDisabled(index: number): boolean {
    const day = this.originalWeekDays[index];
    return this.disableWeekDays.indexOf(day) > -1;
  }

  _prevMonth(): void {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear = this.currentYear - 1;
    } else {
      this.currentMonth = this.currentMonth - 1;
    }
    this._calculateDays();
    this._onLoad();
  }

  _nextMonth(): void {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear = this.currentYear + 1;
    } else {
      this.currentMonth = this.currentMonth + 1;
    }
    this._calculateDays();
    this._onLoad();
  }

  _changeYear($event: any): void {
    this.currentYear = Number($event.target.value.trim());
    this._calculateDays();
    this._onLoad();
  }

  _selectMonth($event: any): void {
    this.currentMonth = Number($event.target.value);
    this._calculateDays();
    this._onLoad();
  }

  _loadCurrentMonth(): void {
    this.currentMonth = this.today.getMonth();
    this.currentYear = this.today.getFullYear();
    this._calculateDays();
    this._onLoad();
  }

  _compareDate(dateA: Date, dateB: Date): boolean {
    if (!dateA || !dateB) {
      return false;
    }
    if (
      dateA.getFullYear() === dateB.getFullYear() &&
      dateA.getMonth() === dateB.getMonth() &&
      dateA.getDate() === dateB.getDate()
    ) {
      return true;
    }
    return false;
  }

  _onClickDate(date: Date): void {
    if (this._checkIsFullDateDisabled(date)) {
      return;
    }
    if (this.onClickDate) {
      this.onClickDate.emit(date);
    }
  }

  _onClickEvent($domEvent: any, event: NpCalendarEvent): void {
    $domEvent.stopPropagation();
    if (this._checkIsFullDateDisabled(event.startDate)) {
      return;
    }
    if (this.onClickEvent) {
      this.onClickEvent.emit(event);
    }
  }

  _findIndexOfEvent(event: NpCalendarEvent): number {
    let index = -1;
    if (this.events) {
      for (let i = 0; i < this.events.length; i++) {
        const element = this.events[i];
        if (
          element.startDate === event.startDate &&
          element.endDate === event.endDate &&
          element.title === event.title
        ) {
          index = i;
          break;
        }
      }
    }
    return index;
  }

  _onLoad(): void {
    if (this.resetEventsOnLoad) {
      this.events = [];
    }
    if (this.onLoadMonth) {
      this.onLoadMonth.emit({
        month: this.currentMonth,
        year: this.currentYear,
      });
    }
  }

  _getDateClass(item: any): string {
    if (this.dateClass) {
      return (
        `np-calendar-day np-day-${item.day} ` + this.dateClass(item.date)
      ).trim();
    }
    return `np-calendar-day np-day-${item.day}`;
  }
}
