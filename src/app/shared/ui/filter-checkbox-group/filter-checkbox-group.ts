import { Component, input, model } from '@angular/core';

export interface CheckboxOption {
  value: string;
  label: string;
  count: string;
}

@Component({
  selector: 'app-filter-checkbox-group',
  templateUrl: './filter-checkbox-group.html',
  styleUrl: './filter-checkbox-group.scss',
})
export class FilterCheckboxGroup {
  options = input.required<CheckboxOption[]>();
  checked = model<string[]>([]);

  isChecked(value: string): boolean {
    return this.checked().includes(value);
  }

  toggle(value: string): void {
    const current = this.checked();
    this.checked.set(
      current.includes(value) ? current.filter((v) => v !== value) : [...current, value],
    );
  }
}
