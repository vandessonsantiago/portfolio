import React, { useEffect, useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"

import { Autoplay } from "swiper"
import LogoNext from "./logosSlider/logoNext"
import LogoReact from "./logosSlider/logoReact"
import LogoTS from "./logosSlider/logoTS"
import LogoTailwind from "./logosSlider/logoTailwind"
import LogoNode from "./logosSlider/logoNode"
import LogoHTML from "./logosSlider/logoHTML"
import LogoCSS from "./logosSlider/logoCSS"
import LogoJS from "./logosSlider/logoJS"
import LogoBootstrap from "./logosSlider/logoBootstrap"
import LogoSaas from "./logosSlider/logoSaas"
import Logofirebase from "./logosSlider/logoFirebase"
import LogoGraphql from "./logosSlider/logoGraphql"
import LogoGit from "./logosSlider/logoGit"

export default function Slider() {
  const [slidesPerView, setSlidesPerView] = useState(5)

  useEffect(() => {
    const atualizarSlidesPerView = () => {
      const larguraTela = window.innerWidth
      // Defina os breakpoints e valores correspondentes de slidesPerView
      if (larguraTela < 768) {
        setSlidesPerView(1)
      } else if (larguraTela < 1024) {
        setSlidesPerView(3)
      } else if (larguraTela < 1240) {
        setSlidesPerView(5)
      } else {
        setSlidesPerView(5)
      }
    }
    // Adicione um ouvinte de redimensionamento de tela
    window.addEventListener("resize", atualizarSlidesPerView)
    // Execute a função de atualização inicialmente
    atualizarSlidesPerView()
    // Limpe o ouvinte de redimensionamento de tela quando o componente for desmontado
    return () => {
      window.removeEventListener("resize", atualizarSlidesPerView)
    }
  }, [])


  return (
    <div>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        loop={true}
        loopedSlides={5}
        centeredSlides={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex justify-center items-center h-20">
            <LogoHTML />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-20">
            <LogoCSS />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-20">
            <LogoJS />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-20">
            <LogoTS />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-20">
            <LogoNode />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-20">
            <LogoReact />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-20">
            <LogoNext />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-20">
            <LogoTailwind />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-20">
            <LogoBootstrap />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-20">
            <LogoSaas />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-20">
            <Logofirebase />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-20">
            <LogoGraphql />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-20">
            <LogoGit />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
