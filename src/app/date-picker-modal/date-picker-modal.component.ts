import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DatePickerService } from '../date-picker.service';
import { TooltipService } from '../tooltip.service';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-date-picker-modal',
  templateUrl: './date-picker-modal.component.html',
  styleUrls: ['./date-picker-modal.component.scss'],
})
export class DatePickerModalComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  selectedDate: Date | null = null; // The "= null" initializes selectedDate to null. That way it is defined
  @ViewChild('picker', { static: false }) datepicker!: MatDatepicker<any>;
  private observer: MutationObserver;

  constructor(
    public dialogRef: MatDialogRef<DatePickerModalComponent>,
    private datePickerService: DatePickerService,
    private tooltipService: TooltipService,
    private cdr: ChangeDetectorRef
  ) {
    this.observer = new MutationObserver(() => {
      setTimeout(() => {
        this.addTooltipsToDateCells();
        this.cdr.detectChanges(); // Ensure Angular change detection runs
      }, 100); // Small delay to ensure elements are rendered
    });
  }

  ngOnInit(): void {}

  setupDatePickerOpenStream(): void {
    this.datepicker.openedStream.subscribe(() => {
      console.log('Datepicker opened');
      setTimeout(() => {
        this.addTooltipsToDateCells();
        this.observeCalendarViewChanges();
        this.cdr.detectChanges();
      }, 100);
    });
  }

  ngAfterViewInit(): void {
    this.setupDatePickerOpenStream();
  }

  observeCalendarViewChanges(): void {
    const calendarContainer = document.querySelector('.mat-datepicker-content');
    if (calendarContainer) {
      this.observer.observe(calendarContainer, {
        childList: true,
        subtree: true,
      });
      console.log('Observer attached to calendar container');
    } else {
      console.log('Calendar container not found');
    }
  }

  tooltipText = (d: Date): string => {
    const { notice } = this.datePickerService.dateFilter(d);
    return notice || '';
  };

  dateFilter = (d: Date | null): boolean => {
    if (d === null) return true;
    const result = this.datePickerService.dateFilter(d);
    return !result.disabled;
  };

  addTooltipsToDateCells(): void {
    const buttons: NodeListOf<HTMLElement> = document.querySelectorAll(
      '.mat-calendar-body-cell'
    );

    buttons.forEach((button: HTMLElement) => {
      const ariaLabel = button.getAttribute('aria-label');
      if (ariaLabel) {
        const date = new Date(ariaLabel);
        const tooltipText = this.tooltipText(date);
        if (tooltipText) {
          this.tooltipService.addTooltip(button, tooltipText);
        } else {
          this.tooltipService.removeTooltip(button);
        }
      } else {
        console.log('Button does not have an aria-label:', button);
      }
    });
  }

  dateClass = (d: Date): string => {
    const result = this.datePickerService.dateFilter(d);
    return result.disabled
      ? 'disabled-date'
      : result.notice
      ? 'restricted-date'
      : '';
  };

  onOk(): void {
    this.dialogRef.close(this.selectedDate);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
