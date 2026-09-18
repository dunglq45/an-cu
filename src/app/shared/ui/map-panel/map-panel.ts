import { Component, computed, input, signal } from '@angular/core';
import { MediaPlaceholder } from '../media-placeholder/media-placeholder';

export interface MapPanelPin {
  id: string;
  price: string;
  top: string;
  left: string;
  active?: boolean;
}

export interface MapPanelPreview {
  price: string;
  title: string;
  meta: string;
}

@Component({
  selector: 'app-map-panel',
  imports: [MediaPlaceholder],
  templateUrl: './map-panel.html',
  styleUrl: './map-panel.scss',
})
export class MapPanel {
  pins = input.required<MapPanelPin[]>();
  preview = input.required<MapPanelPreview>();
  clusterLabel = input('');

  activePinId = signal<string | null>(null);
  popupOpen = signal(true);

  activePin = computed(
    () =>
      this.pins().find((p) => p.id === this.activePinId()) ??
      this.pins().find((p) => p.active) ??
      this.pins()[0],
  );

  selectPin(id: string): void {
    this.activePinId.set(id);
    this.popupOpen.set(true);
  }

  closePopup(): void {
    this.popupOpen.set(false);
  }
}
