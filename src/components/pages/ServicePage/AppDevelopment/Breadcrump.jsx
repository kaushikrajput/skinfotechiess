import React, { useEffect } from 'react'
import style from './Breadcrump.module.css'
import Navbar from '../../../Navbar/Navbar'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

const Breadcrump = () => {
    useEffect(() => {
        Aos.init();
    })

    const bounceAnimation = keyframes`${bounce}`;

    const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;
    return (
        <>
            <Navbar />
            <section className={style.breadcrumpArea} style={{ backgroundImage: 'url(imgs/banner/8.jpg)'}}>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-7'>
                            <div className={style.breadTitle}  >
                                <h1 className={style.h1} data-aos='fade-up' data-aos-duration='1000'>Emerging into Mobile Application World</h1>
                                <p className={style.p} data-aos='fade-up' data-aos-duration='1000'>Cutting-edge ideas combined with a dynamic team for your application to go for the pursuit.</p>
                                <Link to="/contact" className={`${style.btnMain} ${style.bgBtn} ${style.lnk}`} data-aos='zoom-in-down' data-aos-duration="500">Get Quote
                                    <i className={`fas fa-chevron-right ${style.faIcon}`}></i>
                                    <span className={style.circle}></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Breadcrump