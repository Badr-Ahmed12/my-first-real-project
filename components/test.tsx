"use client";

import { testimonials } from "../data";
import { TestimonialType } from "../types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { memo } from "react";

export default function Testimonial() {
  return (
    <section id="testimonial" className="testimonial-section">
      <div className="testimonial-container">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          className="testimonial-slider"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialSlide testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

// مكونات فرعية
const TestimonialSlide: React.FC<{ testimonial: TestimonialType }> = memo(
  ({ testimonial }) => (
    <div className="testimonial-content">
      <TestimonialAvatar image={testimonial.image} />
      <TestimonialText
        name={testimonial.name}
        position={testimonial.position}
        quote={testimonial.quote}
      />
      <QuoteIcon />
    </div>
  )
);

const TestimonialAvatar: React.FC<{ image: string }> = memo(({ image }) => (
  <div className="testimonial-avatar">
    <img src={image} alt="Testimonial avatar" className="avatar-image" loading="lazy" />
  </div>
));

const QuoteIcon: React.FC = memo(() => (
  <div className="quote-icon">
    <i className="bi bi-quote" />
  </div>
));

const TestimonialText: React.FC<{ name: string; position: string; quote: string }> = memo(
  ({ name, position, quote }) => (
    <div className="testimonial-text">
      <p className="quote">{quote}</p>
      <h4 className="name">{name}</h4>
      <span className="position">{position}</span>
    </div>
  )
);

