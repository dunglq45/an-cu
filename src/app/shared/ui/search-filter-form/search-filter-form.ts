import { Component, input, signal } from '@angular/core';
import {
  FilterCheckboxGroup,
  CheckboxOption,
} from '../filter-checkbox-group/filter-checkbox-group';
import { PillToggleGroup, PillOption } from '../pill-toggle-group/pill-toggle-group';
import { SegmentedControl, SegmentedOption } from '../segmented-control/segmented-control';
import { PriceRange } from '../price-range/price-range';

const TYPE_OPTIONS: CheckboxOption[] = [
  { value: 'can-ho', label: 'Căn hộ chung cư', count: '842' },
  { value: 'nha-pho', label: 'Nhà phố', count: '311' },
  { value: 'biet-thu', label: 'Biệt thự', count: '96' },
  { value: 'officetel', label: 'Officetel', count: '154' },
];

const AREA_OPTIONS: PillOption[] = [
  { value: 'duoi-50', label: '< 50 m²' },
  { value: '50-80', label: '50–80 m²' },
  { value: '80-120', label: '80–120 m²' },
];

const BEDROOM_OPTIONS: SegmentedOption[] = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4+', label: '4+' },
];

@Component({
  selector: 'app-search-filter-form',
  imports: [FilterCheckboxGroup, PillToggleGroup, SegmentedControl, PriceRange],
  templateUrl: './search-filter-form.html',
  styleUrl: './search-filter-form.scss',
})
export class SearchFilterForm {
  layout = input<'sidebar' | 'sheet'>('sidebar');

  readonly typeOptions = TYPE_OPTIONS;
  readonly typePillOptions = TYPE_OPTIONS.map(({ value, label }) => ({ value, label }));
  readonly areaOptions = AREA_OPTIONS;
  readonly bedroomOptions = BEDROOM_OPTIONS;

  selectedTypes = signal<string[]>(['can-ho']);
  selectedTypePill = signal<string | null>('can-ho');
  selectedArea = signal<string | null>('50-80');
  selectedBedrooms = signal('2');
}
