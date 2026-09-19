import { Component, input } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { MobileTopbar } from '../mobile-topbar/mobile-topbar';
import { MobileBottomNav } from '../mobile-bottom-nav/mobile-bottom-nav';
import { TranslationKey } from '../../core/i18n/translations';
import { HeaderNavKey } from '../header/header';

@Component({
  selector: 'app-page-shell',
  imports: [Header, Footer, MobileTopbar, MobileBottomNav],
  templateUrl: './page-shell.html',
  styleUrl: './page-shell.scss',
})
export class PageShell {
  footerVariant = input<'full' | 'compact' | 'none'>('full');
  showBottomNav = input(false);
  activeNav = input<HeaderNavKey | null>(null);
  ctaKey = input<TranslationKey>('cta.consign');
  showPhoneIcon = input(false);
}
