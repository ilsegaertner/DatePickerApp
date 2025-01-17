# Optimized Datepicker in Angular

## Introduction

This project features an optimized datepicker component built with Angular, created as part of a frontend challenge. The datepicker allows for quick and easy date selection, including customizable tooltips for specific dates.

## Features

- **Easy Date Selection**: Quick and intuitive date selection.
- **Tooltips**: Display custom notices for public holidays, disabled or restricted dates on hover.
- **Customizable Dates**: Define specific days as disabled or restricted with custom tooltips.
- **Month Navigation**: Navigate between months.

![Datepicker Screenshot](https://github.com/ilsegaertner/DatePickerApp/blob/final-no-details/src/assets/optimized-datepicker-snapshot.png?raw=true)

--> You can view the application live at: <a href="https://optimized-datepicker.netlify.app/" target="_blank">https://optimized-datepicker.netlify.app/</a>

## Requirements

A user wants to add a deadline. To select the due date for the deadline, the user clicks on the due date field -> A datepicker opens.

1. The datepicker should allow the quick and easy selection of a date.
2. The datepicker should display the last week of the previous month and the first week of the next month (in light gray tone / different than the current month). Those dates should be selectable as well.
3. The datepicker should allow the developer to define certain days as disabled (not selectable and displaying a notice in a tooltip on hover) and certain days as restricted (selectable but marked with red color and displaying a notice in a tooltip on hover). This should be solved using a callback which can be passed to the datepicker:

`function dateFilter(date: Date): { disabled: boolean, notice?: string }`

## Challenges

### Tooltip Implementation and Customization

Implementing dynamic tooltips for specific dates required an innovative approach to meet the project requirements. Since Angular Material’s `matTooltip` could not be customized to handle conditional tooltips, a custom tooltip solution was developed using CSS.

**Action**:

- **Dynamic Aria-Labeling**: The decision was to dynamically set the aria-label based on the `dateFilter` function’s output. This was essential for displaying the appropriate tooltips via CSS.
- **Custom Tooltip Creation**:
  - Employed `MutationObserver`, `MatDatepicker`, and `ViewChild` to ensure the calendar view updates dynamically reflected the correct tooltip information.
- **CSS Overriding**:
  - Overriding default Angular Material styles required precision in CSS selectors. Effective targeting was achieved with selectors such as `.mat-calendar-body-cell-container .mat-calendar-body-cell::after`.

**Resolution**:

- **Research and Resources**:
  - Research on Angular Material documentation to identify potential optimizations.
  - Utilized AI tools like ChatGPT for additional insights and solutions.
- **Debugging and Testing**:
  - Employed console log statements to trace and resolve issues und using Dev Tools for finding the correct CSS selectors.
  - Refactored and tested the code to enhance readability and maintainability.
- **Outcome**:
  - Successfully implemented a datepicker with dynamic tooltips, enhancing user experience.

### Displaying Adjacent Weeks

Another requirement was to display the last week of the previous month and the first week of the next month in a different tone, while making these dates selectable.

**Action**:

- Initially attempted to implement this feature using custom JavaScript logic within the Angular Material framework.
- Found that ngx-bootstrap provided a version that included this requirement out-of-the-box.

Customizing the Angular Material Datepicker to display the last week of the previous month and the first week of the next month in a different tone proved challenging. While a version was created that achieved this feature, it was complicated and not entirely suitable because it didn't display the last week of the previous month or the first week of the next month within the current month view correctly. Although these dates were colored differently, the solution was discarded as it did not meet the desired functionality.

**Justification for Sticking with Angular Material**:

- **Consistency**: Using Angular Material ensures a uniform design language throughout the application. Introducing ngx-bootstrap would have led to inconsistencies in the UI/UX, as it follows different design principles.
- **Integration**: Angular Material seamlessly integrates with Angular’s core features, making the application more maintainable and easier to develop. Switching to ngx-bootstrap would require significant refactoring, increasing the risk of introducing bugs and inconsistencies.
- **Learning Curve**: Sticking with Angular Material leverages the existing knowledge and experience within the team, avoiding the learning curve associated with adopting a new library like ngx-bootstrap.

**Conclusion**:

- **Strategic Decision**: The choice to continue with Angular Material was strategic, focusing on long-term benefits such as maintainability, consistency, and deep integration with Angular’s ecosystem. Furthermore, the Angular Material datepicker mirrored the design of the company.
- **Incremental Improvements**: Acknowledging the current limitations, the decision allows for incremental improvements and iterative enhancements without overhauling the entire codebase.
- **Commitment to Quality**: This approach underscores a commitment to delivering a high-quality user experience, aligned with modern design principles and the project’s overall aesthetic.
