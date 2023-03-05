import React from 'react'
import style from './Reviews2.module.css'
import { Link } from 'react-router-dom'
import Footer from '../../../Footer/Footer'

const Reviews2 = ({reviews2Data}) => {
  return (
    <>
    <section className={style.reviewsBlock}>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-8'>
                            <div className={style.heading}>
                                <h2 className={style.h2}>Client Speaks</h2>
                                <p className={style.p}>Have a look at what our clients need to say about us.</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        {reviews2Data.map((curEle, index) => {
                            return (
                                    <div className={`col-md-4 ${style.mt30}`} key={index}>
                                        <div className={style.reviewsCard}>
                                            <div className={`row ${style.vCenter}`}>
                                                <div className='col'>
                                                    <span className={style.quoteIcon}>
                                                        <i className='fas fa-quote-left'></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className={style.reviewText}>
                                                <p className={style.p}>{curEle.reviewText}</p>
                                            </div>
                                            <div className={style.clientDetails}>
                                                <div className={style.reviewerText}>
                                                    <h4 className={style.h4}>{curEle.clientName}</h4>
                                                    <p className={style.p}>{curEle.clientDetails}</p>
                                                    <div className={style.starRate}>
                                                        <ul>
                                                            <li>
                                                                <Link to='' className={style.chked}>
                                                                    <i className={`fas fa-star`}></i>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to='' className={style.chked}>
                                                                    <i className={`fas fa-star`}></i>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to='' className={style.chked}>
                                                                    <i className={`fas fa-star`}></i>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to='' className={style.chked}>
                                                                    <i className={`fas fa-star`}></i>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to='' className={style.chked}>
                                                                    <i className={`fas fa-star`}></i>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* -------------------- cta section ------------------------ */}

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

            <Footer />
    </>
  )
}

export default Reviews2