import { writable, derived } from 'svelte/store';
import { translations } from './translations';
import { themes, defaultTheme, applyTheme } from './theme';

export const language = writable('uk');
export const currentTheme = writable(defaultTheme);

export const t = derived(language, ($language) => translations[$language]);

export const theme = derived(currentTheme, ($currentTheme) => {
  return themes[$currentTheme];
});

// Subscribe to theme changes and apply them
currentTheme.subscribe((themeName) => {
  if (typeof window !== 'undefined') {
    applyTheme(themeName);
  }
});
