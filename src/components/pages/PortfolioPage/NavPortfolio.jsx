import React, { useState, useEffect } from 'react'
import Footer from '../../Footer/Footer'
import style from './NavPortfolio.module.css'
import Navbar from '../../Navbar/Navbar'
import Aos from 'aos'
import { Link } from 'react-router-dom'
import { navPortfolio } from '../Blocks'

const NavPortfolio = () => {
    useEffect(() => {
        Aos.init();
    })

    const [portfolioData, setPortfolioData] = useState(navPortfolio)
    const [active, setActive] = useState(true)

    const filterItem = (type) => {
        const updatedItems = navPortfolio.filter((curElement) => {
            return curElement.category === type;
        })
        setPortfolioData(updatedItems);
    }

    return (
        <>
            <Navbar />

            {/* /////////////////////////////// Breadcrump section ////////////////////////////// */}

            <section className={`${style.breadcrumpArea} ${style.banner3}`} style={{ background: `url(../imgs/banner/5.jpg)` }}
            >
                <div className={style.textBlock}>
                    <div className="container">
                        <div className="row">
                            <div className={`col-lg-12 ${style.vCenter}`}>
                                <div className={style.breadInner}>
                                    <div className={`${style.breadMenu} ${style.wow} ${style.fadeInUp}`} data-aos='fade-up' data-aos-duration='1000'>
                                        <ul>
                                            <li>
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li>
                                                <Link to="/portfolio">Portfolio</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={`${style.breadTitle} ${style.wow} ${style.fadeInUp}`} data-aos='fade-up' data-aos-duration='1300'>
                                        <h2 className={style.h2}>Portfolio</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ///////////////////////// Portfolio page //////////////////////////////// */}

            <section className={style.portfolioPage}>
                <div className='container'>
                    <div className='row justify-content-left'>
                        <div className='col-lg-6'>
                            <div className={style.commonHeading}>
                                <h2 className={style.h}>Portfolio</h2>
                            </div>
                        </div>
                        <div className={`col-lg-6 ${style.vcenter}`}>
                            <div className={style.filters}>
                                <ul className={style.filterMenu}>
                                    <li onClick={() => { setPortfolioData(navPortfolio); setActive(1) }} style={{ backgroundColor: active <= 1 ? "#05688d" : "#f5f5f5", color: active <= 1 ? "#fff" : "#333" }}>All</li>
                                    <li data-filter='.website' onClick={() => { filterItem('website'); setActive(2) }} style={{ backgroundColor: active === 2 ? "#05688d" : "#f5f5f5", color: active === 2 ? "#fff" : "#333" }}>Website</li>
                                    <li data-filter='.app' onClick={() => { filterItem('app'); setActive(3) }} style={{ backgroundColor: active === 3 ? "#05688d" : "#f5f5f5", color: active === 3 ? "#fff" : "#333" }} >Mobile App</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        {portfolioData.map((curEle, index) => {
                            return (
                                <>
                                    <div className={`col-lg-4 col-sm-6 ${style.mt40}`} key={index}>
                                        <div className={`${style.isotopItem} ${style.hScl}`}>
                                            <div className={`${style.itemImage} ${style.hSclBase} `}>
                                                <Link to="">
                                                    <img src={curEle.img} alt="" className={`img-fluid ${style.img}`} />
                                                </Link>
                                            </div>
                                            <div className={`${style.itemInfo} ${style.shdo}`}>
                                                <h4 className={style.h4}>{curEle.itemInfo} </h4>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ////////////// footer //////////////////////// */}

            <Footer />
        </>
    )
}

export default NavPortfolio