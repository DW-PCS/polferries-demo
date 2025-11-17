import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres';
import {
  BlockquoteFeature,
  BoldFeature,
  EXPERIMENTAL_TableFeature,
  FixedToolbarFeature,
  HeadingFeature,
  ItalicFeature,
  lexicalEditor,
  LinkFeature,
  OrderedListFeature,
  StrikethroughFeature,
  UnderlineFeature,
  UnorderedListFeature,
} from '@payloadcms/richtext-lexical';
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob';
import { en } from '@payloadcms/translations/languages/en';
import { pl } from '@payloadcms/translations/languages/pl';
import { sv } from '@payloadcms/translations/languages/sv';
import path from 'path';
import { buildConfig } from 'payload';
import sharp from 'sharp';

import { Footer, Media, Navigation, Trips, Users } from './collections/index';

import { MainPage } from './globals/MainPage';
import { SocialMedia } from './globals/SocialMedia';

export default buildConfig({
  globals: [MainPage, Footer, Navigation, SocialMedia],
  collections: [Users, Media, Trips],
  plugins: [
    vercelBlobStorage({
      enabled: true,
      collections: {
        media: true,
        'media-with-prefix': {
          prefix: 'my-prefix',
        },
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
  i18n: {
    supportedLanguages: { en, pl, sv },
    fallbackLanguage: 'pl',
  },
  localization: {
    locales: [
      { label: 'Angielski', code: 'en' },
      { label: 'Polski', code: 'pl' },
      { label: 'Szwecki', code: 'se' },
    ],
    defaultLocale: 'pl',
    fallback: true,
  },
  secret: process.env.PAYLOAD_SECRET || '',
  db: vercelPostgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
  sharp,
  cors: {
    origins: ['http://localhost:3000'],
    headers: ['x-custom-header'],
  },
  admin: {
    meta: {
      icons: {
        icon: '/icon.ico',
      },
    },
    user: Users.slug,
    components: {
      graphics: {
        Logo: '@/components/ui/logo#Logo',
        Icon: '@/components/ui/icon#Icon',
      },
    },
  },
  typescript: {
    autoGenerate: true,
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      FixedToolbarFeature(),
      HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
      BoldFeature(),
      ItalicFeature(),
      UnderlineFeature(),
      StrikethroughFeature(),
      LinkFeature(),
      UnorderedListFeature(),
      OrderedListFeature(),
      BlockquoteFeature(),
      EXPERIMENTAL_TableFeature(),
    ],
  }),
});
