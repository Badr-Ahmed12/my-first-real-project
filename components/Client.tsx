import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { clients } from "../data";
export default function Client() {
  return (
    <div className="pb-24 xl:pb-28">
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay]}
        className="swiper-client"
      >
        {clients.map((logo, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="opacity-65 hover:opacity-100 transition ease-out duration-100">
              <a href="#">
                <img src={logo.image} className="w-full" />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

