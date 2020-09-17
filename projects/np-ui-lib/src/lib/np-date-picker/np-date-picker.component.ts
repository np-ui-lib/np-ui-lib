import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation, forwardRef } from '@angular/core';
import { ViewChild, TemplateRef, ViewContainerRef, ElementRef, AfterViewInit, AfterContentInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Overlay, OverlayRef, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { NpUtilityService } from '../np-utility/np-utility.service';
import { TopBottomOverlayPositions } from '../np-utility/np-constants';

@Component({
  selector: 'np-date-picker',
  templateUrl: './np-date-picker.component.html',
  styleUrls: ['./np-date-picker.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NpDatePickerComponent),
      multi: true
    }
  ]
})
export class NpDatePickerComponent implements ControlValueAccessor, AfterViewInit, AfterContentInit {
  static controlCount = 1;

  @Input() minDate: Date;
  @Input() maxDate: Date;
  @Input() format = 'dd/MM/yyyy';
  @Input() defaultOpen = false;
  @Input() showTodayButton = false;
  @Input() disableWeekDays: string[] = [];
  @Input() disableDates: Date[] = [];
  @Input() dateLabels: any[] = [];
  @Input() isStartMonthWithMonday = false;
  @Input() placeholder = '';
  @Input() readOnly: boolean;
  @Input() autoFocus: boolean;
  @Input() tabIndex: number;
  @Input() styleClass: string;
  @Input() inputId = `np-date-picker_${NpDatePickerComponent.controlCount++}`;

  @Output() onChange: EventEmitter<any> = new EventEmitter();

  @ViewChild('templatePortalContent') templatePortalContent: TemplateRef<any>;

  weekDays: string[];
  monthsList: any[];
  months: any[];
  years: number[] = [];
  days: number[] = [];
  selectedDay: number;
  selectedMonth: number;
  selectedYear: number;
  currentDay: number;
  currentMonth: number;
  currentYear: number;
  today: Date;
  todayDate: number;
  todayMonth: number;
  todayYear: number;
  isOpen = false;
  innerValue: Date;
  isDisabled = false;

  private templatePortal: TemplatePortal<any>;
  private overlayRef: OverlayRef;
  private onChangeCallback: (_: any) => void = () => { };
  private onTouchedCallback: () => void = () => { };

  constructor(
    public overlay: Overlay,
    private viewContainerRef: ViewContainerRef,
    private overlayPositionBuilder: OverlayPositionBuilder,
    private elementRef: ElementRef,
    private utility: NpUtilityService
  ) {
    this.monthsList = [
      { key: 0, value: 'January' },
      { key: 1, value: 'February' },
      { key: 2, value: 'March' },
      { key: 3, value: 'April' },
      { key: 4, value: 'May' },
      { key: 5, value: 'June' },
      { key: 6, value: 'July' },
      { key: 7, value: 'August' },
      { key: 8, value: 'September' },
      { key: 9, value: 'October' },
      { key: 10, value: 'November' },
      { key: 11, value: 'December' }
    ];

    this.today = new Date();
    this.today.setHours(0, 0, 0, 0);
    this.todayDate = this.today.getDate();
    this.todayMonth = this.today.getMonth();
    this.todayYear = this.today.getFullYear();

    this.weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

    this._setMonths();
  }

