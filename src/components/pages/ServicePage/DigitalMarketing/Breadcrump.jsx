import React,{useEffect} from 'react'
import style from './Breadcrump.module.css'
import Navbar from '../../../Navbar/Navbar'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import Stats from '../AppDevelopment/Stats'

const Breadcrump = () => {
    useEffect(() => {
        Aos.init();
    })
    return (
        <>
            <Navbar />
            <section className={style.breadcrumpArea} style={{ backgroundImage: `url(/imgs/banner/9.jpg)` }}>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-7'>
                            <div className={style.breadTitle}>
                                <h1 className={style.h1} data-aos='fade-up' data-aos-duration='1000'>Leading your pursuit to the top of the digital food chain.</h1>
                                <p className={style.p} data-aos='fade-up' data-aos-duration='1000'>In this new era of digitization, those who do not run fast stay behind. We are here to help your business make it to the top.  </p>
                                <Link to='/contact' className={`${style.btnMain} ${style.bgBtn} ${style.lnk}`} data-aos='zoom-in-down' data-aos-duration="500">Get Quote
                                    <i className={`fas fa-chevron-right ${style.faIcon}`}></i>
                                    <span className={style.circle}></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Stats/>
        </>
    )
}

export default Breadcrump