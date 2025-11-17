import { payload } from '@/config';

interface FooterLink {
  id: string;
  text: string;
  url: string;
  openInNewTab?: boolean;
  order: number;
}

interface FooterColumn {
  id: string;
  title: string;
  order: number;
  links: FooterLink[];
}

interface FooterData {
  companyDescription: string;
  copyright: string;
  columns: FooterColumn[];
}

const getFooter = async (locale = 'pl') => {
  try {
    const footer = await payload.findGlobal({
      slug: 'footer',
      locale: locale as 'pl' | 'en' | 'se',
    });

    const footerData: FooterData = {
      companyDescription: footer?.companyDescription || '',
      copyright: footer?.copyright || '© 2025 PolFerries - Polska Żegluga Bałtycka SA',
      columns: (footer?.columns || []).map((column: any) => ({
        id: column.id,
        title: column.title,
        order: column.order,
        links: (column.links || []).map((link: any) => ({
          id: link.id,
          text: link.text,
          url: link.url,
          openInNewTab: link.openInNewTab,
          order: link.order,
        })),
      })),
    };

    return footerData;
  } catch (error) {
    console.error('Error fetching footer:', error);
    return {
      companyDescription: '',
      copyright: '© 2025 PolFerries - Polska Żegluga Bałtycka SA',
      columns: [],
    };
  }
};

export default getFooter;
