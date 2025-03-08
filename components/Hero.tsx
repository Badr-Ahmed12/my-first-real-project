import { heroData } from "../data";

const Hero = () => (
  <section id={heroData.id} className={heroData.className}>
    <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-outfit font-bold stroke-text">
      {heroData.text}
    </h1>
  </section>
);

export default Hero;

