import React from 'react'
import style from './About2.module.css'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <section className={style.aboutArea}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className={style.imgBlock}>
                <img src="imgs/work/app4.png" alt="" className={`img-fluid ${style.img}`} />
              </div>
            </div>
            <div className='col-lg-8'>
              <div className={style.textBlock}>
                <h2 className={style.h2}>Custom Mobile App Solutions</h2>
                <p className={style.p}>Highly-tailored applications to meet the needs of customers and represent the business in the best way possible to the entire world. Everybody's idea of perfect is different, and so is our approach in creating these applications with all the minds that we put together in creating your perfect. All that we need from do you is trust and all that you want with every smallest detail in your application, which makes it easier for us to build your dream to make your dream your perfect, a reality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </>
  )
}

export default About