import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import './Residencies.css'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'

const Residencies = () => {
    
  return (
    <section className="r-wrapper">
        <div className="r-container">
            <div className="r-head">
                <span>Best Choices</span>
                <span>Popular Residencies</span>
            </div>

            <Swiper {...sliderSettings}>
                <SliderButtons/>
                {
                    data.map((card, i)=>(
                        <SwiperSlide key={i}>
                            <div className="r-card">
                                <img src={card.image} alt="home" />

                                <span className="r-price">
                                    <span style={{color: "orange"}}>$</span>
                                    <span>{card.price}</span>
                                </span>

                                <span>{card.name}</span>
                                <span>{card.detail}</span>
                            </div>
                        </SwiperSlide>

                    ))
                }
            </Swiper>
        </div>
    </section>
  )
}

export default Residencies

const SliderButtons = ()=> {
    const swiper = useSwiper();
    return (
        <div className="r-buttons">
            <button onClick={()=> swiper.slidePrev()}>&lt;</button>
            <button onClick={()=>swiper.slideNext()}>&gt;</button>
        </div>
    )
}