import React, { useState, useEffect } from 'react'
import style from './Hero.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';

const Hero = () => {

    useEffect(() => {
        Aos.init()
    })

    const [shrinkPosition, setShrinkPosition] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 20) {
            setShrinkPosition(true);
        } else {
            setShrinkPosition(false)
        }
    }
    window.addEventListener('scroll', changeBackground)

    return (
        <>
            {/* <div className={shrinkPosition ? 'hero active' : 'heroSection'} style={{ backgroundImage: `url(./imgs/main_banner.jpg)` }}> */}
                <section className={`${style.heroSection} ${style.heroCreative}`} style={{ backgroundImage: `url(./imgs/main_banner.jpg)` }}  >
                    <div className={style.textBlock}>
                        <div className='container'>
                            <div className='row'>
                                <div className={`col-lg-7 ${style.vCenter} ${style.niwax}`} >
                                    <div className={style.headerHeading}  >
                                        <h1 className={`${style.h1} ${style.wow} ${style.textEffect2}`} data-aos-once='true' data-aos="fade-up" data-aos-duration="1000">We believe in the power of creativity.</h1>
                                        <p className={`${style.p} ${style.wow} `} data-aos-once='true' data-aos="fade-up" data-aos-duration="1500" >
                                            The motto is to crack out the idea as per customers requirement and complete it on the ground level providing wings to the customer's desire,
                                            all set to take a great take-off.</p>
                                        <Link to="/contact" className={`${style.btnMain} ${style.bgBtn6} ${style.lnk} ${style.wow} ${style.fadInUp}`} data-aos-once='true' data-aos="fade-up" data-aos-duration="2000">
                                            Let's Discuss Your Idea
                                            <i className={`fas fa-chevron-right ${style.faIcon}`}></i>
                                            <span className={style.circle}></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            {/* </div> */}
        </>
    )
}
export default Hero

