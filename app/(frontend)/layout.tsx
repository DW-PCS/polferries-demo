import LayoutWrapper from '@/components/LayoutWrapper';
import getFooter from '@/lib/utils/getters/footer';
import getNavigation from '@/lib/utils/getters/navigation';
import getSocialMedia from '@/lib/utils/getters/socialMedia';

export const revalidate = 30;

export default async function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = 'pl';
  const { links } = await getNavigation(locale);
  const footerData = await getFooter(locale);
  const { links: socialMediaLinks } = await getSocialMedia();

  return (
    <LayoutWrapper
      navigationLinks={links}
      footerData={footerData}
      socialMediaLinks={socialMediaLinks}
    >
      {children}
    </LayoutWrapper>
  );
}
