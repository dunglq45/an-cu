import { Component, input, signal } from '@angular/core';
import { Project } from '../../../core/models/project.model';
import { LeadForm } from '../../../shared/ui/lead-form/lead-form';

@Component({
  selector: 'app-gated-pricing-table',
  imports: [LeadForm],
  templateUrl: './gated-pricing-table.html',
  styleUrl: './gated-pricing-table.scss',
})
export class GatedPricingTable {
  project = input.required<Project>();
  unlocked = signal(false);

  unlock(): void {
    this.unlocked.set(true);
  }

  statusClass(status: string): string {
    return status === 'Giữ chỗ' ? 'badge--reserved' : 'badge--verified';
  }
}
