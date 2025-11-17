export interface FooterLink {
  id: string;
  text: string;
  url: string;
  openInNewTab?: boolean;
  order: number;
}

export interface FooterColumn {
  id: string;
  title: string;
  order: number;
  links: FooterLink[];
}

export interface FooterData {
  companyDescription: string;
  copyright: string;
  columns: FooterColumn[];
}
