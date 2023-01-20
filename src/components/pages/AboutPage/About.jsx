import React, { useState, useEffect } from 'react'
import style from './About.module.css'
import Navbar from '../../Navbar/Navbar';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import ScrollTrigger from 'react-scroll-trigger'
import CountUp from 'react-countup'


const About = () => {
    useEffect(() => {
        Aos.init();
    })
    const [counterOn, setCounterOn] = useState(false)




    return (
        <>
            <Navbar />

            {/* /////////////////////////////// Breadcrump section ////////////////////////////// */}

            <section className={`${style.breadcrumpArea} ${style.banner3}`}
                style={{ backgroundImage: `url(../imgs/banner/9.jpg)` }} >
                <div className={style.textBlock}>
                    <div className="container">
                        <div className="row">
                            <div className={`col-lg-12 ${style.vCenter}`}>
                                <div className={style.breadInner}>
                                    <div className={`${style.breadMenu} ${style.wow} ${style.fadeInUp}`} data-aos='fade-up' data-aos-duration='1000'>
                                        <ul>
                                            <li>
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li>
                                                <Link to="/about">About Us</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={`${style.breadTitle} ${style.wow} ${style.fadeInUp}`} data-aos='fade-up' data-aos-duration='1300'>
                                        <h2 className={style.h2}>About Us</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* //////////////////////////// about section ///////////////////////////////// */}

            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <section className={` ${style.aboutSection}`} style={{ backgroundImage: `url(../imgs/shape/dot_bg.png)` }}>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className={`col-lg-6 ${style.vCenter}`}>
                            <div className={style.aboutImage}>
                                <img src="imgs/about/company-about.png" alt="" className={`img-fluid ${style.img}`} />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className={style.commonHeading}>
                                <span>about us</span>
                                <h2 className={style.h2}>About Agency</h2>
                                <p className={style.p}>Sk Info Techies believe in creation. A creation that not only marks its presence but lets others know about it too. In almost two years of our existence, we've met people, in-person and virtually; we worked together on their idea of what their business should look like and created masterpieces side by side.  </p>
                                <p className={style.p}>Here, we work for you, but we work with you on what you want from us. The client's ideas, methods are all put together while creating something. Services that we offer our clients are Web Designing, Application Development, Graphic Designing, and Social Media Marketing. Ensuring that you get the best, we work hard and always will. </p>
                            </div>
                            <div className={`row ${style.aboutStats} ${style.small}`}>
                                <div className='col-lg-4 col-sm-4'>
                                    <div className={style.statistics}>
                                        <div className={style.statnumb}>
                                            <span className={style.counter}>{counterOn && <CountUp start={0} end={80} duration={4} delay={0} />}+</span>
                                            <p className={style.p}>Happy Clients</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-sm-4'>
                                    <div className={style.statistics}>
                                        <div className={style.statnumb}>
                                            <span className={style.counter}>{counterOn && <CountUp start={0} end={100} duration={4} delay={0} />}k+</span>
                                            <p className={style.p}>Hours worked</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-sm-4'>
                                    <div className={style.statistics}>
                                        <div className={style.statnumb}>
                                            <span className={style.counter}>{counterOn && <CountUp start={0} end={100} duration={4} delay={0} />}+</span>
                                            <p className={style.p}>projects done</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </ScrollTrigger>
        </>
    )
}

export default About