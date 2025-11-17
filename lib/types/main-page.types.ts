export interface Feature {
  icon: string;
  title: string;
  description: string;
  linkUrl: string;
  linkText: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface MainPageData {
  heroTagline?: string;
  heroDescription?: string;
  heroCTAText?: string;
  heroSecondaryCTAText?: string;
  features?: Feature[];
  stats?: Stat[];
}
