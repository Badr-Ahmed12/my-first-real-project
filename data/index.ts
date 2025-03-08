import { SocialLink, Stat, Service , Award, BlogPost, ContactInfo, HeroData , ClientLogo , TestimonialType } from "../types";

export const skills: string[] = [
  "Web Development",
  "UI & UX Design",
  "Marketing",
  "SEO",
  "Management",
];

export const socialLinks: SocialLink[] = [
  { name: "Facebook", icon: "bi-facebook", url: "#" },
  { name: "Twitter", icon: "bi-twitter-x", url: "#" },
  { name: "Instagram", icon: "bi-instagram", url: "#" },
];

export const stats: Stat[] = [
  { label: "Projects Done", value: "432" },
  { label: "Years of Experience", value: "13+" },
  { label: "Worldwide Clients", value: "900" },
];

export const awardsData: Award[] = [
  { title: "Best Designer of the Month", year: "2024", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore" },
  { title: "The True Gem", year: "2023", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et" },
  { title: "First Class Performer", year: "2022", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore" },
  { title: "Customers Favourite", year: "2021", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore" },
];

export const blogPosts: BlogPost[] = [
  {
    title: "Blog Post Title",
    author: "admin",
    date: "Nov 8",
    category: "Category",
    image: "assets/images/blog-img.jpg",
    link: "blog-single.html",
  },
  {
    title: "Blog Post Title",
    author: "admin",
    date: "Nov 8",
    category: "Category",
    image: "assets/images/blog-img.jpg",
    link: "blog-single.html",
  },
  {
    title: "Blog Post Title",
    author: "admin",
    date: "Nov 8",
    category: "Category",
    image: "assets/images/blog-img.jpg",
    link: "blog-single.html",
  },
];

export const clients: ClientLogo[] = [
  { image: "assets/images/client-logo1.jpg", alt: "Client Logo 1" },
  { image: "assets/images/client-logo2.jpg", alt: "Client Logo 2" },
  { image: "assets/images/client-logo3.jpg", alt: "Client Logo 3" },
  { image: "assets/images/client-logo4.jpg", alt: "Client Logo 4" },
  { image: "assets/images/client-logo5.jpg", alt: "Client Logo 5" },
  { image: "assets/images/client-logo6.jpg", alt: "Client Logo 6" },
];

export const contactInfo: ContactInfo = {
  email: "contact@flatheme.net",
  phone: "+123 456 7890",
};

export const heroData: HeroData = {
  id: "hero",
  className: "py-24 md:py-28 xl:py-32 text-center",
  text: "Arthur Jackson",
  image: "/assets/images/hero-avatar.jpg",
};


export const testimonials: TestimonialType[] = [
  {
  id: 1,
  name: "Alexander Warren",
  position: "CTO - Company",
  quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  image: "assets/images/testimonial-avatar.jpg"
  },
  {
  id: 2,
  name: "Jane Doe",
  position: "CEO - Another Company",
  quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  image: "assets/images/testimonial-avatar2.jpg"
  }
];

export const services: Service[] = [
  {
    id: 1,
    number: '01/',
    icon: 'bi bi-brush',
    title: 'Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut',
  },
  {
    id: 2,
    number: '02/',
    icon: 'bi bi-code-slash',
    title: 'Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut',
  },
  {
    id: 3,
    number: '03/',
    icon: 'bi bi-laptop',
    title: 'Marketing',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut',
  },
];
