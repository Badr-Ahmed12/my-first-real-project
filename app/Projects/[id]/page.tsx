"use client";

import React from "react";
import { useParams } from "next/navigation";
import Preloader from "@/components/Loding";
import Footer from "@/components/Footer";
import { projectsData } from "@/lib/Data";
import Image from "next/image";

const ProjectDetails: React.FC = () => {
  // استخدام useParams للحصول علي ال id من الرابط
  const params = useParams();
  const { id } = params as { id: string };
  
  // إيجاد بيانات المشروع بناءً علي ال id
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return <div className="container mx-auto py-20 text-white">Project not found</div>;
  }

  return (
    <>
      <div className="container mx-auto max-w-[1320px] px-5 md:px-10 xl:px-5">
        <div className="py-24 xl:py-28">
          <div className="md:mx-auto md:w-3/4 lg:w-2/3">
            <h2 className="font-outfit font-medium text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              {project.title.split(" ")[0]}{" "}
              <span className="bg-themeGradient bg-clip-text text-transparent">
                {project.title.split(" ").slice(1).join(" ")}
              </span>
            </h2>
            <p className="text-white/70">{project.description}</p>
          </div>
          {/* Project Info باستخدام map */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {project.info.map((item, index) => (
              <div
                key={index}
                className="z-[1] p-8 space-y-1.5 bg-darkBg rounded-lg relative overflow-hidden before:content-[''] before:absolute before:-z-[1] before:left-0 before:top-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-10 before:transition-all before:ease-linear before:duration-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-themeGradient"
              >
                <span className="block font-outfit font-medium uppercase text-sm tracking-wider text-white">
                  {item.label}
                </span>
                {item.type === "list" && item.items && (
                  <ul className="space-x-3 text-white/70">
                    {item.items.map((listItem, liIndex) => (
                      <li key={liIndex} className="list-none inline-block">
                        {listItem}
                      </li>
                    ))}
                  </ul>
                )}
                {item.type === "text" && item.text && (
                  <p className="text-white/70">{item.text}</p>
                )}
                {item.type === "link" && item.text && item.href && (
                  <a className="inline-block overflow-hidden" href={item.href}>
                    <span
                      className="block relative text-transparent before:content-[attr(data-text)] before:absolute before:top-0 before:left-0 before:opacity-100 before:text-white before:transition-all before:ease-out before:duration-200 hover:before:-top-full hover:before:opacity-0 after:content-[attr(data-text)] after:absolute after:top-full after:left-0 after:opacity-0 after:text-white after:transition-all after:ease-out after:duration-200 hover:after:top-0 hover:after:opacity-100"
                      data-text={item.text}
                    >
                      {item.text}
                    </span>
                  </a>
                )}
              </div>
            ))}
          </div>
          {/* end Project Info */}
        </div>
      </div>
      {/* باقي تفاصيل المشروع */}
      <div className="px-5 lg:px-10">
        <div className="bg-darkBg rounded-2xl overflow-hidden py-20">
          <div className="container mx-auto max-w-[1320px] px-5">
            <div className="md:mx-auto md:w-3/4 lg:w-2/3">
              <p className="text-white/70">{project.content}</p>
              <h5 className="text-2xl font-outfit font-medium text-white mt-6 mb-2">
                Heading
              </h5>
              <p className="text-white/70">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className="mt-6 lg:mt-12">
              <Image
                className="rounded-lg"
                src={project.wideImage}
                alt="Portfolio Image"
                width={1200}
                height={800}
                priority
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 mt-6 lg:mt-12">
              {/* Lightbox Image */}
              <div className="overflow-hidden rounded-lg">
                <a
                  className="glightbox group block relative before:content-[''] before:z-[1] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-10 before:transition-all before:ease-linear before:duration-100"
                  href={project.lightboxImages[0].src}
                >
                  <Image
                    className="group-hover:scale-105 transition ease-custom duration-500"
                    src={project.lightboxImages[0].src}
                    alt={project.lightboxImages[0].alt}
                    width={600}
                    height={400}
                    priority
                  />
                  <span className="inline-flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] rounded-full bg-black/20 backdrop-blur text-white">
                    <i className="bi bi-arrows-fullscreen"></i>
                  </span>
                </a>
              </div>
              {/* Lightbox Video */}
              <div className="overflow-hidden rounded-lg">
                <a
                  className="glightbox group block relative before:content-[''] before:z-[1] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-10 before:transition-all before:ease-linear before:duration-100"
                  href={project.videoLink}
                >
                  <Image
                    className="group-hover:scale-105 transition ease-custom duration-500"
                    src={project.lightboxImages[0].src}
                    alt={project.lightboxImages[0].alt}
                    width={600}
                    height={400}
                    priority
                  />
                  <span className="inline-flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] rounded-full bg-black/20 backdrop-blur text-white text-lg">
                    <i className="bi bi-play-fill"></i>
                  </span>
                </a>
              </div>
            </div>

            {/* Prev/Next Buttons */}
            <div className="flex justify-between mt-12">
              {/* Prev */}
              <a
                className="inline-block relative z-[1] group overflow-hidden bg-white/15 px-7 py-3 rounded-3xl font-outfit font-medium uppercase text-sm tracking-wider text-white before:content-[''] before:absolute before:-z-[1] before:left-0 before:top-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-20 before:transition-all before:ease-linear before:duration-100"
                href="#"
              >
                <span
                  className="block relative text-transparent before:content-[attr(data-text)] before:absolute before:top-0 before:left-0 before:opacity-100 before:text-white before:transition-all before:ease-out before:duration-200 group-hover:before:-top-full group-hover:before:opacity-0 after:content-[attr(data-text)] after:absolute after:top-full after:left-0 after:opacity-0 after:text-white after:transition-all after:ease-out after:duration-200 group-hover:after:top-0 group-hover:after:opacity-100"
                  data-text="Prev Project"
                >
                  Prev Project
                </span>
              </a>
              {/* Next */}
              <a
                className="inline-block relative z-[1] group overflow-hidden bg-white/15 px-7 py-3 rounded-3xl font-outfit font-medium uppercase text-sm tracking-wider text-white before:content-[''] before:absolute before:-z-[1] before:left-0 before:top-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-20 before:transition-all before:ease-linear before:duration-100"
                href="#"
              >
                <span
                  className="block relative text-transparent before:content-[attr(data-text)] before:absolute before:top-0 before:left-0 before:opacity-100 before:text-white before:transition-all before:ease-out before:duration-200 group-hover:before:-top-full group-hover:before:opacity-0 after:content-[attr(data-text)] after:absolute after:top-full after:left-0 after:opacity-0 after:text-white after:transition-all after:ease-out after:duration-200 group-hover:after:top-0 group-hover:after:opacity-100"
                  data-text="Next Project"
                >
                  Next Project
                </span>
              </a>
            </div>
          </div>
          {/* end container */}
        </div>
      </div>
      <Preloader />
      <Footer />
      {/* end Project Details */}
    </>
  );
};

export default ProjectDetails;
