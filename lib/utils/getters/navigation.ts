import { payload } from '@/config';

interface NavLink {
  id: string;
  name: string;
  href: string;
  openInNewTab?: boolean;
  order: number;
}

const getNavigation = async (locale = 'pl') => {
  try {
    const navigation = await payload.findGlobal({
      slug: 'navigation',
      locale: locale as 'pl' | 'en' | 'se',
    });

    // Extract links from the global and ensure proper typing
    const links: NavLink[] = (navigation?.links || []).map((link: any) => ({
      id: link.id,
      name: link.name,
      href: link.href,
      openInNewTab: link.openInNewTab,
      order: link.order,
    }));

    return { links };
  } catch (error) {
    console.error('Error fetching navigation:', error);
    return { links: [] };
  }
};

export default getNavigation;
