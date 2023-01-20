import React from 'react'
import style from './Keypoints.module.css'
import { Link } from 'react-router-dom'

const KeyPoints = () => {
    return (
        <>
            <section className={style.serviceArea}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-7'>
                            <div className={style.textBlock2}>
                                <h3 className={style.h3}>Online Marketing Services Proven to Increase Leads, Sales, & Revenue</h3>
                                <p className={style.p}>Imagine creating something but not getting the right customer for it. With the right words, your product tells the story which engages the potential customer, with him being in any part of the world. More engagement equals more leads which then converts into increased sales and revenue. Then it allows you to get the right customer for your product, and if the story's right, word spreads. </p>
                                <Link to="/contact" className={`${style.btnMain} ${style.bgBtn} ${style.lnk} `} style={{marginTop:'30px'}}>Get an Estimate of Project
                                    <i className={`fas fa-chevron-right ${style.faIcon}`}></i>
                                    <span className={style.circle}></span>
                                </Link>
                            </div>
                        </div>
                        <div className='col-lg-5'>
                            <div className={style.serviceKeyPoints}>
                                <h4 className={style.h4}>Advantages of Digital Marketing</h4>
                                <ul className={style.keyPoints}>
                                    <li>Strategize with The Valuable Data and Analytics</li>
                                    <li>Content Performance and Lead Generation</li>
                                    <li>Reduction in cost and raises standards</li>
                                    <li>Improved Conversion Rates</li>
                                    <li>More Cost Effective Than Traditional Marketing</li>
                                    <li>Higher Revenues</li>
                                    <li>Higher ROI from Your Campaigns</li>
                                    <li>Earn People’s Trust and Build Brand Reputation</li>
                                    <li>Know All About Your Competitors</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default KeyPoints