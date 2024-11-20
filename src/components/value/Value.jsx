import {Accordion, AccordionItem, AccordionItemHeading,
    AccordionItemButton, AccordionItemPanel,
    AccordionItemState } from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from 'react-icons/md';
import './Value.css'
import data from '../../utils/accordion'

const Value = () => {
  return (
    <section className="v-wrapper">
        <div className="v-container">
            {/* left side */}
            <div className="v-left">
                <div className="image-container">
                    <img src="./value.png" alt="value image" />
                </div>
            </div>
            {/* right side */}
            <div className="v-right">
                <span>Our Value</span>
                <span>Value we give to you</span>
                <span>Lorem ipsum, dolor sit etur adipisicing 
                <br />
                elit. Eius quos rt porro ipsam laudantium tempore enim neque sit!
                </span>

                <Accordion className='accordion'
                allowMultipleExpanded={false}
                preExpanded={[0]}>
                    {
                        data.map((item, i)=>{
                            <AccordionItem className='accordionItem' key={i} uuid={i}>
                               <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <div className="icon">{item.icon}</div>
                                        <span>
                                            {item.heading}
                                        </span>
                                        <div className="icon">
                                            <MdOutlineArrowDropDown size={20}/>

                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading> 
                                <AccordionItemPanel>
                                    <p className='acc-item-detail'>{item.detail}</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        })
                    }
                </Accordion>
            </div>
        </div>
    </section>
  )
}

export default Value