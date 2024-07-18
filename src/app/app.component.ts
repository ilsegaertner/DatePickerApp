import { Component } from '@angular/core';
import { DatePickerService } from './date-picker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedDate: Date | null = null;
  enteredDetails: string = '';
  showDetails: boolean = false;
  showDetailsSection: boolean = false;

  constructor(private datePickerService: DatePickerService) {}

  openDatePicker(): void {
    this.datePickerService
      .openDatePicker()
      .afterClosed()
      .subscribe((result: Date | null) => {
        if (result) {
          this.selectedDate = result;
        }
      });
  }
}
