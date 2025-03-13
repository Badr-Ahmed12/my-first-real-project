// data.ts
export interface ProjectInfoItem {
    label: string;
    type: "list" | "text" | "link";
    items?: string[];
    text?: string;
    href?: string;
  }
  
  export interface ProjectData {
    id: string;
    title: string;
    description: string;
    info: ProjectInfoItem[];
    content: string;
    wideImage: string;
    lightboxImages: { src: string; alt: string }[];
    videoLink: string;
  }
  
  export const projectsData: ProjectData[] = [
    {
      id: "1",
      title: "Project Title One",
      description:
        " sit amet, consectetur adipisicing elit. تفاصيل المشروع بتتغير علي حسب ال id.",
      info: [
        {
          label: "Services:",
          type: "list",
          items: ["Item 1", "Item 2"],
        },
        {
          label: "Client:",
          type: "text",
          text: "FlaTheme",
        },
        {
          label: "Project link:",
          type: "link",
          text: "www.flatheme.net",
          href: "#",
        },
        {
          label: "Duration:",
          type: "text",
          text: "124 Hours",
        },
      ],
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      wideImage: "assets/images/portfolio-img-wide.jpg",
      lightboxImages: [
        { src: "/blog-img-wide.jpg", alt: "Portfolio Image" },
      ],
      videoLink: "https://www.youtube.com/watch?v=V8yu12uRpBA",
    },
   ];
  
