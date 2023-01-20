import React from 'react'
import style from './Enquire.module.css'
import Footer from '../../Footer/Footer'

const Enquire = () => {
    return (
        <>
            <section className={style.enquireSection}>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-8'>
                            <div className={style.heading}>
                                <h2 className={style.h2}>Current Openings</h2>
                            </div>
                        </div>
                    </div>
                    <div className={`row justify-content-center ${style.mt30}`}>
                        <div className='col-lg-8'>
                            <div className={style.careerCard}>
                                <div id='accordion' className={` accordion ${style.accordion}`}>
                                    <div className={style.card2}>
                                        <div className={style.cardHeader} id='acc1'>
                                            <button className={` btn btn-link btn-block text-left ${style.accIcon} `} type='button' data-toggle='collapse' aria-expanded="true" aria-controls="collapse-a">
                                                No Openings Currently.
                                                {/* <span>
                                                    <i className={`fas fa-minus ${style.faIcon}`}></i>
                                                </span> */}
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

        </>
    )
}

export default Enquire