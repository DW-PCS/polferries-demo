import type { CollectionConfig } from "payload";
import { isAdminOrHasAccess } from "./access/isAdminOrHasAccess";

export const Attractions: CollectionConfig = {
  slug: "attractions",

  labels: {
    singular: {
      en: "Attraction",
      pl: "Atrakcja",
      se: "Attraktion",
    },
    plural: {
      en: "Attractions",
      pl: "Atrakcje",
      se: "Attraktioner",
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
      name: "photo",
      type: "upload",
      relationTo: "media",
      label: {
        en: "Image",
        pl: "Zdjęcie",
        se: "Bild",
      },
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      localized: true,
      label: {
        en: "Description",
        pl: "Opis",
        se: "Beskrivning",
      },
    },
    {
      name: "attractions",
      type: "array",
      required: true,
      label: {
        en: "Attractions",
        pl: "Atrakcje",
        se: "Attraktioner",
      },
      fields: [
        {
          name: "photo",
          type: "upload",
          relationTo: "media",
          label: {
            en: "Image",
            pl: "Zdjęcie",
            se: "Bild",
          },
        },
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
          name: "description",
          type: "textarea",
          required: true,
          localized: true,
          label: {
            en: "Description",
            pl: "Opis",
            se: "Beskrivning",
          },
        },
        {
          name: "mapLink",
          type: "text",
          required: true,
          localized: true,
          label: {
            en: "Map link",
            pl: "Link do mapy",
            se: "Länk till kartan",
          },
        },
      ],
    },
  ],
};
