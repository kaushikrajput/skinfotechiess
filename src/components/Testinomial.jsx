import React, { useEffect } from 'react'
import style from './Testinomial.module.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import './Styles.css'

const Testinomial = ({ testinomialData }) => {
    useEffect(() => {
        Aos.init();
    },)

    return (
        <>
            <section className={`${style.testinomialSection} ${style.bgNone}`} data-aos='fade-up' data-aos-duration='1000'>
                <div className='container'>
                    <div className='row'>
                        <div className={`col-lg-5 ${style.pr}`}>
                            <div className={`${style.commonHeading} ${style.text1}`}>
                                <span className={style.span}>What our clients say about KaviRo.</span>
                                <h2 className={style.h2}>Over 80+ Satisfied Clients and Growing</h2>
                            </div>
                        </div>

                        <div className='col-lg-7'>
                            <div className={style.pl}>
                                <div className={`${style.shape1} ${style.shape}`}><img src="imgs/shape/shape-3.svg" alt="shape" /></div>
                                <Carousel touch="true"  className={style.fixHeight}>
                                    {testinomialData.map((curEle, index1) => {
                                        return (
                                            <Carousel.Item interval={index1 === 0 ? 5000 : index1 === 1 ? 5000 : index1 === 2 ? 5000 : index1 === 3 ? 5000 : index1 === 4 ? 5000 : 5000} key={index1}  >
                                                <div className={`${style.testimonialCardA} ${style.tcd}`}>
                                                    <div className={style.testimonialCard}>
                                                        <div className={style.tText}>
                                                            <p className={style.p}>{curEle.userReview}</p>
                                                        </div>
                                                    </div>
                                                    <div className={`${style.clientsThumbs} ${style.mt30}`}>
                                                        <div className={`${style.media} ${style.vCenter} ${style.upset}`}>
                                                            <div className={`${style.mediaBody} ${style.userInfo} ${style.vCenter}`}>
                                                                <h5 className={style.h5}>{curEle.userName}</h5>
                                                                <p className={style.p}>{curEle.userInfo}</p>
                                                                <i className={`fas fa-quote-right ${style.fasIcon}`}></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Carousel.Item>
                                        )
                                    })}
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* ------------ cta section ------------ */}

            <section className={style.ctaSection} >
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-9'>
                            <div className={style.mainHeading}>
                                <h2 className={style.h}>
                                    <span className={style.span1}> Now your </span>
                                    DREAM
                                    <span className={style.span1}> is our </span>
                                    RESPONSIBILITY
                                </h2>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <Link to="/contact" className={`${style.btnMain} bg-btn4 ${style.lnk}`}>Let's Discuss Your Idea
                                <i className={`fas fa-chevron-right ${style.faIcon}`}></i>
                                <span className="circle"></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testinomial
