import { Component, input, signal } from '@angular/core';
import { FaqItem } from '../../../core/models/faq.model';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.html',
  styleUrl: './accordion.scss',
})
export class Accordion {
  items = input.required<FaqItem[]>();
  expandedId = signal<string | null>(null);

  toggle(id: string): void {
    this.expandedId.set(this.expandedId() === id ? null : id);
  }

  isExpanded(id: string, isFirst: boolean): boolean {
    return this.expandedId() === id || (this.expandedId() === null && isFirst);
  }
}
