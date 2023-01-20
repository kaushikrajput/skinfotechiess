import React from 'react'
import style from './Keypoints.module.css'
import { Link } from 'react-router-dom'

const Keypoints = () => {
    return (
        <>

            <section className={style.serviceArea}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-7'>
                            <div className={style.textBlock2}>
                                <h3 className={style.h3}>The complete strategy to build an application</h3>
                                <h5 className={style.h5}>Hire the most dedicated team and help make your dream come true.</h5>
                                <p className={style.p}>It includes the development of an application as an ios based, android based, cross-platform as well as wearable application. To build any one of them, a set number of rules are to be followed to make sure everything is up to the clientele's needs, and there's no discrepancy of any kind. What we say is what we deliver. To ensure that, our team gives its best to build the business' presence digitally. </p>
                                <Link to="/contact" className={`${style.btnMain} ${style.bgBtn} ${style.lnk}`} style={{marginTop:'30px'}}>Get an Estimate of Project
                                    <i className={`fas fa-chevron-right ${style.faIcon}`}></i>
                                    <span className={style.circle}></span>
                                </Link>
                            </div>
                        </div>
                        <div className='col-lg-5'>
                            <div className={style.serviceKeyPoints}>
                                <h4 className={style.h4}>Advantages of Mobile App Development</h4>
                                <ul className={style.keyPoints}>
                                    <li>Substitution of Traditional Method of Market</li>
                                    <li>An effective way of Branding and engaging the audience</li>
                                    <li>Reduction in cost and raises standards</li>
                                    <li>Increase in Revenue</li>
                                    <li>Gives more value to customers</li>
                                    <li>24*7 support facility</li>
                                    <li>Feasible and Convenient</li>
                                    <li>Secured from vulnerable attacks</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Keypoints