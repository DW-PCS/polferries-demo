import MainPage from '@/components/pages/main-page';
import { payload } from '@/config';
import getNavigation from '@/lib/utils/getters/navigation';
import getFooter from '@/lib/utils/getters/footer';
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
    <MainPage
      data={data}
      navigationLinks={links}
      footerData={footerData}
      socialMediaLinks={socialMediaLinks}
    />
  );
}
