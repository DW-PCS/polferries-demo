import { isAdminOrHasAccess } from '@/collections/access/isAdminOrHasAccess';
import type { GlobalConfig } from 'payload';

export const Footer: GlobalConfig = {
  slug: 'footer',

  label: {
    pl: 'Stopka',
    en: 'Footer',
    se: 'Sidfot',
  },

  access: {
    read: () => true,
    update: isAdminOrHasAccess(),
  },

  fields: [
    {
      name: 'companyDescription',
      type: 'textarea',
      required: true,
      localized: true,
      label: {
        en: 'Company Description',
        pl: 'Opis firmy',
        se: 'Företagsbeskrivning',
      },
    },
    {
      name: 'copyright',
      type: 'text',
      required: true,
      localized: true,
      label: {
        en: 'Copyright',
        pl: 'Prawa autorskie',
        se: 'Upphovsrätt',
      },
    },
    {
      name: 'columns',
      type: 'array',
      required: true,
      maxRows: 3,
      label: {
        en: 'Footer Columns',
        pl: 'Kolumny stopki',
        se: 'Sidfotskolumner',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          localized: true,
          label: {
            en: 'Column Title',
            pl: 'Tytuł kolumny',
            se: 'Kolumntitel',
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
        {
          name: 'links',
          type: 'array',
          required: true,
          label: {
            en: 'Links',
            pl: 'Linki',
            se: 'Länkar',
          },
          fields: [
            {
              name: 'text',
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
              name: 'url',
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
    },
  ],
};
