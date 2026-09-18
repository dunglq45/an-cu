import { Component, input } from '@angular/core';

export type MediaPlaceholderIcon =
  'house' | 'building' | 'interior' | 'tour360' | 'floorplan' | 'progress' | 'perspective';

@Component({
  selector: 'app-media-placeholder',
  templateUrl: './media-placeholder.html',
  styleUrl: './media-placeholder.scss',
})
export class MediaPlaceholder {
  icon = input<MediaPlaceholderIcon>('house');
  caption = input('');
  iconSize = input(36);
  imageUrl = input<string | undefined>(undefined);
  alt = input('');
}
