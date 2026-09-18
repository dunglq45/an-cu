import { Component, computed, signal } from '@angular/core';
import { PageShell } from '../../layout/page-shell/page-shell';
import { Breadcrumb } from '../../shared/ui/breadcrumb/breadcrumb';
import { ListingCard } from '../../shared/ui/listing-card/listing-card';
import { SearchFilterForm } from '../../shared/ui/search-filter-form/search-filter-form';
import { BottomSheetShell } from '../../shared/ui/bottom-sheet-shell/bottom-sheet-shell';
import { MapPanel } from '../../shared/ui/map-panel/map-panel';
import { MOCK_LISTINGS } from '../../core/data/mock-listings';
import { MOCK_AGENTS } from '../../core/data/mock-agents';
import { MOCK_MAP_PINS, MAP_PIN_PREVIEW } from '../../core/data/mock-map-pins';

const PAGE_SIZE = 2;

@Component({
  selector: 'app-search-results-page',
  imports: [PageShell, Breadcrumb, ListingCard, SearchFilterForm, BottomSheetShell, MapPanel],
  templateUrl: './search-results.html',
  styleUrl: './search-results.scss',
})
export class SearchResultsPage {
  readonly breadcrumbItems = [
    { label: 'Trang chủ', link: '/' },
    { label: 'Mua bán', link: '/tim-kiem' },
    { label: 'Căn hộ chung cư TP.HCM' },
  ];

  readonly agents = MOCK_AGENTS;
  readonly listings = MOCK_LISTINGS;
  readonly mapPins = MOCK_MAP_PINS;
  readonly mapPreview = MAP_PIN_PREVIEW;

  sortBy = signal('moi-nhat');
  currentPage = signal(1);
  filterSheetOpen = signal(false);

  totalPages = computed(() => Math.ceil(this.listings.length / PAGE_SIZE));

  agentFor(agentId: string) {
    return this.agents.find((a) => a.id === agentId);
  }

  goToPage(page: number): void {
    this.currentPage.set(page);
  }
}
