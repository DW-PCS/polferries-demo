import { isAdminOrHasAccess } from '@/collections/access/isAdminOrHasAccess';
import type { GlobalConfig } from 'payload';

export const SocialMedia: GlobalConfig = {
  slug: 'social-media',

  label: {
    pl: 'Media społecznościowe',
    en: 'Social Media',
    se: 'Sociala medier',
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
      maxRows: 6,
      label: {
        en: 'Social Media Links',
        pl: 'Linki do mediów społecznościowych',
        se: 'Sociala medielänkar',
      },
      fields: [
        {
          name: 'platform',
          type: 'text',
          required: true,
          label: {
            en: 'Platform Name',
            pl: 'Nazwa platformy',
            se: 'Plattformsnamn',
          },
        },
        {
          name: 'iconType',
          type: 'select',
          required: true,
          options: [
            {
              label: 'Facebook',
              value: 'facebook',
            },
            {
              label: 'Instagram',
              value: 'instagram',
            },
            {
              label: 'LinkedIn',
              value: 'linkedin',
            },
            {
              label: 'Twitter',
              value: 'twitter',
            },
            {
              label: 'YouTube',
              value: 'youtube',
            },
            {
              label: 'TikTok',
              value: 'tiktok',
            },
          ],
          label: {
            en: 'Icon Type',
            pl: 'Typ ikony',
            se: 'Ikontyp',
          },
        },
        {
          name: 'url',
          type: 'text',
          required: true,
          label: {
            en: 'Profile URL',
            pl: 'Adres URL profilu',
            se: 'Profil-URL',
          },
        },
        {
          name: 'order',
          type: 'number',
          required: true,
          label: {
            en: 'Display Order',
            pl: 'Kolejność wyświetlania',
            se: 'Visningsordning',
          },
        },
      ],
    },
  ],
};
