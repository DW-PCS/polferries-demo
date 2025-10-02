import type { CollectionConfig } from "payload";
import { isAdminOrHasAccess } from "./access/isAdminOrHasAccess";

export const Promotions: CollectionConfig = {
  slug: "promotions",

  labels: {
    singular: {
      en: "Promotion",
      pl: "Promocja",
      se: "Specialerbjudande",
    },
    plural: {
      en: "Promotion",
      pl: "Promocje",
      se: "Kampanjer",
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
      name: "title",
      type: "text",
      required: true,
      localized: true,
      label: {
        en: "Title",
        pl: "Tytuł",
        se: "Titel",
      },
    },
    {
      name: "titlePhoto",
      type: "upload",
      relationTo: "media",
      label: {
        en: "Title Image",
        pl: "Zdjęcie tytułowe",
        se: "Omslagsfoto",
      },
    },
    {
      name: "price",
      type: "number",
      required: true,
      min: 0,
      label: {
        en: "Price",
        pl: "Cena",
        se: "Pris",
      },
    },
    {
      name: "subtitle",
      type: "text",
      required: true,
      localized: true,
      label: {
        en: "Subtitle",
        pl: "Podtytuł",
        se: "Texta",
      },
    },
    {
      name: "shortDescription",
      type: "textarea",
      localized: true,
      label: {
        en: "Short Description",
        pl: "Krótki opis",
        se: "Kort beskrivning",
      },
    },
    {
      name: "fullDescription",
      type: "richText",
      localized: true,
      label: {
        en: "Full Description",
        pl: "Pełny opis promocji",
        se: "Fullständig beskrivning av kampanjen",
      },
    },
  ],
};
