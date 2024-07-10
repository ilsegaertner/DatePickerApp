import { Injectable } from '@angular/core';
import { DatePickerModalComponent } from './date-picker-modal/date-picker-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class DatePickerService {
  constructor(private dialog: MatDialog) {}

  openDatePicker() {
    return this.dialog.open(DatePickerModalComponent);
  }

  holidays: { month: number; date: number }[] = [
    { month: 0, date: 1 }, // Neujahr
    { month: 2, date: 29 }, // Karfreitag
    { month: 3, date: 1 }, // Ostermontag
    { month: 4, date: 1 }, // Tag der Arbeit
    { month: 4, date: 9 }, // Christi Himmelfahrt
    { month: 4, date: 20 }, // Pfingstmontag
    { month: 9, date: 3 }, // Tag der Deutschen Einheit
    { month: 10, date: 1 }, // Allerheiligen
    { month: 11, date: 25 }, // Weihnachten
    { month: 11, date: 26 }, // Zweiter Weihnachtstag
  ];

  restrictedDates: Date[] = [
    new Date(2024, 0, 5), // 5th January 2024
    new Date(2024, 1, 12), // 12th February 2024
    new Date(2024, 2, 19), // 19th March 2024
    new Date(2024, 3, 7), // 7th April 2024
    new Date(2024, 4, 15), // 15th May 2024
    new Date(2024, 5, 23), // 23rd June 2024
    new Date(2024, 6, 1), // 1st July 2024
    new Date(2024, 7, 9), // 9th August 2024
    new Date(2024, 8, 17), // 17th September 2024
    new Date(2024, 9, 25), // 25th October 2024
    new Date(2024, 10, 3), // 3rd November 2024
    new Date(2024, 11, 11), // 11th December 2024
    new Date(2024, 0, 14), // 14th January 2024
    new Date(2024, 1, 21), // 21st February 2024
    new Date(2024, 2, 28), // 28th March 2024
    new Date(2024, 3, 6), // 6th April 2024
    new Date(2024, 4, 13), // 13th May 2024
    new Date(2024, 5, 20), // 20th June 2024
    new Date(2024, 6, 27), // 27th July 2024
    new Date(2024, 7, 4), // 4th August 2024
  ];

  dateFilter(date: Date): { disabled: boolean; notice?: string } {
    const day = date.getDay();

    // Disable Weekends
    if (day === 6 || day === 0) {
      return { disabled: true, notice: 'Weekends are not selectable' };
    }

    if (
      this.holidays.some(
        (holiday) =>
          date.getMonth() === holiday.month && date.getDate() === holiday.date
      )
    ) {
      return { disabled: true, notice: 'Public holidays are not selectable' };
    }

    // Restrict specific days
    const isRestricted = this.restrictedDates.some(
      (restrictedDate) =>
        restrictedDate.getFullYear() === date.getFullYear() &&
        restrictedDate.getMonth() === date.getMonth() &&
        restrictedDate.getDate() === date.getDate()
    );
    if (isRestricted) {
      return { disabled: false, notice: 'this date is not selectable' };
    }
    return { disabled: false };
  }
}
