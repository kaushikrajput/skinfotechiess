import React from 'react'
import style from './Projects.module.css'
import { Link } from 'react-router-dom'

const Projects = ({ projectsData }) => {
    return (
        <>
            <section className={style.projects}>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-6'>
                            <div className={style.heading}>
                                <h2 className={style.h2}>
                                    Some of Our Works
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        {projectsData.map((curEle, index) => {
                            return (
                                    <div className={`col-lg-4 col-sm-6 ${style.mt40}`} key={index}>
                                        <div className={`${style.isotopeItem} ${style.hScl}`}>
                                            <div className={`${style.itemImg} ${style.hSclBase}`}>
                                                <Link to=''>
                                                    <img src={curEle.img} className={`img-fluid ${style.img}`} />
                                                </Link>
                                            </div>
                                            <div className={`${style.itemInfo} ${style.shdo}`}>
                                                <h4 className={style.h4}>
                                                    {curEle.itemInfo}
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                            )
                        })}
                    </div>
                    <div className='row'>
                        <div className={`col-lg-12 ${style.megaBtn}`}>
                            <Link to='/portfolio' className={`${style.btnOutline}`}>View More Projects
                                <i className={`fas fa-chevron-right ${style.faIcon}`}></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects