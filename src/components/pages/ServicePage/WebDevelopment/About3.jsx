import React from 'react'
import style from './About3.module.css'

const About3 = () => {
  return (
    <>
      <section className={style.aboutArea}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4' >
              <div className={` ${style.bgShape} ${style.upset} ${style.imgBlock}`} style={{ backgroundImage: `url(../imgs/shape/shape-2.svg)` }}>
                <img src="imgs/about/square-image-1.jpg" alt="" className={`img-fluid ${style.img}`} style={{ backgroundImage: `url(../imgs/shape/shape-1.svg)` }} />
              </div>
            </div>
            <div className='col-lg-8'>
              <div className={style.textBlock}>
                <h2 className={style.h2}>Creative Web Design Service</h2>
                <p className={style.p}>Nearing the art of perfection that is website creation is what we have mastered over the past ten years. We deliver results that include creativity of the zestful minds, inventiveness and keeps your eyes glued to it the whole time. Hire the best to change what you once thought was only a dream into reality.</p>
                <p className={style.p}>Keeping prioritizing the needs of users as our principal value to generate relevant results, we create web applications development and SaaS platforms, e-commerce website development, or informative lead generation sites. Having already marked and been an award-winning web development company, we work hard in bringing significant results to enterprises or small businesses web development.</p>
              </div>
            </div>
          </div>
        </div>
      </section >

    </>


  )
}

export default About3