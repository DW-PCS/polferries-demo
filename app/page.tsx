import MainPage from '@/components/pages/main-page';
import LayoutWrapper from '@/components/ui/LayoutWrapper';
import { payload } from '@/config';
import { MainPageData } from '@/lib/types';
import getFooter from '@/lib/utils/getters/footer';
import getNavigation from '@/lib/utils/getters/navigation';
import getSocialMedia from '@/lib/utils/getters/socialMedia';

export default async function Home() {
  const locale = 'pl';

  const data = await payload.findGlobal({
    slug: 'MainPage',
    locale: locale as 'pl' | 'en' | 'se',
  });

  const { links } = await getNavigation(locale);
  const footerData = await getFooter(locale);
  const { links: socialMediaLinks } = await getSocialMedia();

  return (
    <LayoutWrapper
      navigationLinks={links}
      footerData={footerData}
      socialMediaLinks={socialMediaLinks}
    >
      <MainPage data={data as MainPageData} />
    </LayoutWrapper>
  );
}
