import { Component } from '@angular/core';
import { DatePickerService } from './date-picker.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedDate: Date | null = null;

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
