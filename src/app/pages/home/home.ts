import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageShell } from '../../layout/page-shell/page-shell';
import { ListingCard } from '../../shared/ui/listing-card/listing-card';
import { ProjectCard } from '../../shared/ui/project-card/project-card';
import { MediaPlaceholder } from '../../shared/ui/media-placeholder/media-placeholder';
import {
  SegmentedControl,
  SegmentedOption,
} from '../../shared/ui/segmented-control/segmented-control';
import { MOCK_LISTINGS } from '../../core/data/mock-listings';
import { MOCK_PROJECTS } from '../../core/data/mock-projects';
import { MOCK_AREAS } from '../../core/data/mock-areas';

const SEARCH_TYPE_OPTIONS: SegmentedOption[] = [
  { value: 'mua-ban', label: 'Mua bán' },
  { value: 'cho-thue', label: 'Cho thuê' },
  { value: 'du-an', label: 'Dự án' },
];

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, PageShell, ListingCard, ProjectCard, MediaPlaceholder, SegmentedControl],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomePage {
  readonly projects = MOCK_PROJECTS;
  readonly areas = MOCK_AREAS;
  readonly newestListings = MOCK_LISTINGS.filter((l) => !l.isSkeleton).slice(0, 4);
  readonly searchTypeOptions = SEARCH_TYPE_OPTIONS;

  searchType = signal('mua-ban');
  activeChip = signal<string | null>(null);

  selectChip(chip: string): void {
    this.activeChip.set(this.activeChip() === chip ? null : chip);
  }
}
