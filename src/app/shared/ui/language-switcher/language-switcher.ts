import { Component, ElementRef, computed, inject, input, signal } from '@angular/core';
import { I18n } from '../../../core/i18n/i18n';
import { Lang } from '../../../core/i18n/translations';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.scss',
  host: {
    '(document:click)': 'onDocumentClick($event)',
    '(document:keydown.escape)': 'open.set(false)',
  },
})
export class LanguageSwitcher {
  protected readonly i18n = inject(I18n);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  onDark = input(false);
  protected readonly open = signal(false);
  protected readonly current = computed(
    () => this.i18n.languages.find((l) => l.code === this.i18n.lang())!,
  );

  protected select(lang: Lang) {
    this.i18n.setLang(lang);
    this.open.set(false);
  }

  protected onDocumentClick(event: Event) {
    if (!this.host.nativeElement.contains(event.target as Node)) this.open.set(false);
  }
}
