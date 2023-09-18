import React from 'react'
import { HeaderItem } from './style';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Teachers from '../../assets/img/teacher.png'
import In from '../../assets/svg/in.svg'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './slider.css';


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const Slider = () => {

    return (
        <>
          <HeaderItem>Tajribali ustozlarimiz</HeaderItem>

            <Swiper
                cssMode={true}
                slidesPerView={3}
                spaceBetween={30}
                navigation={true}
                mousewheel={true}
                keyboard={true}
                className="mySwiper"
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            >
                <SwiperSlide><img src={Teachers} alt="" />
                    <h3>Jahongir Rahmonov</h3>
                    <a href="#">Amazon Web Service (AWS)</a>
                    <p className='teachers__p'>7 yillik tajribaga ega Software Engineer.</p>
                    <img className='in' src={In} alt="in" width={30} height={30} />
                </SwiperSlide>
               
                <SwiperSlide><img src={Teachers} alt="" />
                    <h3>Jahongir Rahmonov</h3>
                    <a href="#">Amazon Web Service (AWS)</a>
                    <p className='teachers__p'>7 yillik tajribaga ega Software Engineer.</p>
                    <img className='in' src={In} alt="in" width={30} height={30} />
                </SwiperSlide>
               
                <SwiperSlide><img src={Teachers} alt="" />
                    <h3>Jahongir Rahmonov</h3>
                    <a href="#">Amazon Web Service (AWS)</a>
                    <p className='teachers__p'>7 yillik tajribaga ega Software Engineer.</p>
                    <img className='in' src={In} alt="in" width={30} height={30} />
                </SwiperSlide>
               
                <SwiperSlide><img src={Teachers} alt="" />
                    <h3>Jahongir Rahmonov</h3>
                    <a href="#">Amazon Web Service (AWS)</a>
                    <p className='teachers__p'>7 yillik tajribaga ega Software Engineer.</p>
                    <img className='in' src={In} alt="in" width={30} height={30} />
                </SwiperSlide>
               
            </Swiper>
        </>
    )
}

export default Slider