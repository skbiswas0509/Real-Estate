import React from 'react'
import './Hero.css'
import { IoLocationOutline } from 'react-icons/io5'
import CountUp from 'react-countup'

const Hero = () => {
  return (
    <section className='hero-wrapper'>
        <div className="hero-container">
            
            {/* left side */}
            <div className="hero-left">
                <div className="hero-title">
                    <div className="orange-circle"/>
                    <h1>Discover <br /> most suitable <br /> property</h1>
                </div>
                <div className="hero-des">
                    <span>Find a variety of properties that suit you very easily</span>
                    <span>Forget all difficulties in finding a residence for you</span>
                </div>
                <div className="search-bar">
                <IoLocationOutline color='var(--blue)' size={25}/>
                <input type="text" />
                <button>Search</button>
                </div>
                <div className="stats">
                    <div className="stat">
                        <span>
                            <CountUp start={8800} end={9000} duration={3}/>
                            <span>+</span>
                        </span>
                        <span className='stat-desc'>Premium Products</span>
                    </div>

                <div className="stat">
                    <span>
                        <CountUp start={1950} end={2000} duration={3}/>
                        <span>+</span>
                    </span>
                    <span className='stat-desc'>Happy Customers</span>
                </div>

                <div className="stat">
                    <span>
                        <CountUp end={28}/>
                        <span>+</span>
                    </span>
                    <span className='stat-desc'>Award Winnnings</span>
                </div>
                </div>
            </div>
            {/* right side */}
            <div className="hero-right">
                <div className="image-container">
                    <img src="./hero-image.png" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero