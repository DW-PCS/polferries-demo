import type { CollectionConfig } from 'payload';
import { isAdminOrHasAccess } from './access/isAdminOrHasAccess';

export const Trips: CollectionConfig = {
  slug: 'trips',

  labels: {
    singular: {
      en: 'Trip',
      pl: 'Wycieczka',
      se: 'Resa',
    },
    plural: {
      en: 'Trips',
      pl: 'Wycieczki',
      se: 'Resor',
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
      name: 'featuredMedia',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: {
        en: 'Featured Image/Video',
        pl: 'Zdjęcie tytułowe / filmik',
        se: 'Utvald bild/video',
      },
    },
    {
      name: 'availableDates',
      type: 'array',
      required: true,
      label: {
        en: 'Available Dates',
        pl: 'Dostępne terminy',
        se: 'Tillgängliga datum',
      },
      fields: [
        {
          name: 'date',
          type: 'date',
          required: true,
          label: {
            en: 'Date',
            pl: 'Data',
            se: 'Datum',
          },
        },
      ],
    },
    {
      name: 'pricePerPerson',
      type: 'number',
      required: true,
      min: 0,
      label: {
        en: 'Price per Person',
        pl: 'Cena za osobę',
        se: 'Pris per person',
      },
    },
    {
      name: 'groupPrice',
      type: 'number',
      min: 0,
      label: {
        en: 'Group Price',
        pl: 'Cena grupowa',
        se: 'Grupppris',
      },
    },
    {
      name: 'duration',
      type: 'text',
      required: true,
      localized: true,
      label: {
        en: 'Duration',
        pl: 'Czas wycieczki',
        se: 'Varaktighet',
      },
      admin: {
        placeholder: {
          en: 'e.g., 3 days / 2 nights',
          pl: 'np. 3 dni / 2 noce',
          se: 't.ex. 3 dagar / 2 nätter',
        },
      },
    },
    {
      name: 'departurePort',
      type: 'text',
      required: true,
      localized: true,
      label: {
        en: 'Departure Port',
        pl: 'Port wypłynięcia',
        se: 'Avgångshamn',
      },
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      localized: true,
      label: {
        en: 'Short Description',
        pl: 'Krótki opis',
        se: 'Kort beskrivning',
      },
    },
    {
      name: 'dailyProgram',
      type: 'array',
      localized: true,
      label: {
        en: 'Daily Program',
        pl: 'Program dla każdego dnia',
        se: 'Dagligt program',
      },
      fields: [
        {
          name: 'day',
          type: 'number',
          required: true,
          min: 1,
          label: {
            en: 'Day',
            pl: 'Dzień',
            se: 'Dag',
          },
        },
        {
          name: 'description',
          type: 'richText',
          required: true,
          label: {
            en: 'Day Description',
            pl: 'Opis dnia',
            se: 'Dagsbeskrivning',
          },
        },
      ],
    },
    {
      name: 'gallery',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
      label: {
        en: 'Image Gallery',
        pl: 'Karuzela zdjęć',
        se: 'Bildgalleri',
      },
    },
    {
      name: 'fullDescription',
      type: 'richText',
      localized: true,
      label: {
        en: 'Full Description',
        pl: 'Pełny opis wycieczki',
        se: 'Fullständig beskrivning',
      },
    },
  ],
};
