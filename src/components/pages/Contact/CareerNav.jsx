import React, { useState } from 'react'
import About2 from './About2';
import Careers from './Careers';
import WhyChoose2 from './WhyChoose2';
import Service4 from '../ServicePage/AppDevelopment/Service4'
import {whychoose2} from '../Blocks'
import Enquire from './Enquire';


const ContactNav = () => {
    
    const [whyChoose2Data, setWhyChoose2Data] = useState(whychoose2)


    return (
        <>
            <Careers/>
            <About2/>
            <WhyChoose2 whyChoose2Data={whyChoose2Data}/>
            <Enquire/>
            
        </>
    )
}

export default ContactNav