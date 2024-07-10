import { Injectable } from '@angular/core';

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
