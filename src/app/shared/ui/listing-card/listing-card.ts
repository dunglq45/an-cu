import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Listing } from '../../../core/models/listing.model';
import { Agent } from '../../../core/models/agent.model';
import { MediaPlaceholder } from '../media-placeholder/media-placeholder';
import { AvatarInitials } from '../avatar-initials/avatar-initials';

@Component({
  selector: 'app-listing-card',
  imports: [RouterLink, MediaPlaceholder, AvatarInitials],
  templateUrl: './listing-card.html',
  styleUrl: './listing-card.scss',
})
export class ListingCard {
  listing = input.required<Listing>();
  variant = input<'grid' | 'search-result' | 'mobile-horizontal'>('grid');
  agent = input<Agent | undefined>(undefined);

  link = computed(() => ['/bat-dong-san', this.listing().slug]);

  badgeClass(badge: string): string {
    switch (badge) {
      case 'VIP':
        return 'badge--vip';
      case 'Đã xác thực':
        return 'badge--verified';
      case 'Cho thuê':
        return 'badge--rent';
      case 'Giữ chỗ':
        return 'badge--reserved';
      default:
        return '';
    }
  }
}
