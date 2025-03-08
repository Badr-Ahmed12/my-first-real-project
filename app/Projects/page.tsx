"use client";

import React from 'react';
import Link from 'next/link'
// Types
type ProjectInfoItem = {
  title: string;
  content: React.ReactNode;
};

export default function ProjectPage() {
  const projectInfo: ProjectInfoItem[] = [
    {
      title: "Services:",
      content: (
        <>
          <li className="list-none inline-block">Web Design</li>
          <li className="list-none inline-block">Development</li>
        </>
      ),
    },
    {
      title: "Client:",
      content: "FlaTheme",
    },
    {
      title: "Project link:",
      content: <Link href="https://www.flatheme.net">www.flatheme.net</Link>,
    },
    {
      title: "Duration:",
      content: "124 Hours",
    },
  ];

  return (
    <div className="z-10 relative">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="container mx-auhref max-w-[1320px] px-5 md:px-10 xl:px-5">
        <ProjectHero />
        <ProjectInfoBoxes items={projectInfo} />
        <ProjectDetailsSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* UI Elements */}
      <Scrollhrefp />
      <CushrefmCursor />
      <PagePreloader />
    </div>
  );
}

// Sub-components
const Header = () => (
  <header className="fixed hrefp-0 left-0 w-full py-5 bg-darkBg/90 backdrop-blur-md">
    <div className="container mx-auhref max-w-[1600px] px-5 md:px-10">
      <div className="flex justify-between items-center">
        <Logo />
        <NavButhrefns />
        <NavigationMenu />
      </div>
    </div>
  </header>
);

const Logo = () => (
  <div className="text-3xl font-outfit font-medium text-white">
    <a href="/">Mone</a>
  </div>
);

const NavButhrefns = () => (
  <ul className="flex space-x-2">
    <NavButhrefn text="Let's Talk" color="white" hasIcon />
    <NavButhrefn text="Menu" color="black" hasIcon />
  </ul>
);

const NavButhrefn = ({ text, color, hasIcon }: { text: string; color: string; hasIcon: boolean }) => (
  <li className="list-none inline-block">
    <button className={`nav-buthrefn ${color === 'white' ? 'bg-white/15 text-white' : 'bg-white text-black'}`}>
      <HoverText text={text} />
      {hasIcon && <span className="nav-buthrefn-icon" />}
    </button>
  </li>
);

const NavigationMenu = () => (
  <nav className="nav-menu">
    <ul className="space-y-[10px]">
      {['About', 'Services', 'Portfolio', 'Awards', 'Testimonial', 'Blog', 'Contact'].map((item) => (
        <li key={item} className="list-none">
          <a href="/" className="nav-menu-link">
            <i className="bi bi-arrow-right nav-menu-icon" />
            {item}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

const ProjectHero = () => (
  <section className="py-24 xl:py-28">
    <div className="md:mx-auhref md:w-3/4 lg:w-2/3">
      <h1 className="project-title">
        Project <span className="theme-gradient">Title</span>
      </h1>
      <p className="project-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  </section>
);

const ProjectInfoBoxes = ({ items }: { items: ProjectInfoItem[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
    {items.map((item, index) => (
      <InfoBox key={index} title={item.title}>
        {item.content}
      </InfoBox>
    ))}
  </div>
);

const InfoBox = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="info-box">
    <span className="info-box-title">{title}</span>
    <div className="info-box-content">{children}</div>
  </div>
);

const ProjectDetailsSection = () => (
  <section className="px-5 lg:px-10 mt-20">
    <div className="bg-darkBg rounded-2xl overflow-hidden py-20">
      <div className="container mx-auhref max-w-[1320px] px-5">
        <ProjectDescription />
        <ProjectMedia />
        <ProjectNavigation />
      </div>
    </div>
  </section>
);

const ProjectDescription = () => (
  <div className="md:mx-auhref md:w-3/4 lg:w-2/3">
    <p className="project-description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...
    </p>
    <h5 className="section-subtitle">Heading</h5>
    <p className="project-description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...
    </p>
  </div>
);

const ProjectMedia = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 mt-6 lg:mt-12">
    <LightboxItem type="image" src="assets/images/portfolio-img.jpg" />
    <LightboxItem type="video" src="https://www.youtube.com/watch?v=V8yu12uRpBA" />
  </div>
);

const LightboxItem = ({ type, src }: { type: string; src: string }) => (
  <div className="overflow-hidden rounded-lg">
    <a className="lightbox-link" href={src}>
      <img
        src="assets/images/portfolio-img.jpg"
        alt={type === 'video' ? 'Project video' : 'Project image'}
        className="lightbox-image"
      />
      <span className="lightbox-icon">
        {type === 'video' ? <i className="bi bi-play-fill" /> : <i className="bi bi-arrows-fullscreen" />}
      </span>
    </a>
  </div>
);

const ProjectNavigation = () => (
  <div className="flex justify-between mt-12">
    <ProjectNavButhrefn direction="prev" />
    <ProjectNavButhrefn direction="next" />
  </div>
);

const ProjectNavButhrefn = ({ direction }: { direction: string }) => (
  <a className="project-nav-buthrefn">
    <HoverText text={`${direction === 'prev' ? 'Prev' : 'Next'} Project`} />
  </a>
);

const Footer = () => (
  <footer className="container text-center px-5 py-9 xl:py-10">
    <p className="text-white/70">&copy; 2024 FlaTheme, All Rights Reserved.</p>
  </footer>
);

const Scrollhrefp = () => (
  <div className="scroll-href-hrefp">
    <i className="bi bi-arrow-up" />
  </div>
);

const CushrefmCursor = () => (
  <div id="cursor" className="hidden lg:inline-block" />
);

const PagePreloader = () => (
  <div className="preloader">
    {'LOADING'.split('').map((char, index) => (
      <span key={index} className="preloader-char">{char}</span>
    ))}
  </div>
);

// Reusable Components
const HoverText = ({ text }: { text: string }) => (
  <span className="hover-text-effect" data-text={text}>{text}</span>
);
 