import React, { useState, useEffect } from 'react'
import style from './Faq.module.css'
import { Link } from 'react-router-dom'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import Aos from 'aos'
import '../../Styles.css'

const Faq = ({ faqData }) => {
    useEffect(() => {
        Aos.init();
    })

    const [show, setShow] = useState(false)


    const toggle = index => {
        if (show === index) {
            return setShow(null);
        }
        setShow(index)
    }


    return (
        <>
            <Navbar />
            <section className={`${style.breadcrumpArea} ${style.banner5}`} style={{ backgroundImage: `url(../imgs/banner/7.jpg)` }}>
                <div className={style.textBlock}>
                    <div className='container'>
                        <div className='row'>
                            <div className={`col-lg-12 ${style.vCenter}`}>
                                <div className={style.breadInner}>
                                    <div className={style.breadMenu} data-aos='fade-up' data-aos-duration='1000'>
                                        <ul>
                                            <li>
                                                <Link to='/'>Home</Link>
                                            </li>
                                            <li>
                                                <Link to='#'>FAQs</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={style.breadTitle} data-aos='fade-up' data-aos-duration='1300'>
                                        <h2 className={style.h2}>FAQs</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={style.faqCard}>
                <div className='container'>
                    <div className='row'>
                        {faqData.map((curEle, index) => {
                            return (
                                <>
                                    <div className='col-md-12' key={index}>
                                        <div className={`${style.accordion}`} id='accordion2'>
                                            <div className={style.card1}>
                                                <div className={`${style.cardHeader} ${style.bgCard}`} onClick={() => toggle(index)}>
                                                    <button className={`btn ${style.btnLink} btn-block text-left ${style.cardTitle} ${style.collapsed}`}>{curEle.cardTitle}
                                                        <span className={style.span}> {show === index ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>} </span>
                                                    </button>
                                                </div>
                                                {show === index ? <div className={style.cardBody}>
                                                    <p className={style.p}>{curEle.cardBody}</p>
                                                </div> : null}
                                            </div>
                                        </div>
                                    </div>
                                </>
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

            <Footer />
        </>
    )
}

export default Faq