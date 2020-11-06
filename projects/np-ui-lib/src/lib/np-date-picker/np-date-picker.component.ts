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
  @Output() onFocus: EventEmitter<any> = new EventEmitter();
  @Output() onBlur: EventEmitter<any> = new EventEmitter();

  @ViewChild('templatePortalContent') templatePortalContent: TemplateRef<any>;
  @ViewChild('control') inputViewChild: ElementRef;

  weekDays: string[];
  monthsList: any[];
  months: any[];
  years: number[] = [];
  currentMonthWeeks: any;
  currentMonth: number;
  currentYear: number;
  today: Date;
  isOpen = false;
  innerValue: Date;
  isDisabled = false;
  originalWeekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  focused = false;

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
    } else {
      this.weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    }
    if (this.defaultOpen) {
      this._resetVariables();
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

    let currentDate = this.value && this.value.toString() !== 'Invalid Date' ? this.value : this.today;
    if (this.minDate && currentDate < this.minDate) {
      currentDate = this.minDate;
    }
    if (this.maxDate && currentDate > this.maxDate) {
      currentDate = this.maxDate;
    }
    this.currentMonth = currentDate.getMonth();
    this.currentYear = currentDate.getFullYear();

    this._calculateDays();
  }

  _calculateDays() {
    const weeks = [];
    weeks[0] = [];
    const daysInMonth = this._getCurrentMonthData();
    const firstWeekDayOfMonth = new Date(this.currentYear, this.currentMonth, 1).getDay();
    // push extra values up to week days match to start date if month
    for (let index = 0; index < firstWeekDayOfMonth; index++) {
      weeks[0].push({ disabled: true });
    }
    if (this.isStartMonthWithMonday) {
      // if start with monday then
      if (firstWeekDayOfMonth === 0) {
        weeks[0].push({ disabled: true }, { disabled: true }, { disabled: true }, { disabled: true },
          { disabled: true }, { disabled: true });
      } else {
        weeks[0].pop();
      }
    }
    let j = 0;
    // push all dates in month
    daysInMonth.forEach(element => {
      if (weeks[j].length === 7) {
        j++;
        weeks[j] = [];
      }
      weeks[j].push(element);
    });
    this.currentMonthWeeks = weeks;
  }

  _getCurrentMonthData() {
    const data = [];
    const totalDaysInMonth = this._daysInCurrentMonth();
    for (let i = 1; i <= totalDaysInMonth; i++) {
      const date = new Date(this.currentYear, this.currentMonth, i);
      data.push({
        date,
        day: i,
        disabled: this._checkIsFullDateDisabled(date),
        today: this._compareDate(this.today, date),
        seleced: this._compareDate(this.value, date),
        toolTip: this._getTooltip(date)
      });
    }
    return data;
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
    } else {
      this.currentMonth = this.currentMonth - 1;
    }
    this._calculateDays();
  }

  _nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear = this.currentYear + 1;
    } else {
      this.currentMonth = this.currentMonth + 1;
    }
    this._calculateDays();
  }

  _selectDate(date: Date) {
    if (date === null || this._checkIsFullDateDisabled(date) || this.isDisabled || this.readOnly) {
      return;
    }
    this._setSelectedDate(date);
    this._close();
  }

  _selectMonth($event) {
    this.currentMonth = Number($event.target.value);
    this._calculateDays();
  }

  _changeYear($event) {
    this.currentYear = Number($event.target.value);
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
    this.inputViewChild.nativeElement.focus();
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

  _getTooltip(currentDate: Date) {
    if (currentDate && this.dateLabels && this.dateLabels.length > 0) {
      const dateLabel: any = this.dateLabels.find((item) => {
        return this._compareDate(item.date, currentDate);
      });
      return dateLabel ? dateLabel.label : null;
    }
    return null;
  }

  _checkIsWeekDayDisabled(index: number) {
    const day = this.originalWeekDays[index];
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
    return (this.disableDates.findIndex((item) => {
      return this._compareDate(item, date);
    }) > -1);
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
  }

  _compareDate(dateA: Date, dateB: Date) {
    if (!dateA || !dateB) {
      return false;
    }
    if (dateA.getFullYear() === dateB.getFullYear() &&
      dateA.getMonth() === dateB.getMonth() &&
      dateA.getDate() === dateB.getDate()) {
      return true;
    }
    return false;
  }

    _onBlur($event) {
    this.focused = false;
    this.onTouchedCallback();
    this.onBlur.emit($event);
  }

  _onFocus($event) {
    this.focused = true;
    this.onFocus.emit($event);
  }

  focus() {
    this.inputViewChild.nativeElement.focus();
  }
}
