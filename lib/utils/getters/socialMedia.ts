import { payload } from '@/config';

interface SocialMediaLink {
  id: string;
  platform: string;
  iconType: 'facebook' | 'instagram' | 'linkedin' | 'twitter' | 'youtube' | 'tiktok';
  url: string;
  order: number;
}

const getSocialMedia = async () => {
  try {
    const socialMedia = await payload.findGlobal({
      slug: 'social-media',
    });

    const links: SocialMediaLink[] = (socialMedia?.links || []).map((link: any) => ({
      id: link.id,
      platform: link.platform,
      iconType: link.iconType,
      url: link.url,
      order: link.order,
    }));

    return { links };
  } catch (error) {
    console.error('Error fetching social media:', error);
    return { links: [] };
  }
};

export default getSocialMedia;
