import { Component, input } from '@angular/core';

@Component({
  selector: 'app-avatar-initials',
  templateUrl: './avatar-initials.html',
  styleUrl: './avatar-initials.scss',
})
export class AvatarInitials {
  initials = input.required<string>();
  variant = input<'primary' | 'accent'>('primary');
  size = input(40);
}
