# Optimized Datepicker in Angular

## Introduction

This project features an optimized datepicker component built with Angular, created as part of a frontend challenge. The datepicker allows for quick and easy date selection, including customizable tooltips for specific dates.

## Features

- **Easy Date Selection**: Quick and intuitive date selection.
- **Tooltips**: Display custom notices for disabled and restricted dates on hover.
- **Customizable Dates**: Define specific days as disabled or restricted with custom tooltips.
- **Month Navigation**: Navigate between months.

## Requirements

A user wants to add a deadline. To select the due date for the deadline, the user clicks on the due date field -> A datepicker opens.

1. The datepicker should allow the quick and easy selection of a date.
2. The datepicker should display the last week of the previous month and the first week of the next month (in light gray tone / different than the current month). Those dates should be selectable as well.
3. The datepicker should allow the developer to define certain days as disabled (not selectable and displaying a notice in a tooltip on hover) and certain days as restricted (selectable but marked with red color and displaying a notice in a tooltip on hover). This should be solved using a callback which can be passed to the datepicker:

`function dateFilter(date: Date): { disabled: boolean, notice?: string }`

## Installation

1. **Clone the repository:**
   ```git clone https://github.com/yourusername/optimized-datepicker.git
   cd optimized-datepicker
   ```
2. **Install dependencies:**
   `npm install`
3. **Run the development server:**
   `ng serve`

Open your browser and navigate to http://localhost:4200.

## Challenges
