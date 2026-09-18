import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export type HeaderNavKey = 'mua-ban' | 'cho-thue' | 'du-an' | 'moi-gioi' | 'tin-tuc';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  activeNav = input<HeaderNavKey | null>(null);
  ctaLabel = input('Ký gửi BĐS');
  showPhoneIcon = input(false);
}
