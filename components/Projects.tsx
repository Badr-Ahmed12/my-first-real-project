import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";


interface PortfolioItem {
  id: number;
  title: string;
  image: string;
  categories: string[];
  link: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Project Title Here",
    image: "/portfolio-img-wide.jpg",
    categories: ["Category", "Category", "Category"],
    link: "portfolio-single.html",
  },
  {
    id: 2,
    title: "Project Title Here",
    image: "/portfolio-img-wide.jpg",
    categories: ["Category", "Category", "Category"],
    link: "portfolio-single.html",
  },
  {
    id: 3,
    title: "Project Title Here",
    image: "/portfolio-img-3.jpg",
    categories: ["Category", "Category", "Category"],
    link: "portfolio-single.html",
  },
];

const Portfolio: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev - 1 < 0 ? portfolioItems.length - 1 : prev - 1
    );
  };

  return (
    <div id="portfolio" className="px-5 lg:px-10">
      <div className="relative bg-darkBg rounded-2xl overflow-hidden py-20">
        <div className="container mx-auto max-w-[1320px] px-5">
          <div className="md:w-4/5 lg:w-3/4 md:mx-auto">
            <h6 className="pl-[20px] relative font-outfit font-medium text-sm uppercase tracking-wider text-white/40 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[12px] before:h-[12px] before:rounded-full before:border-2 before:border-white/30">
              Portfolio
            </h6>
            <h2 className="font-outfit font-medium text-4xl md:text-5xl lg:text-6xl text-white mt-2">
              Recent{" "}
              <span className="bg-themeGradient bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="leading-[1.75] text-white/70 mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
            <div className="space-x-1 mt-6">
              <button
                onClick={prevSlide}
                className="group inline-block w-[50px] h-[50px] rounded-full bg-white/15 text-white relative z-[1] overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-themeGradient opacity-0 transition-opacity duration-100 ease-linear group-hover:opacity-20" />
                <div className="flex items-center justify-center h-full">
                  <ArrowLeft className="transition-all ease-out duration-200 group-hover:-translate-y-2" />
                </div>
              </button>
              <button
                onClick={nextSlide}
                className="group inline-block w-[50px] h-[50px] rounded-full bg-white/15 text-white relative z-[1] overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-themeGradient opacity-0 transition-opacity duration-100 ease-linear group-hover:opacity-20" />
                <div className="flex items-center justify-center h-full">
                  <ArrowRight className="transition-all ease-out duration-200 group-hover:-translate-y-2" />
                </div>
              </button>
            </div>
          </div>
          <div className="overflow-hidden mt-6 xl:mt-14">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {portfolioItems.map((item) => (
                <div key={item.id} className="min-w-full px-2">
                  <div className="group relative">
                    <div className="overflow-hidden relative rounded-2xl">
                      <a href={item.link} className="block relative">
                        <Image
                          src={item.image}
                          alt={item.title}
                          className="group-hover:scale-105 transition-transform duration-500 ease-custom"
                          loading="lazy"
                          width={1250}
                          height={500}
                        />
                      </a>
                    </div>
                    <div className="pt-6">
                      <ul className="text-white font-outfit font-medium uppercase text-sm tracking-wider">
                        {item.categories.map((cat, index) => (
                          <li
                            key={index}
                            className={`list-none inline-block leading-none ${
                              index > 0
                                ? "relative pl-[14px] pr-[4px] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[5px] before:h-[5px] before:rounded-md before:bg-white/80"
                                : "pr-[4px]"
                            }`}
                          >
                            <a href="#" className="inline-block overflow-hidden">
                              <span className="block relative text-transparent before:content-[attr(data-text)] before:absolute before:top-0 before:left-0 before:opacity-100 before:text-white before:transition-all before:ease-out before:duration-200 hover:before:-top-full hover:before:opacity-0 after:content-[attr(data-text)] after:absolute after:top-full after:left-0 after:opacity-0 after:text-white after:transition-all after:ease-out after:duration-200 hover:after:top-0 hover:after:opacity-100" data-text={cat}>
                                {cat}
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-2">
                        <h2 className="relative font-outfit font-medium text-3xl">
                          <Link
                            href={item.link}
                            className="text-white transition-all ease-out duration-200 hover:pl-[44px]"
                          >
                            <span className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 opacity-0 transition duration-100 group-hover:opacity-100 group-hover:translate-x-0">
                              <ArrowRight size={16} />
                            </span>
                            {item.title}
                          </Link>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

