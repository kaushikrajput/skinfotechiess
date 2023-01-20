import React from 'react'
import style from './OurService3.module.css'
import { Link } from 'react-router-dom'

const OurService3 = ({ ourService3Data }) => {
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
                    <div className={`row ${style.upset}`}>
                        {ourService3Data.map((curEle, index) => {
                            return (
                                <>
                                    <div className={`col-lg-6 col-sm-6 ${style.mt30}`} key={index}>
                                        <div className={` ${style.cardBlock} ${style.wideBlock}`}>
                                            <div className={style.imgBlock}>
                                                <img src={curEle.cardLogo} alt="" className={`img-fluid ${style.img}`} />
                                            </div>
                                            <div className={style.textBlock}>
                                                <h4 className={style.h4}>{curEle.cardTitle}</h4>
                                                <p className={style.p}>{curEle.cardContent}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}

                    </div>

                    <div className={style.ctaBtn}>
                        <div className={`${style.ctaTitle} ${style.vCenter}`}>
                            <p className={style.p}>
                                Hire a
                                <span className={style.bold}> Digital Marketing Team</span>
                            </p>
                            <Link to="/contact" className={`${style.btnMain} ${style.bgBtn} ${style.lnk}`}>Hire Now
                                <i className={`fas fa-chevron-right ${style.faIcon}`}></i>
                                <span className={style.circle}></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurService3