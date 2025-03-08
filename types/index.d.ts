export interface SocialLink {
    name: string;
    icon: `bi-${string}`;
    url: string;
  }
  
  export interface Stat {
    label: string;
    value: string;
    icon?: `bi-${string}`;
  }
  
export interface Award {
    title: string;
    year: string;
    description: string;
    icon?: `bi-${string}`;
  }

export interface BlogPost {
    title: string;
    author: string;
    date: string;
    category: string;
    image: string;
    link: string;
    excerpt?: string;
  }

export interface ClientLogo {
    image: string;
    alt?: string;
  }

  
export interface ContactInfo {
    email: string;
    phone: string;
    address?: string;
  }

export interface HeroData {
    id: string;
    className: string;
    text: string;
    image?: string;
    button?: {
      text: string;
      link: string;
    };
}

export type Project = {
  id: number;
  title: string;
  categories: string[];
  image: string;
  description?: string;
  link?: string;
  duration?: string;
  services?: string[];
  client?: string;
  projectLink?: string;
};

export type TestimonialType = {
	id: number;
	name: string;
	position: string;
	quote: string;
	image: string;
};

export export type Service = {
  id: number;
  number: string;
  icon: string;
  title: string;
  description: string;
};


export type Direction = 'prev' | 'next';
export interface ClientLogo {
    image: string;
    alt?: string;
}

export type ProjectInfoItem = {
  title: string;
  content: React.ReactNode;
};