import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

export type TestimonialType = {
  name: string;
  position: string;
  image: string;
  quote: string;
};

const testimonials: TestimonialType[] = [
  {
    name: 'Alexander Warren',
    position: 'CTO - Company',
    image: '/testimonial-avatar.jpg',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    name: 'Alexander Warren',
    position: 'CTO - Company',
    image: '/testimonial-avatar.jpg',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
];

const TestimonialSection = () => {
  return (
    <div id="testimonial" className="container max-w-[1320px] mx-auto px-5 md:px-10 xl:px-5 py-24 xl:py-28">
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="testimonial-slider relative pb-5 lg:pb-0"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="lg:flex lg:items-center lg:space-x-12 text-center lg:text-left relative">
              <div className="inline-block mb-3 lg:mb-0 w-[200px] md:w-[240px] lg:w-[260px] xl:w-[280px]">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={300}
                  height={300}
                  className="w-[200px] h-[200px] md:w-[240px] md:h-[240px] lg:w-[260px] lg:h-[260px] xl:w-[280px] xl:h-[280px] rounded-full"
                />
              </div>
              <div>
                <div className="mb-3">
                  <h3 className="font-outfit font-medium text-2xl xl:text-3xl text-white mb-2">{testimonial.name}</h3>
                  <span className="block font-outfit font-medium uppercase text-sm tracking-wider text-white">{testimonial.position}</span>
                </div>
                <p className="text-xl xl:text-2xl italic text-white/70 leading-normal">{testimonial.quote}</p>
              </div>
              <div className="absolute top-0 right-0 opacity-20 text-white text-7xl xl:text-8xl">
                <i className="bi bi-quote"></i>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSection;

