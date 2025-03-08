import { Project , Direction } from '../types'

export default function Portfolio() {
  const projects: Project[] = [
    { id: 1, title: "Project Title 1", categories: ["Web Design", "Development", "UI/UX"], image: "assets/images/portfolio-img.jpg" },
    { id: 2, title: "Project Title 2", categories: ["Mobile App", "React Native", "Firebase"], image: "assets/images/portfolio-img.jpg" },
    { id: 3, title: "Project Title 3", categories: ["E-commerce", "Next.js", "Tailwind"], image: "assets/images/portfolio-img.jpg" },
  ];

  return (
    <section id="portfolio" className="px-5 lg:px-10">
      <div className="bg-darkBg rounded-2xl overflow-hidden py-20">
        <div className="container mx-auto max-w-[1320px] px-5">
          {/* Header Section */}
          <PortfolioHeader />
          
          {/* Navigation Controls */}
          <div className="space-x-1 mt-6">
            <NavigationButton direction="prev" />
            <NavigationButton direction="next" />
          </div>

          {/* Projects Slider */}
          <div className="swiper portfolio-slider overflow-visible mt-6 xl:mt-14">
            <div className="swiper-wrapper">
              {projects.map(project => (
                <PortfolioItem key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Sub-components
const PortfolioHeader = () => (
  <div className="md:w-4/5 lg:w-3/4 md:mx-auto">
    <h6 className="section-subtitle">Portfolio</h6>
    <h2 className="section-title">
      Recent <span className="gradient-text">Works</span>
    </h2>
    <p className="section-description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </div>
);

const NavigationButton = ({ direction }: { direction: Direction }) => (
  <button className={`swiper-portfolio-${direction} nav-button`}>
    <i className={`bi bi-arrow-${direction === 'prev' ? 'left' : 'right'}`} />
  </button>
);

const PortfolioItem = ({ project }: { project: Project }) => (
  <div className="swiper-slide">
    <div className="group/portfolio-box">
      <ProjectImage image={project.image} />
      <ProjectDetails title={project.title} categories={project.categories} />
    </div>
  </div>
);

const ProjectImage = ({ image }: { image: string }) => (
  <div className="overflow-hidden relative rounded-2xl">
    <a className="project-image-link" href="portfolio-single.html">
      <img 
        src={image} 
        alt="Project preview" 
        className="group-hover:scale-105 transition-transform duration-500 ease-custom"
      />
    </a>
  </div>
);

const ProjectDetails = ({ title, categories }: { title: string, categories: string[] }) => (
  <div className="pt-6">
    <CategoriesList categories={categories} />
    <ProjectTitle title={title} />
  </div>
);

const CategoriesList = ({ categories }: { categories: string[] }) => (
  <ul className="categories-list">
    {categories.map((category, index) => (
      <li key={category} className={index > 0 ? 'ml-3' : ''}>
        <CategoryItem category={category} />
      </li>
    ))}
  </ul>
);

const CategoryItem = ({ category }: { category: string }) => (
  <a href="#" className="category-link">
    <span className="hover-effect" data-text={category}>{category}</span>
  </a>
);

const ProjectTitle = ({ title }: { title: string }) => (
  <h2 className="project-title">
    <a href="portfolio-single.html" className="title-link">
      <span className="arrow-icon">
        <i className="bi bi-arrow-right" />
      </span>
      {title}
    </a>
  </h2>
);

