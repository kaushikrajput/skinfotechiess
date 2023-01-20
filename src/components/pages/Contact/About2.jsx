import React from 'react'
import style from './About2.module.css'
import { Link } from 'react-router-dom'

const About2 = () => {
    return (
        <>
            <section className={style.aboutCareer}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className={style.commonHeading}>
                                <h2 className={style.h2}>Career and Culture at SK Info Techies</h2>
                                <p className={style.p}>Grow with us into the emerging world of technologies and help create the world digitized.</p>
                                <p className={style.p}>Be a part of the dynamic team, grow as an individual, and achieve heights with the family. Here at SK, we make sure that our team has a fun and positive environment with a healthy work-life balance in addition to a little bit of sweet competition to let the excitement there. </p>
                                <Link to='#jobs' className={`${style.btnMain} ${style.bgBtn} ${style.lnk} `}>View Opening
                                    <i className={`fas fa-chevron-right ${style.faIcon}`}></i>
                                    <span className={style.circle}></span>
                                </Link>
                            </div>
                        </div>
                        <div className={`col-lg-6 ${style.vCenter}`}>
                            <div className={style.imgBlock}>
                                <img src="imgs/about/office-4.jpg" alt="about" className={`img-fluid ${style.img}`} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About2