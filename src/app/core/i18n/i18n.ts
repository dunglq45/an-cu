import { DOCUMENT } from '@angular/common';
import { Injectable, afterNextRender, effect, inject, signal } from '@angular/core';
import { LANGUAGES, Lang, TRANSLATIONS, TranslationKey } from './translations';

const STORAGE_KEY = 'an-cu:lang';

@Injectable({ providedIn: 'root' })
export class I18n {
  private readonly document = inject(DOCUMENT);

  readonly languages = LANGUAGES;
  readonly lang = signal<Lang>('vi');

  constructor() {
    // Restore the saved language only after hydration so SSR and client markup match.
    afterNextRender(() => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (this.languages.some((l) => l.code === saved)) this.lang.set(saved as Lang);
      } catch {}
    });

    effect(() => {
      this.document.documentElement.lang = this.lang();
    });
  }

  t(key: TranslationKey): string {
    return TRANSLATIONS[this.lang()][key];
  }

  setLang(lang: Lang) {
    this.lang.set(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
  }
}
