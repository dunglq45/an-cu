import { Component, model } from '@angular/core';

@Component({
  selector: 'app-price-range',
  templateUrl: './price-range.html',
  styleUrl: './price-range.scss',
})
export class PriceRange {
  minValue = model('3 tỷ');
  maxValue = model('7 tỷ');
  rangeValue = model(55);
}
