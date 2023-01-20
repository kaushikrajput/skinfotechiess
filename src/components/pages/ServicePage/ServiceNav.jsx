import React, { useState } from 'react'
import { services  } from '../Blocks'
import DigitalMarketing from './DigitalMarketing/DigitalMarketing';
import GraphicDev from './GraphicDesigning/GraphicDev';
import Services from './Services';
import WebDev from './WebDevelopment/WebDev'




const ServiceNav = () => {

    const [servicesData, setServicesData] = useState(services)

    return (
        <>
            <Services servicesData={servicesData} />
            {/* <WebDev />
            <GraphicDev/>
            <DigitalMarketing/> */}
            
        </>
    )
}

export default ServiceNav