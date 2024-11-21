import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="f-container">

            {/* left side */}
            <div className="f-left">
                <img src="./logo2.png" alt="" width={120}/>
                <span>sdhbuoisdgoiafsggfsdhbuo</span>
            </div>
        </div>
        <div className="f-right">
            <span>information</span>
            <span>154 New yokr, 3434, USA</span>

            <div className="f-menu">
                <span>Property</span>
                <span>Services</span>
                <span>Product</span>
                <span>About U</span>
            </div>
        </div>
    </section>
  )
}

export default Footer