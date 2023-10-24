import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Autoplay } from "swiper"
import { useState } from "react"
import ProjetoAdvogadaAmanda from "./projetosSlider/advogaaAmanda"
import ProjetoLegalid from "./projetosSlider/legalid"
import { Pagination } from "swiper"

import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

export default function AbasProjects() {
  const [slidesPerView, setSlidesPerView] = useState(1)


  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      slidesPerView={slidesPerView}
      spaceBetween={30}
      loop={true}
      loopedSlides={5}
      centeredSlides={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      className="mySwiper"
    >
      <SwiperSlide>
        <ProjetoAdvogadaAmanda />
      </SwiperSlide>
      <SwiperSlide>
        <ProjetoLegalid />
      </SwiperSlide>
    </Swiper>
  )
}
