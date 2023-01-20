import React from 'react'
import style from './About5.module.css'
import { Link } from 'react-router-dom'

const About5 = () => {
    return (
        <>
            <section className={style.serviceArea}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className={style.imgBlock}>
                                <img src="imgs/service/digitalmarketing.png" className={`img-fluid ${style.img}`} />
                            </div>
                        </div>
                        <div className={`col-lg-8`}>
                            <div className={style.textBlock}>
                                <h2 className={style.h2}>Digital Marketing Services</h2>
                                <p className={style.p}>We love to help create an online presence for your business to leave a mark and tell a story that stays in people's minds. Intriguing content with the right keywords helps us to make your business get recognized. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
        </>
    )
}

export default About5