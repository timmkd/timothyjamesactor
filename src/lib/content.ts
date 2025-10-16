import credits from '@/content/credits.json';
import profile from '@/content/profile.json';
import training from '@/content/training.json';
import videos from '@/content/videos.json';
import images from '@/content/images.json';
import tripletaketim from '@/content/tripletaketim.json';

export interface Credit {
  year: number;
  type: string;
  production: string;
  role: string;
  company: string | null;
  director: string;
}

export interface Profile {
  name: string;
  pronouns: string;
  gender: string;
  ageRange: string;
  heightCm: number;
  baseLocation: string;
  nationality: string;
  ethnicity: string;
  website: string;
  agent: {
    name: string;
    contactName: string;
    phone: string;
    email: string;
    website: string;
  };
  summary: string;
  physical: {
    hairColor: string;
    eyeColor: string;
  };
  languages: string[];
  accents: string[];
  skills: string[];
  singingRange: string;
}

export interface Training {
  years: string;
  institution: string;
  course: string;
  field: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  type: string;
  embedUrl: string;
  thumbnail: string;
}

export interface Videos {
  showreels: Video[];
  reels: Video[];
  linktree: string;
}

export interface ImageItem {
  src: string;
  alt: string;
  title?: string;
}

export interface Images {
  headshots: ImageItem[];
  productionImages: ImageItem[];
}

export interface TripleTakeVideo {
  take: number;
  label: string;
  youtubeId: string;
  description: string;
}

export interface TripleTakeScene {
  id: string;
  month: string;
  year: number;
  title: string;
  description: string;
  videos: TripleTakeVideo[];
  whyThisScene: string;
  technicalExploration: string;
  isPlaceholder?: boolean;
}

export interface TripleTakeCampaign {
  title: string;
  subtitle: string;
  startDate: string;
  endDate: string;
  mission: string[];
  heroText: string;
  descriptionTitle?: string;
  descriptionParagraphs?: string[];
}

export interface TripleTakeTimData {
  campaign: TripleTakeCampaign;
  scenes: TripleTakeScene[];
}

export const content = {
  credits: credits as Credit[],
  profile: profile as Profile,
  training: training as Training[],
  videos: videos as Videos,
  images: images as Images,
  tripletaketim: tripletaketim as TripleTakeTimData,
};

// Utility functions for filtering and sorting credits
export const getCreditsByType = (type: string): Credit[] => {
  return credits.filter(credit => credit.type === type);
};

export const getCreditsByYear = (year: number): Credit[] => {
  return credits.filter(credit => credit.year === year);
};

export const getCreditsByYearRange = (startYear: number, endYear: number): Credit[] => {
  return credits.filter(credit => credit.year >= startYear && credit.year <= endYear);
};

export const getUniqueCreditTypes = (): string[] => {
  return [...new Set(credits.map(credit => credit.type))];
};

export const getUniqueYears = (): number[] => {
  return [...new Set(credits.map(credit => credit.year))].sort((a, b) => b - a);
}; 