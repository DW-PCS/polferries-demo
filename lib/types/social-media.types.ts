export interface SocialMediaLink {
  id: string;
  platform: string;
  iconType: 'facebook' | 'instagram' | 'linkedin' | 'twitter' | 'youtube' | 'tiktok';
  url: string;
  order: number;
}
