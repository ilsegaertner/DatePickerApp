import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { DatePickerModalComponent } from './date-picker-modal/date-picker-modal.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatNativeDateModule, DateAdapter } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';

import { DatePickerService } from './date-picker.service';
import { CustomDateAdapter } from './custom-date-adapter';

@NgModule({
  declarations: [AppComponent, DatePickerModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  providers: [
    provideAnimationsAsync(),
    DatePickerService,
    { provide: DateAdapter, useClass: CustomDateAdapter },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
