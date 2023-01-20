import React, { useState } from 'react'
import NavPortfolio from './NavPortfolio';
import { navPortfolio } from '../Blocks'

const PortfolioNav = () => {
    
    const [portfolioData, setPortfolioData] = useState(navPortfolio)

    return (
        <>
            <NavPortfolio portfolioData={portfolioData} />
        </>
    )
}

export default PortfolioNav