  ngAfterViewInit(): void {
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions(TopBottomOverlayPositions);
    this.overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
      backdropClass: 'np-date-picker-backdrop',
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      panelClass: this.styleClass
    });
    this.templatePortal = new TemplatePortal(
      this.templatePortalContent,
      this.viewContainerRef
    );
    this.overlayRef.backdropClick().subscribe(() => this._close());
  }

  get value(): Date {
    return this.innerValue ? this.innerValue : null;
  }

  set value(v: Date) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
      this.onTouchedCallback();
      this.onChange.emit(v);
    }
  }

  writeValue(v: Date): void {
    if (v !== this.innerValue) {
      this.innerValue = v;
      if (this._checkIsFullDateDisabled(v)) {
        this.value = null;
      }
      this._resetVariables();
      this._calculateDays();
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  ngAfterContentInit() {
    if (this.isStartMonthWithMonday) {
      this.weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
    }
  }

  _resetVariables() {
    if (this.value) {
      if (this.minDate && this.minDate > this.value) {
        this.value = null;
      }
      if (this.maxDate && this.maxDate < this.value) {
        this.value = null;
      }
    }

    if (this.value) {
      this.selectedDay = this.value.getDate();
      this.selectedMonth = this.value.getMonth();
      this.selectedYear = this.value.getFullYear();
    } else {
      this.selectedDay = null;
      this.selectedMonth = null;
      this.selectedYear = null;
    }

    let currentDate = this.value && this.value.toString() !== 'Invalid Date' ? this.value : this.today;
    if (this.minDate && currentDate < this.minDate) {
      currentDate = this.minDate;
    }
    if (this.maxDate && currentDate > this.maxDate) {
      currentDate = this.maxDate;
    }
    this.currentDay = currentDate.getDate();
    this.currentMonth = currentDate.getMonth();
    this.currentYear = currentDate.getFullYear();
  }

  _calculateDays() {
    this.days = [];
    const daysInMonth = this._daysInCurrentMonth();
    const firstWeekDayOfMonth = new Date(
      this.currentYear,
      this.currentMonth,
      1
    ).getDay();
    // push extra values up to week days match to start date if month
    for (let index = 0; index < firstWeekDayOfMonth; index++) {
      this.days.push(null);
    }
    if (this.isStartMonthWithMonday) {
      // if start with monday then
      if (firstWeekDayOfMonth === 0) {
        this.days.push(null, null, null, null, null, null);
      } else {
        this.days.pop();
      }
    }
    // push all dates in month
    for (let index = 1; index <= daysInMonth; index++) {
      this.days.push(index);
    }
  }

  _daysInCurrentMonth() {
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

  _prevMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear = this.currentYear - 1;
      this._setMonths();
    } else {
      this.currentMonth = this.currentMonth - 1;
    }
    this._calculateDays();
  }

  _nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear = this.currentYear + 1;
      this._setMonths();
    } else {
      this.currentMonth = this.currentMonth + 1;
    }
    this._calculateDays();
  }

  _selectDate(day: number) {
    if (day === null ||
      this._checkIsDateDisabled(this.currentYear, this.currentMonth, day) ||
      this.isDisabled || this.readOnly) {
      return;
    }
    const date = new Date(this.currentYear, this.currentMonth, day);
    this._setSelectedDate(date);
    this._close();
  }

  _selectMonth($event) {
    this.currentMonth = Number($event.target.value);
    this._calculateDays();
  }

  _changeYear($event) {
    this.currentYear = Number($event.target.value);
    this._setMonths();
    this._calculateDays();
  }

  _toggleDatePicker() {
    if (this.isOpen) {
      this._close();
    } else {
      this._open();
    }
  }

  _open() {
    if (this.defaultOpen === true || this.isDisabled || this.readOnly) {
      return;
    }
    this.isOpen = true;
    this._resetVariables();
    this._calculateDays();

    if (!this.overlayRef.hasAttached()) {
      this.overlayRef.attach(this.templatePortal);
    }
  }

  _close() {
    if (this.defaultOpen) {
      return;
    }
    this.isOpen = false;
    this.overlayRef.detach();
    this.elementRef.nativeElement.querySelector('input').focus();
  }

  _setMonths() {
    this.months = this.monthsList;
  }

  _setToday() {
    if (this._checkIsFullDateDisabled(this.today)) {
      return;
    }
    this._setSelectedDate(this.today);
    this._calculateDays();
    this._close();
  }

  _clear() {
    if (this.isDisabled || this.readOnly) {
      return;
    }
    this._setSelectedDate(null);
    this._calculateDays();
    this._close();
  }

  _checkIsDateDisabled(year: number, month: number, day: number) {
    if (day) {
      return this._checkIsFullDateDisabled(new Date(year, month, day));
    }
    return true;
  }

  _getTooltip(year: number, month: number, day: number) {
    if (day && this.dateLabels && this.dateLabels.length > 0) {
      const currentDate = new Date(year, month, day);
      const dateLabel: any = this.dateLabels.find((item) => {
        return item.date.toDateString() === currentDate.toDateString();
      });
      return dateLabel ? dateLabel.label : null;
    }
    return null;
  }

  _checkIsWeekDayDisabled(index: number) {
    const day = this.weekDays[index];
    return this.disableWeekDays.indexOf(day) > -1;
  }

  _checkIsFullDateDisabled(date: Date) {
    if (date === undefined || date === null) {
      return false;
    }
    if (this.minDate && date < this.minDate) {
      return true;
    }
    if (this.maxDate && date > this.maxDate) {
      return true;
    }
    if (this._checkIsWeekDayDisabled(date.getDay())) {
      return true;
    }
    return (
      this.disableDates.findIndex((item) => {
        return item.toDateString() === date.toDateString();
      }) > -1
    );
  }

  _checkIsToday(day: number) {
    return (
      day === this.todayDate &&
      this.currentMonth === this.todayMonth &&
      this.currentYear === this.todayYear
    );
  }

  _checkIsSelected(day: number) {
    return (
      day === this.selectedDay &&
      this.currentMonth === this.selectedMonth &&
      this.currentYear === this.selectedYear
    );
  }

  _setSelectedDate(date: Date) {
    if (date) {
      date.setHours(0, 0, 0, 0);
    }
    if (this._checkIsFullDateDisabled(date)) {
      return;
    }
    this.value = date;
    this._resetVariables();
  }

  _onKeydown(event: KeyboardEvent) {
    if (event.key === 'Tab' || event.key === 'Escape') {
      this._close();
    }
    if (event.key === 'ArrowDown') {
      this._open();
      event.preventDefault();
    }
  }

  _onInputChange($event) {
    const date = this.utility.ReverseFormatDate($event.target.value, this.format);
    if (date === 'Invalid Date') {
      $event.target.value = '';
      this.value = null;
      return;
    }
    if (this._checkIsFullDateDisabled(date)) {
      this.value = null;
      return;
    }
    this.value = date;
    this._resetVariables();
    this._calculateDays();
  }

  _onBlur() {
    this.onTouchedCallback();
  }
}
