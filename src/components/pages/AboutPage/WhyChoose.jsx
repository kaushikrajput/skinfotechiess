import React from 'react'
import style from './WhyChoose.module.css'
import Footer from '../../Footer/Footer'
import { Link } from 'react-router-dom'

const WhyChoose = ({ whyChooseData }) => {
    return (
        <>
            <section className={` ${style.whyChoose} ${style.padTb}`} >
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-6'>
                            <div className={`${style.commonHeading}`}>
                                <h2 className={`${style.h2}`}>Why Choose Us</h2>
                            </div>
                        </div>
                    </div>
                    <div className={`row ${style.upset}`}>
                        {whyChooseData.map((curElement, index) => {
                            return (
                                <div className={`col-lg-3 col-sm-6  ${style.mt30} `} key={index}>
                                    <div className={`${style.sBlock}  ${style.uphor}`}>
                                        <div className={style.sCardIcon}>
                                            <img src={curElement.image} alt="service" className="img-fluid" /></div>
                                        <h4 className={style.h4}> {curElement.name}</h4>
                                        <p className={style.p}> {curElement.content}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* //////////////////////// services //////////////////////////////// */}

            <section className={style.serviceSection}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className={`${style.imageBlock} ${style.bgShape}`} style={{ backgroundImage: `url(../imgs/shape/shape-2.svg)` }}>
                                <img src="imgs/about/mission.jpg" alt="" className={`img-fluid  ${style.img}`} />
                            </div>
                        </div>
                        <div className={`col-lg-8 ${style.block1}`} >
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className={style.text1}>
                                        <h2 className={style.h2}>Our vision</h2>
                                        <p className={style.p}>The world.</p>
                                    </div>
                                </div>
                                <div className={`col-lg-12 ${style.mt40}`}>
                                    <div className={style.text1}>
                                        <h2 className={style.h2}>our mission</h2>
                                        <p className={style.p}>
                                            To make the world digitized by providing small startups online platforms to grow their business.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ///////////////////// cta section ////////////////////////// */}

            <div className={style.ctaSection}>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className={`col-lg-8 ${style.vCenter}`}>
                            <div className={style.emailSubs}>
                                <h3 className={style.h3}>
                                    <span className={style.span}>We Love </span>
                                    to hear
                                    <span className={style.span}> Your Requirements</span>
                                </h3>
                            </div>
                        </div>
                        <div className={`col-lg-4 ${style.vCenter}`}>
                            <div className={style.emailForm}>
                                <Link to="/contact" className={style.btnOutline}>Get an Estimate of Project
                                    <i className={`fas fa-chevron-right ${style.faIcon}`}></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ////////////// footer //////////////////////// */}

            <Footer />
        </>
    )
}

export default WhyChoose
