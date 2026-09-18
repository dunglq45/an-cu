import { Component, signal } from '@angular/core';

interface DateOption {
  id: string;
  weekday: string;
  date: string;
}

const DATE_OPTIONS: DateOption[] = [
  { id: 'fri', weekday: 'Th 6', date: '26/09' },
  { id: 'sat', weekday: 'Th 7', date: '27/09' },
  { id: 'sun', weekday: 'CN', date: '28/09' },
];

@Component({
  selector: 'app-booking-card',
  templateUrl: './booking-card.html',
  styleUrl: './booking-card.scss',
})
export class BookingCard {
  readonly dateOptions = DATE_OPTIONS;
  selectedDate = signal('sat');
}
