import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-lead-form',
  templateUrl: './lead-form.html',
  styleUrl: './lead-form.scss',
})
export class LeadForm {
  variant = input<'full' | 'phone-only'>('full');
  theme = input<'light' | 'dark'>('light');
  interestOptions = input<string[] | null>(null);
  submitLabel = input('Gửi yêu cầu');
  helperText = input<string | null>(null);
  consentText = input<string | null>(null);
  footNote = input<string | null>(null);
  messagePlaceholder = input('Tôi muốn xem căn này cuối tuần.');

  submitted = output<void>();

  onSubmit(): void {
    this.submitted.emit();
  }
}
