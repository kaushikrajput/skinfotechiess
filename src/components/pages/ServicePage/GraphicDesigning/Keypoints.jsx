import React from 'react'
import style from './Keypoints.module.css'
import { Link } from 'react-router-dom'

const Keypoints = () => {
  return (
    <>
    <section className={style.keypoints}>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-7'>
                    <div className={style.textBlock}>
                        <h3 className={style.h3}>We use advanced graphic designing tools to create impressive ideas for you</h3>
                        <p className={style.p}>The astounding designs that make us stuck on them have a story behind them. A beautiful story depicted by the designs' amalgamation, multiple disordering, various approaches, and written by the wonder, the technology is, via the pen of the dynamic minds making it seem as easy as possible.</p>
                        <Link to='/contact' className={`${style.btnMain} ${style.bgBtn} ${style.lnk}`} style={{marginTop:'30px'}}>Get an Estimate of Project  
                            <i className={`fas fa-chevron-right ${style.faIcon}`}></i>
                            <span className={style.circle}></span>
                        </Link>
                    </div>
                </div>
                <div className='col-lg-5'>
                    <div className={style.imgBlock}>
                        <img src="imgs/service/branding-.jpg" alt="" className={`img-fluid ${style.img}`}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Keypoints