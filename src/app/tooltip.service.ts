import { Injectable } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';

@Injectable({
  providedIn: 'root',
})
export class TooltipService {
  constructor() {}

  addTooltip(element: HTMLElement, message: string): void {
    element.setAttribute('aria-label', message);
  }

  removeTooltip(element: HTMLElement): void {
    element.removeAttribute('aria-label');
  }
}
