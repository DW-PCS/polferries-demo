import type { CollectionConfig } from 'payload';
import { isAdminOrHasAccess } from './access/isAdminOrHasAccess';

export const Navigation: CollectionConfig = {
  slug: 'navigation',

  labels: {
    singular: {
      pl: 'Nawigacja',
      en: 'Navigation',
      se: 'Navigering',
    },
    plural: {
      pl: 'Nawigacja',
      en: 'Navigation',
      se: 'Navigering',
    },
  },

  access: {
    read: () => true,
    create: isAdminOrHasAccess(),
    update: isAdminOrHasAccess(),
    delete: isAdminOrHasAccess(),
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
  ],
};
