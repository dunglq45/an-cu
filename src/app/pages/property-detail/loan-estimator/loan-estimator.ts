import { Component, input } from '@angular/core';
import { Listing } from '../../../core/models/listing.model';

@Component({
  selector: 'app-loan-estimator',
  templateUrl: './loan-estimator.html',
  styleUrl: './loan-estimator.scss',
})
export class LoanEstimator {
  listing = input.required<Listing>();
}
