import React, { useState } from 'react'
import { industries, ourServices, whyChooseUs, statistics, portfolio, testinomial, clients, location } from './Block'
import Navbar from './Navbar/Navbar'
import Hero from './Hero';
import { Industries, OurServices, WhyChooseUs, Statistics, Portfolio, Clients, Location } from './index';
import Testinomial from './Testinomial';
import Footer from './Footer/Footer';
import Newslatter from './Newslatter/Newslatter';



const Sections = () => {
    const [industriesData, setIndustriesData] = useState(industries);
    const [ourServicesData, setOurServicesData] = useState(ourServices);
    const [whyChooseUsData, setWhyChooseUsData] = useState(whyChooseUs);
    const [statisticsData, setStatisticsData] = useState(statistics);
    const [portfolioData, setPortfolioData] = useState(portfolio);
    const [testinomialData, settestinomialData] = useState(testinomial);
    const [clientsData, setClientsData] = useState(clients);
    const [locationData, setLocationData] = useState(location);

    return (
        <>
            <Navbar />
            <Hero />
            <Industries industriesData={industriesData} />
            <OurServices ourServicesData={ourServicesData} />
            <WhyChooseUs whyChooseUsData={whyChooseUsData} />
            <Statistics statisticsData={statisticsData} />
            <Portfolio portfolioData={portfolioData} />
            <Testinomial testinomialData={testinomialData} />
            <Clients clientsData={clientsData} />
            <Location locationData={locationData} />
            <Newslatter />
            <Footer />
        </>
    )
}

export default Sections