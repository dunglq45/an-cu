import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MediaPlaceholder } from '../../../shared/ui/media-placeholder/media-placeholder';

@Component({
  selector: 'app-property-gallery',
  imports: [RouterLink, MediaPlaceholder],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  readonly dots = [0, 1, 2, 3];
  activeIndex = signal(0);

  setIndex(index: number): void {
    this.activeIndex.set(index);
  }
}
