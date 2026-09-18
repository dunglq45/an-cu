import { Component, input, model } from '@angular/core';

export interface SegmentedOption {
  value: string;
  label: string;
}

@Component({
  selector: 'app-segmented-control',
  templateUrl: './segmented-control.html',
  styleUrl: './segmented-control.scss',
})
export class SegmentedControl {
  options = input.required<SegmentedOption[]>();
  appearance = input<'tabs' | 'buttons'>('tabs');
  selected = model.required<string>();

  select(value: string): void {
    this.selected.set(value);
  }
}
