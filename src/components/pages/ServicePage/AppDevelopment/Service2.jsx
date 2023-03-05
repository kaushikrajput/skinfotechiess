import React from 'react'
import { Link } from 'react-router-dom'
import style from './Service2.module.css'

const Service2 = ({ service2Data }) => {
    return (
        <>
            <section className={style.serviceArea}>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-6'>
                            <div className={style.heading}>
                                <h2 className={style.h2}>What We Offer</h2>
                            </div>
                        </div>
                    </div>
                    <div className={`row ${style.linkHover}`}>
                        {service2Data.map((curEle, index) => {
                            return (

                                <div className={`col-lg-3 col-sm-3 ${style.mt30}`} key={index}>
                                    <div className={style.cardBlock}>
                                        <div className={style.imgBlock}>
                                            <img src={curEle.img} alt="" className={`img-fluid`} />
                                        </div>
                                        <div className={style.text}>
                                            <h4 className={style.h4}>{curEle.text}</h4>
                                        </div>
                                    </div>
                                </div>
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

        </>
    )
}

export default Service2