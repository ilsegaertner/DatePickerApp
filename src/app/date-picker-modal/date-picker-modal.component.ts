import {
  AfterViewInit,
  Component,
  OnInit,
  ElementRef,
  Renderer2,
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
  selectedDate: Date | null = null;
  @ViewChild('picker', { static: false }) datepicker!: MatDatepicker<any>;
  private observer: MutationObserver;

  constructor(
    public dialogRef: MatDialogRef<DatePickerModalComponent>,
    private datePickerService: DatePickerService,
    private tooltipService: TooltipService,
    private el: ElementRef,
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef
  ) {
    this.observer = new MutationObserver(() => {
      console.log('Calendar view changed');
      setTimeout(() => {
        this.addTooltipsToDateCells();
        this.cdr.detectChanges(); // Ensure Angular change detection runs
      }, 100); // Small delay to ensure elements are rendered
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    this.datepicker.openedStream.subscribe(() => {
      console.log('Datepicker opened');
      setTimeout(() => {
        this.addTooltipsToDateCells();
        this.observeCalendarViewChanges();
        this.cdr.detectChanges(); // Ensure Angular change detection runs
      }, 100); // Small delay to ensure elements are rendered
    });
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

  addTooltipsToDateCells(): void {
    console.log('addTooltipsToDateCells called');
    const buttons: NodeListOf<HTMLElement> = document.querySelectorAll(
      '.mat-calendar-body-cell'
    );
    console.log('Number of buttons found:', buttons.length);

    buttons.forEach((button: HTMLElement) => {
      const ariaLabel = button.getAttribute('aria-label');
      console.log('Button:', button, 'Aria Label:', ariaLabel);
      if (ariaLabel) {
        const date = new Date(ariaLabel);
        const tooltipText = this.tooltipText(date);
        console.log('Tooltip Text:', tooltipText, 'Date:', date);
        if (tooltipText) {
          this.tooltipService.addTooltip(button, tooltipText); // Assign to button directly
        } else {
          this.tooltipService.removeTooltip(button);
        }
      } else {
        console.log('Button does not have an aria-label:', button);
      }
    });
  }

  dateFilter = (d: Date | null): boolean => {
    if (d === null) return true;
    const result = this.datePickerService.dateFilter(d);
    return !result.disabled;
  };

  dateClass = (d: Date): string => {
    const result = this.datePickerService.dateFilter(d);
    return result.disabled
      ? 'disabled-date'
      : result.notice
      ? 'restricted-date'
      : '';
  };

  tooltipText = (d: Date): string => {
    const { notice } = this.datePickerService.dateFilter(d);
    return notice || '';
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
