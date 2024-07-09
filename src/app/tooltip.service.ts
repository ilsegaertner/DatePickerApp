import { Injectable } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';

@Injectable({
  providedIn: 'root',
})
export class TooltipService {
  constructor() {}

  addTooltip(element: HTMLElement, message: string): void {
    console.log(`Adding tooltip: ${message} to element:`, element);
    element.setAttribute('matTooltip', message);
    element.setAttribute('aria-label', message);
  }

  removeTooltip(element: HTMLElement): void {
    console.log(`Removing tooltip from element:`, element);

    element.removeAttribute('matTooltip');
    element.removeAttribute('aria-label');
  }
}
