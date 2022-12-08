import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Navigation} from 'swiper';
import 'swiper/css/bundle';
import '../about/About-Sass/About.css'
import ring from "../../assets/pexels-pixabay-266621.jpg"
import necklace from "../../assets/pexels-the-glorious-studio-10983783.jpg"
import earrings from "../../assets/pexels-lena-shekhovtsova-4019460.jpg"
function AboutProduct() {
  return (
    <section className='swiper-container'>
      <Swiper
      modules={[Pagination, Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      navigation={{clickable: true}}
      pagination={{clickable: true}}>
      
        <SwiperSlide>
          <img src={ring} className="product-img" alt=''/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={necklace} className="product-img" alt=''/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={earrings} className="product-img" alt=''/>
        </SwiperSlide>

      </Swiper>
    </section>
  )
}

export default AboutProduct