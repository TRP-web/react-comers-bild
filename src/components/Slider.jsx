import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
// eslint-disable-next-line
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper-bundle.css';
import '../style/Slider.scss'


const Slider = () => {
  const [slides, setSlides] = useState([])
  const params = {
    slidesPerView: 1,
    navigation: true,
    loop: true,

    navigation: {
      prevEl: '.slider__prev',
      nextEl: '.slider__next'
    },
    autoplay: {
      dalay: 1500
    }
  }
  const imgGet = async () => {
    axios.get('https://trp-web.github.io/React-comers/json/slider/slider.json')
      .then(res => {
        setSlides(res.data)
      })
  }
  useEffect(() => {
    imgGet()
  }, [])
  return (
    <div className="slider">
      <Swiper
        {...params}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      >
        {
          slides.map((slide) => {
            return (
              <SwiperSlide key={slide.id}>
                <div className="slider__slide">
                  <img src={slide.href} alt="slide" />
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      <div className="slider__prev" key={1} style={{ backgroundImage: 'url(/img/arow.svg)' }}></div>
      <div className="slider__next" key={2} style={{ backgroundImage: 'url(/img/arow.svg)' }}></div>
    </div>

  )
}

export default Slider