import React from 'react'
import style from './WhyChoose.module.css'
import { Link } from 'react-router-dom'

const whyChoose = ({whyChooseData}) => {
    return (
        <>
            <section className={style.service4}>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-8'>
                            <div className={style.heading}>
                                <h2 className={style.h2}>Why Choose SK Info Techies</h2>
                                <p className={style.p}>We deliver what we say we will, with zero discrepancies.</p>
                            </div>
                        </div>
                    </div>

                    <div className='row justify-content-center'>
                        {whyChooseData.map((curEle, index) => {
                            return (
                                    <div className={`col-lg-4 col-sm-6 ${style.mt30}`} key={index}>
                                        <div className={style.sBlock}>
                                            <div className={style.icon}>
                                                <img src={curEle.img} className={`img-fluid`} />
                                            </div>
                                            <div className={style.blockContent}>
                                                <h4 className={style.h4}>{curEle.title}</h4>
                                            </div>
                                        </div>
                                    </div>
                            )
                        })}
                    </div>

                    <div className={`${style.ctaBtn} ${style.mt70px}`}>
                        <div className={`${style.ctaTitle} ${style.vCenter}`}>
                            <p className={style.p}>Let's Start a
                                <span className={style.span}> New Project </span> Together
                            </p>
                            <Link to='/contact' className={`${style.btnMain} ${style.bgBtn} ${style.lnk}`}>Enquire Now
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

export default whyChoose