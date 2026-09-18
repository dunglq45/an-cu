import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../../core/models/project.model';
import { MediaPlaceholder } from '../media-placeholder/media-placeholder';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink, MediaPlaceholder],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  project = input.required<Project>();

  link = computed(() => ['/du-an', this.project().slug]);
}
