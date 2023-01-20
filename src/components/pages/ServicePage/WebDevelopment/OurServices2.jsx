import React from 'react'
import style from './OurServices2.module.css'
import { Link } from 'react-router-dom'
import Service3 from '../AppDevelopment/Service3'

const OurServices2 = ({ ourService2Data }) => {
    return (
        <>
            <section className={style.ourService}>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-6'>
                            <div className={style.heading}>
                                <h2 className={style.h2}>Our Services</h2>
                                <p className={style.p}>We think big and have hands in all leading technology platforms to provide you wide array of services.</p>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        {ourService2Data.map((curEle, index) => {
                            return (
                                <>
                                    <div className={`col-lg-4 col-sm-6 ${style.mt30}`} key={index}>
                                        <div className={style.sBlock}>
                                            <div className={style.cardIcon}>
                                                <img src={curEle.cardIcon} className={`img-fluid ${style.img}`} />
                                            </div>
                                            <h4 className={style.h4}>{curEle.cardTitle}</h4>
                                            <p className={style.p}>{curEle.cardContent}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>

                <div className={style.ctaBtn}>
                    <div className={`${style.ctaTitle} ${style.vCenter}`}>
                        <p className={style.p}>
                            Hire a
                            <span className={style.bold}> Dedicated Team</span>
                        </p>
                        <Link to="/contact" className={`${style.btnMain} ${style.bgBtn} ${style.lnk}`}>Hire Now
                            <i className={`fas fa-chevron-right ${style.faIcon}`}></i>
                            <span className={style.circle}></span>
                        </Link>
                    </div>
                </div>
            </section>
            <Service3/>
        </>
    )
}

export default OurServices2