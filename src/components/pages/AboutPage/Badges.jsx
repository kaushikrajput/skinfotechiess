import React from 'react'
import style from './Badges.module.css'
import { Link } from 'react-router-dom'

const Badges = ({badgesData}) => {
    return (
        <>

            <section className={`${style.badgesSection}`}>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-8'>
                            <div className={`${style.commonHeading} ${style.txt} `}>
                                <h2 className={style.h2}>Awards & Achievements</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        {badgesData.map((curEle, index) => {
                            return (
                                <>
                                    <div className='col-lg-3 col-md-6 col-6' key={index}>
                                        <div className={style.badgesContent}>
                                            <img src={curEle.img} alt="" className={`img-fluid`} />
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>


                    {/* -------- cta section --------- */}

                    <div className={style.ctaBtn}>
                        <div className={`${style.ctaTitle} ${style.vCenter}`}>
                            <p className={style.p}> We
                                <span> Promise.</span> We
                                <span> Deliver.</span>
                            </p>

                            <Link to="/contact" className={`${style.btnMain} ${style.bgBtn} ${style.lnk}`}>Let's Work Together
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

export default Badges