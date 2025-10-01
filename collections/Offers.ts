import type { CollectionConfig } from 'payload';
import { isAdminOrHasAccess } from './access/isAdminOrHasAccess';

export const Offers: CollectionConfig = {
  slug: 'offers',

  labels: {
    singular: {
      en: 'Offer',
      pl: 'Oferta',
      se: 'Erbjudande',
    },
    plural: {
      en: 'Offers',
      pl: 'Oferty',
      se: 'Erbjudanden',
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
      type: 'richText',
      required: true,
      localized: true,
      label: {
        en: 'Description',
        pl: 'Opis',
        se: 'Beskrivning',
      },
    },
    {
      name: 'type',
      type: 'text',
      required: true,
      localized: true,
      label: {
        en: 'Type',
        pl: 'Typ',
        se: 'Typ',
      },
      admin: {
        placeholder: {
          en: 'e.g., Cottages, Spa Package',
          pl: 'np. Domki, Pakiet spa',
          se: 't.ex. Stugor, Spa-paket',
        },
      },
    },
    {
      name: 'location',
      type: 'text',
      required: true,
      localized: true,
      label: {
        en: 'Location',
        pl: 'Lokalizacja',
        se: 'Plats',
      },
    },
    {
      name: 'pricePerPerson',
      type: 'text',
      required: true,
      localized: true,
      label: {
        en: 'Price per Person',
        pl: 'Cena za osobę',
        se: 'Pris per person',
      },
    },
    {
      name: 'ctaText',
      type: 'text',
      localized: true,
      label: {
        en: 'CTA Text',
        pl: 'Tekst CTA',
        se: 'CTA-text',
      },
    },
    {
      name: 'ctaLink',
      type: 'text',
      label: {
        en: 'CTA Link',
        pl: 'Link CTA',
        se: 'CTA-länk',
      },
      admin: {
        placeholder: {
          en: 'e.g., /booking or https://example.com',
          pl: 'np. /rezerwacja lub https://example.com',
          se: 't.ex. /bokning eller https://example.com',
        },
      },
    },
  ],
};
