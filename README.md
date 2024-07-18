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

### Tooltip Implementation and Customization

**Context**: Implementing dynamic tooltips for specific dates required an innovative approach to meet the project requirements effectively.

**Action**:

- **Dynamic Aria-Labeling**: A key challenge was to dynamically set the aria-label based on the `dateFilter` function’s output. This was essential for displaying the appropriate tooltips via CSS.
- **Custom Tooltip Creation**:
  - Since Angular Material’s `matTooltip` could not be customized to handle conditional tooltips, a custom tooltip solution was developed using CSS.
  - Employed `MutationObserver`, `MatDatepicker`, and `ViewChild` to ensure the calendar view updates dynamically reflected the correct tooltip information.
- **CSS Overriding**:
  - Overriding default Angular Material styles required precision in CSS selectors. Effective targeting was achieved with selectors such as `.mat-calendar-body-cell-container .mat-calendar-body-cell::after`.

**Resolution**:

- **Research and Resources**:
  - Extensively reviewed Angular Material documentation to identify potential optimizations.
  - Utilized AI tools like ChatGPT for additional insights and solutions.
- **Debugging and Testing**:
  - Employed detailed console log statements to trace and resolve issues.
  - Iteratively refactored and tested the code to enhance readability, maintainability, and performance.
- **Outcome**:
  - Successfully implemented a robust datepicker with dynamic tooltips, enhancing user experience and meeting all specified requirements.
