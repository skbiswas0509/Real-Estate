import React from 'react'
import './Contact.css'
import {MdCall} from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { HiChatBubbleBottomCenter  } from 'react-icons/hi2'

const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="c-container">
            {/* left side */}
            <div className="c-left">
                <span>Our Contacts</span>
                <span>Easy to contact us</span>
                <span>sdfuyifgiusgdbfusfihiahfdirdfgfdggfddfgf</span>
            
                <div className="contactModes">
                    {/* first row */}
                    <div className="row">
                        <div className="mode">
                            <div className='flexStart'>
                                <div className="icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="detail">
                                    <span>Call</span>
                                    <span>8801234343</span>
                                </div>
                            </div>
                            <div className="button">Call Now</div>
                        </div>

                        {/* second mode */}
                        <div className="mode">
                            <div className='flexStart'>
                                <div className="icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="detail">
                                    <span>Chat</span>
                                    <span>8801234343</span>
                                </div>
                            </div>
                            <div className="button">Chat Now</div>
                        </div>
                    </div>

                    {/* second row */}
                    <div className="row">
                        <div className="mode">
                            <div className='flexStart'>
                                <div className="icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="detail">
                                    <span>Video Call</span>
                                    <span>8801234343</span>
                                </div>
                            </div>
                            <div className="button">Video Call Now</div>
                        </div>

                        {/* fourth mode */}
                        <div className="mode">
                            <div className='flexStart'>
                                <div className="icon">
                                    <HiChatBubbleBottomCenter size={25}/>
                                </div>
                                <div className="detail">
                                    <span>Message</span>
                                    <span>8801234343</span>
                                </div>
                            </div>
                            <div className="button">Message Now</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* right side */}
            <div className="c-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact