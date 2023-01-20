import React from 'react'
import style from './Projects2.module.css'
import { Link } from 'react-router-dom'

const Projects2 = ({ projects2Data }) => {
    return (
        <>
            <section className={style.portfolioArea} >
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-6'>
                            <div className={style.commonHeading}>
                                <h2 className={style.h2}>Some of Our Works</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        {projects2Data.map((curElement, index) => {
                            return (
                                <>
                                    <div className={`col-lg-4 col-sm-6 ${style.mt40}`} key={index} >
                                        <div className={`${style.isotopItem} ${style.hScl}`}>
                                            <div className={`${style.itemImage} ${style.hSclBase} `}>
                                                <Link to="" className={style.a}>
                                                    <img src={curElement.image} alt="" className={`img-fluid ${style.img}`} />
                                                </Link>
                                            </div>
                                            <div className={`${style.itemInfo} ${style.shdo}`}>
                                                <h4 className={style.h4}>{curElement.title} </h4>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                    <div className={`col-lg-12 ${style.btn} ${style.mt60}`} >
                        <Link to="/portfolio" className={style.btnOutline}>View More Projects
                            <i className={`fas fa-chevron-right ${style.faIcon}`}></i>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects2