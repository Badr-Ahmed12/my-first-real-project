import Image from "next/image";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Img from "@/public/hero-avatar.jpg";

export type AboutItem = {
  label: string;
  value: string;
};

const AboutSection = () => {
  const aboutItems: AboutItem[] = [
    { label: "Projects Done", value: "432" },
    { label: "Years of Experience", value: "13+" },
    { label: "Worldwide Clients", value: "900" },
  ];

  return (
    <div className="container p-16 mx-auto max-w-[1320px] px-5 md:px-10 xl:px-5">
      {/* Hero section */}
      <div id="about" className="py-24 md:py-28 xl:py-32 text-center">
        <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-outfit font-bold stroke-text">
          Arthur Jackson
        </h1>
      </div>
      {/* end Hero section */}

      {/* About section */}
      <div className="lg:flex space-y-8 lg:space-y-0">
        <div className="w-full lg:w-1/3 lg:order-2 text-center">
          <Image
            className="inline-block w-[120px] h-[120px] md:w-[270px] md:h-[270px] xl:w-[320px] xl:h-[320px] rounded-full"
            src={Img}
            alt="Arthur Jackson"
            width={320}
            height={320}
          />
        </div>
        <div className="w-full lg:w-1/3 lg:order-1 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-6 lg:gap-8">
          <div>
            <h6 className="font-outfit font-medium tracking-wider uppercase text-sm text-white mb-2">
              Biography
            </h6>
            <p className="text-white/70 leading-[1.75]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div>
            <h6 className="font-outfit font-medium tracking-wider uppercase text-sm text-white mb-2">Skills</h6>
            <ul className="text-white/70">
              {["Web Development", "UI & UX Design", "Marketing", "SEO", "Management"].map((skill, index) => (
                <li key={index} className={`list-none inline-block ${index > 0 ? "relative pl-[14px] pr-[4px] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[5px] before:h-[5px] before:rounded-md before:bg-white/80" : "pr-[4px]"}`}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h6 className="font-outfit font-medium tracking-wider uppercase text-sm text-white mb-2">Connect</h6>
            <ul className="space-x-1 flex justify-center">
              {["facebook", "twitter-x", "instagram"].map((social, index) => (
                <li key={index} className="list-none inline-block">
                  <a
                    className="flex items-center justify-center w-[44px] h-[44px] rounded-full bg-white/15 text-white relative z-[1] overflow-hidden before:content-[''] before:absolute before:-z-[1] before:left-0 before:top-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-20 before:transition-all before:ease-linear before:duration-100"
                    href="#"
                  >
                 {(() => {
                        switch (social) {
                          case "facebook":
                            return <Facebook className="w-5 h-5 transition-all ease-out duration-200 group-hover:opacity-70" />;
                          case "twitter-x":
                            return <Twitter className="w-5 h-5 transition-all ease-out duration-200 group-hover:opacity-70" />;
                          default:
                            return <Instagram className="w-5 h-5 transition-all ease-out duration-200 group-hover:opacity-70" />;
                        }
                      })()}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-1/3 order-3 grid grid-cols-3 lg:grid-cols-1 gap-6 lg:gap-7 lg:text-right">
          {aboutItems.map((item, index) => (
            <div key={index}>
              <h6 className="font-outfit font-medium tracking-wider uppercase text-sm text-white mb-2">{item.label}</h6>
              <span className="text-4xl lg:text-5xl xl:text-6xl font-outfit font-light text-white">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
      {/* end About section */}
    </div>
  );
};

export default AboutSection;

