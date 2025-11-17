import { isAdminOrHasAccess } from '@/collections/access/isAdminOrHasAccess';
import type { GlobalConfig } from 'payload';

export const MainPage: GlobalConfig = {
  slug: 'MainPage',

  label: {
    en: 'Main Page',
    pl: 'Strona główna',
    se: 'Startsida',
  },
  access: {
    read: () => true,
    update: isAdminOrHasAccess(),
  },

  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: {
            en: 'Hero Section',
            pl: 'Sekcja Hero',
            se: 'Hero-sektion',
          },
          fields: [
            {
              name: 'heroTagline',
              type: 'text',
              required: true,
              localized: true,
              label: {
                en: 'Hero Tagline',
                pl: 'Główny napis Hero',
                se: 'Hero-tagline',
              },
            },
            {
              name: 'heroDescription',
              type: 'textarea',
              required: true,
              localized: true,
              label: {
                en: 'Hero Description',
                pl: 'Opis Hero',
                se: 'Hero-beskrivning',
              },
            },
            {
              name: 'heroCTAText',
              type: 'text',
              required: true,
              localized: true,
              label: {
                en: 'Primary CTA Button Text',
                pl: 'Tekst głównego przycisku CTA',
                se: 'Primär CTA-knapptext',
              },
            },
            {
              name: 'heroSecondaryCTAText',
              type: 'text',
              required: true,
              localized: true,
              label: {
                en: 'Secondary CTA Button Text',
                pl: 'Tekst drugiego przycisku CTA',
                se: 'Sekundär CTA-knapptext',
              },
            },
          ],
        },
        {
          label: {
            en: 'Features Section',
            pl: 'Sekcja Funkcji',
            se: 'Funktioner-sektion',
          },
          fields: [
            {
              name: 'features',
              type: 'array',
              required: true,
              minRows: 3,
              maxRows: 3,
              label: {
                en: 'Features',
                pl: 'Funkcje',
                se: 'Funktioner',
              },
              fields: [
                {
                  name: 'icon',
                  type: 'text',
                  required: true,
                  label: {
                    en: 'Icon (emoji)',
                    pl: 'Ikona (emoji)',
                    se: 'Ikon (emoji)',
                  },
                },
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                  localized: true,
                  label: {
                    en: 'Title',
                    pl: 'Tytuł',
                    se: 'Titel',
                  },
                },
                {
                  name: 'description',
                  type: 'textarea',
                  required: true,
                  localized: true,
                  label: {
                    en: 'Description',
                    pl: 'Opis',
                    se: 'Beskrivning',
                  },
                },
                {
                  name: 'linkText',
                  type: 'text',
                  required: true,
                  localized: true,
                  label: {
                    en: 'Link Text',
                    pl: 'Tekst linku',
                    se: 'Länktext',
                  },
                },
                {
                  name: 'linkUrl',
                  type: 'text',
                  required: true,
                  label: {
                    en: 'Link URL',
                    pl: 'URL linku',
                    se: 'Länk-URL',
                  },
                },
              ],
            },
          ],
        },
        {
          label: {
            en: 'Statistics Section',
            pl: 'Sekcja Statystyk',
            se: 'Statistik-sektion',
          },
          fields: [
            {
              name: 'stats',
              type: 'array',
              required: true,
              minRows: 4,
              maxRows: 4,
              label: {
                en: 'Statistics',
                pl: 'Statystyki',
                se: 'Statistik',
              },
              fields: [
                {
                  name: 'value',
                  type: 'text',
                  required: true,
                  label: {
                    en: 'Value (e.g., "30+" or "500K+")',
                    pl: 'Wartość (np. "30+" lub "500K+")',
                    se: 'Värde (t.ex. "30+" eller "500K+")',
                  },
                },
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                  localized: true,
                  label: {
                    en: 'Label',
                    pl: 'Etykieta',
                    se: 'Etikett',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
