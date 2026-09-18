import { Component, computed, input, signal } from '@angular/core';
import { PageShell } from '../../layout/page-shell/page-shell';
import { Breadcrumb } from '../../shared/ui/breadcrumb/breadcrumb';
import { ListingCard } from '../../shared/ui/listing-card/listing-card';
import { AgentCard } from '../../shared/ui/agent-card/agent-card';
import { LeadForm } from '../../shared/ui/lead-form/lead-form';
import { Gallery } from './gallery/gallery';
import { LoanEstimator } from './loan-estimator/loan-estimator';
import { BookingCard } from './booking-card/booking-card';
import { MOCK_LISTINGS } from '../../core/data/mock-listings';
import { MOCK_AGENTS } from '../../core/data/mock-agents';

@Component({
  selector: 'app-property-detail-page',
  imports: [
    PageShell,
    Breadcrumb,
    ListingCard,
    AgentCard,
    LeadForm,
    Gallery,
    LoanEstimator,
    BookingCard,
  ],
  templateUrl: './property-detail.html',
  styleUrl: './property-detail.scss',
})
export class PropertyDetailPage {
  slug = input<string>('');

  listing = computed(
    () => MOCK_LISTINGS.find((l) => l.slug === this.slug() && !l.isSkeleton) ?? MOCK_LISTINGS[0],
  );

  agent = computed(() => MOCK_AGENTS.find((a) => a.id === this.listing().agentId));

  similarListings = computed(() =>
    MOCK_LISTINGS.filter((l) => l.id !== this.listing().id && !l.isSkeleton).slice(0, 4),
  );

  breadcrumbItems = computed(() => [
    { label: 'Trang chủ', link: '/' },
    { label: 'Mua bán căn hộ TP.HCM', link: '/tim-kiem' },
    { label: this.listing().district.split(',')[0] },
  ]);

  saved = signal(false);
  descriptionExpanded = signal(false);

  toggleSaved(): void {
    this.saved.set(!this.saved());
  }
}
