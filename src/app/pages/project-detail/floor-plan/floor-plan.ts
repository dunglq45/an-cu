import { Component, computed, input, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Project, ProjectUnit } from '../../../core/models/project.model';

@Component({
  selector: 'app-floor-plan',
  imports: [DecimalPipe],
  templateUrl: './floor-plan.html',
  styleUrl: './floor-plan.scss',
})
export class FloorPlan {
  project = input.required<Project>();

  activeTowerId = signal('');
  selectedUnitId = signal<string | null>(null);

  currentTowerId = computed(() => this.activeTowerId() || this.project().towers[0]?.id || '');

  unitsForTower = computed(() =>
    this.project().units.filter((u) => u.towerId === this.currentTowerId()),
  );

  selectedUnit = computed<ProjectUnit | undefined>(() => {
    const id = this.selectedUnitId();
    if (id) {
      return this.project().units.find((u) => u.id === id);
    }
    return this.unitsForTower().find((u) => u.status === 'selected') ?? this.unitsForTower()[0];
  });

  availableCount = computed(
    () => this.unitsForTower().filter((u) => u.status === 'available').length,
  );
  reservedCount = computed(
    () => this.unitsForTower().filter((u) => u.status === 'reserved').length,
  );
  soldCount = computed(() => this.unitsForTower().filter((u) => u.status === 'sold').length);

  selectTower(towerId: string): void {
    this.activeTowerId.set(towerId);
    this.selectedUnitId.set(null);
  }

  selectUnit(unitId: string): void {
    this.selectedUnitId.set(unitId);
  }

  fillFor(status: string): string {
    switch (status) {
      case 'available':
        return '#FFFFFF';
      case 'reserved':
        return '#F5EBD9';
      case 'selected':
        return '#16403A';
      default:
        return '#E6E1D6';
    }
  }

  strokeFor(status: string): string {
    switch (status) {
      case 'available':
        return '#16403A';
      case 'reserved':
        return '#A9762B';
      case 'selected':
        return '#0E2C28';
      default:
        return '#D5CFC1';
    }
  }

  labelColorFor(status: string): string {
    return status === 'selected' ? '#F7F4EE' : status === 'sold' ? '#5A6663' : '#14201D';
  }
}
