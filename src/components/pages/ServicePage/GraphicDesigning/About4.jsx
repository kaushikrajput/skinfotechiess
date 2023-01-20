import React from 'react'
import style from './About4.module.css'

const About4 = () => {
    return (
        <>
            <section className={style.aboutArea}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className={`${style.imgBlock} ${style.bgShape}`}>
                                <img src="imgs/service/graphic-design.jpg" alt="" className={`img-fluid ${style.img}`} />
                            </div>
                        </div>
                        <div className='col-lg-8'>
                            <div className={style.textBlock}>
                                <h2 className={style.h2}>Custom Graphic Design Services We Offer</h2>
                                <p className={style.p}>A logo is a design that represents the whole business. Keeping an update on the latest trend and help the business' art change with it accordingly is what we want to help you with. Every business is different, and so should be the designs that go with it. We want to help you and your business grow. Working and putting our whole heart in every design, making it flawless and your kind of perfect is our motto. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About4