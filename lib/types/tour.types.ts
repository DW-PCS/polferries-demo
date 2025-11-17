export interface MediaObject {
  id: string;
  url: string;
  alt?: string;
}

export interface DailyProgram {
  id: string;
  day: number;
  description: any;
}

export interface AvailableDate {
  id: string;
  date: string;
}

export interface Tour {
  id: string;
  title: string;
  shortDescription?: string;
  fullDescription?: any;
  featuredMedia?: MediaObject;
  duration?: string;
  departurePort?: string;
  pricePerPerson?: number;
  groupPrice?: number;
  dailyProgram?: DailyProgram[];
  availableDates?: AvailableDate[];
  gallery?: MediaObject[];
}
