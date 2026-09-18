import { Component, input, model } from '@angular/core';

export interface PillOption {
  value: string;
  label: string;
}

@Component({
  selector: 'app-pill-toggle-group',
  templateUrl: './pill-toggle-group.html',
  styleUrl: './pill-toggle-group.scss',
})
export class PillToggleGroup {
  options = input.required<PillOption[]>();
  selected = model<string | null>(null);

  toggle(value: string): void {
    this.selected.set(this.selected() === value ? null : value);
  }
}
