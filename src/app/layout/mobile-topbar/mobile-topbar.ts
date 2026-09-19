import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18n } from '../../core/i18n/i18n';
import { LanguageSwitcher } from '../../shared/ui/language-switcher/language-switcher';

@Component({
  selector: 'app-mobile-topbar',
  imports: [RouterLink, LanguageSwitcher],
  templateUrl: './mobile-topbar.html',
  styleUrl: './mobile-topbar.scss',
})
export class MobileTopbar {
  protected readonly i18n = inject(I18n);
}
