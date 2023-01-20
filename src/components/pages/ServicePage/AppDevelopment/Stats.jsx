import React, { useEffect, useState } from 'react'
import style from './Stats.module.css'
import ScrollTrigger from 'react-scroll-trigger'
import CountUp from 'react-countup'

const Stats = () => {

    const [counterOn, setCounterOn] = useState(false)

    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <section className={style.statsArea}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3 col-sm-6'>
                            <div className={style.stats}>
                                <div className={style.statsImg}>
                                    <img src="imgs/icons/deal.svg" alt="" className={`img-fluid ${style.img}`} />
                                </div>
                                <div className={style.statNumb} >
                                    <span className={style.counter} onEnter={() => setCounterOn(!counterOn)}>{counterOn && <CountUp start={0} end={200} duration={4} delay={0} />}k+ </span>
                                    <p className={style.p}>Hours Worked</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-sm-6'>
                            <div className={style.stats}>
                                <div className={style.statsImg}>
                                    <img src="imgs/icons/computers.svg" alt="" className={`img-fluid ${style.img}`} />
                                </div>
                                <div className={style.statNumb} >
                                    <span className={style.counter} onEnter={() => setCounterOn(!counterOn)}>{counterOn && <CountUp start={0} end={24} duration={4} delay={0} />}/{counterOn && <CountUp start={0} end={7} duration={4} delay={0} />} </span>
                                    <p className={style.p}>Hours Worked</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-sm-6'>
                            <div className={style.stats}>
                                <div className={style.statsImg}>
                                    <img src="imgs/icons/worker.svg" alt="" className={`img-fluid ${style.img}`} />
                                </div>
                                <div className={style.statNumb} >
                                    <span className={style.counter} onEnter={() => setCounterOn(!counterOn)}>{counterOn && <CountUp start={0} end={100} duration={4} delay={0} />}+ </span>
                                    <p className={style.p}>Hours Worked</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-sm-6'>
                            <div className={style.stats}>
                                <div className={style.statsImg}>
                                    <img src="imgs/icons/customer-service.svg" alt="" className={`img-fluid ${style.img}`} />
                                </div>
                                <div className={style.statNumb} >
                                    <span className={style.counter} onEnter={() => setCounterOn(!counterOn)}>{counterOn && <CountUp start={0} end={150} duration={4} delay={0} />}+</span>
                                    <p className={style.p}>Hours Worked</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </ScrollTrigger >
    )
}

export default Stats