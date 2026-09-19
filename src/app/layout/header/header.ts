import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18n } from '../../core/i18n/i18n';
import { TranslationKey } from '../../core/i18n/translations';
import { LanguageSwitcher } from '../../shared/ui/language-switcher/language-switcher';

export type HeaderNavKey = 'mua-ban' | 'cho-thue' | 'du-an' | 'moi-gioi' | 'tin-tuc';

@Component({
  selector: 'app-header',
  imports: [RouterLink, LanguageSwitcher],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly i18n = inject(I18n);

  activeNav = input<HeaderNavKey | null>(null);
  ctaKey = input<TranslationKey>('cta.consign');
  showPhoneIcon = input(false);
}
