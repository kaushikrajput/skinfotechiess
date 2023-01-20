import React,{useEffect} from 'react'
import style from './Footer.module.css'
import { Link } from 'react-router-dom'

const Footer = () => {
   
    return (
        <>
            <footer>
                <div className={style.footerBrands} >
                    <div className='container'>
                        <div className='row justify-content-between'>
                            <div className={`col-lg-2 col-sm-6 ${style.ftrBrand}`}>
                                <Link to="/" className={style.navbarBrand}>
                                    <img src="imgs/sk_logo.png" alt="Logo" className={style.img} />
                                </Link>
                            </div>
                            <div className={`col-lg-10 col-sm-6 ${style.pt30}`}>
                                <div className={`row ${style.footerAddressList} ${style.ftrDetails}`}>
                                    <div className={`col-lg-4 ${style.text}`}>
                                        <span className={style.span}>
                                            <i className={`fas fa-envelope ${style.fs}`}></i>
                                        </span>
                                        <p>
                                            <span>
                                                <Link to="mailto: info@skinfotechies.com" className={style.a}>info@skinfotechies.com</Link>
                                            </span>
                                        </p>
                                    </div>
                                    <div className={`col-lg-4 ${style.text}`}>
                                        <span>
                                            <i className={`fas fa-phone-alt ${style.fs}`}></i>
                                        </span>
                                        <p>
                                            <span>
                                                <Link to="tel:0919650465307" target="_blank" className={style.a}>+91 9650465307</Link>
                                            </span>
                                        </p>
                                    </div>
                                    <div className={`col-lg-4 ${style.text}`}>
                                        <span>
                                            <i className={`fas fa-map-marker-alt ${style.fs}`}></i>
                                        </span>
                                        <p>
                                            <span>
                                                <Link to="https://maps.google.com/?q=Sector-63, Noida, UP, India" className={style.a}>Sector-63, Noida, UP, India.</Link>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.footerRow}>
                    <div className={style.copyright}>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className={style.ftrSocialMediaIcons}>
                                        <a href="https://www.facebook.com/skinfotechiess" target="blank">
                                            <i className='fab fa-facebook'></i>
                                        </a>
                                        <a href="https://www.instagram.com/skinfotechies/" target="blank">
                                            <i className='fab fa-instagram'></i>
                                        </a>
                                        <a href="https://www.linkedin.com/company/sk-info-techies/" target="blank">
                                            <i className='fab fa-linkedin'></i>
                                        </a>
                                    </div>
                                    <div className={style.footer}>
                                        <p className={style.p}>Copyright © 2019-2022 SK Info Techies. All rights reserved.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer