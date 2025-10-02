import { isAdminOrHasAccess } from '@/collections/access/isAdminOrHasAccess';
import type { GlobalConfig } from 'payload';

export const Navigation: GlobalConfig = {
  slug: 'navigation',

  label: {
    pl: 'Nawigacja',
    en: 'Navigation',
    se: 'Navigering',
  },

  access: {
    read: () => true,
    update: isAdminOrHasAccess(),
  },

  fields: [
    {
      name: 'links',
      type: 'array',
      required: true,
      label: {
        en: 'Navigation Links',
        pl: 'Linki nawigacyjne',
        se: 'Navigationslänkar',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          localized: true,
          label: {
            en: 'Name',
            pl: 'Nazwa',
            se: 'Namn',
          },
        },
        {
          name: 'href',
          type: 'text',
          required: true,
          label: {
            en: 'URL',
            pl: 'Adres URL',
            se: 'URL',
          },
        },
        {
          name: 'openInNewTab',
          type: 'checkbox',
          defaultValue: false,
          label: {
            en: 'Open in New Tab',
            pl: 'Otwórz w nowej karcie',
            se: 'Öppna i ny flik',
          },
        },
        {
          name: 'order',
          type: 'number',
          required: true,
          label: {
            en: 'Order',
            pl: 'Kolejność',
            se: 'Ordning',
          },
        },
      ],
    },
  ],
};
