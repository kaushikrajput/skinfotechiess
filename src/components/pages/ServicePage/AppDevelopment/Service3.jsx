import React from 'react'
import style from './Service3.module.css'

const Service3 = () => {
    return (
        <>
            <section className={style.serviceArea}>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-8'>
                            <div className={style.commonHeading}>
                                <h2 className={style.h2}>Development Process</h2>
                                <p className={style.p}>Our design process follows a proven approach. We begin with a deep understanding of your needs and create a planning template.</p>
                            </div>
                        </div>
                    </div>
                    <div className={`row justify-content-center ${style.upset}`}>
                        <div className={`col-lg-4 ${style.order1} ${style.vCenter}`}>
                            <div className={style.imgBlock}>
                                <img src="imgs/process/process-1.jpg" alt="" className={`img-fluid ${style.img}`} />
                            </div>
                        </div>
                        <div className={`col-lg-7 ${style.order2} ${style.vCenter}`}>
                            <div className={style.psBlock}>
                                <span className={style.span}>1</span>
                                <h3 className={style.h3}>Requirement Gathering</h3>
                                <p className={style.p}>A brief talk with the client to gather every raw material needed, set aside the goals of what the application is supposed to do, work like, look like, and various other things.</p>
                            </div>
                        </div>
                    </div>
                    <div className={`row justify-content-center order2 ${style.upset} `}>
                        <div className={`col-lg-7 ${style.order2} ${style.vCenter}`}>
                            <div className={style.psBlock}>
                                <span className={style.span}>2</span>
                                <h3 className={style.h3}>Prototype</h3>
                                <p className={style.p}>It is the creation of an incomplete version or the blueprint of the application with an idea of its looks, performance, and the ability to handle errors proficiently.</p>
                            </div>
                        </div>
                        <div className={`col-lg-4 ${style.order1} ${style.vCenter}`}>
                            <div className={style.imgBlock}>
                                <img src="imgs/process/process-2.jpg" alt="" className={`img-fluid ${style.img}`} />
                            </div>
                        </div>
                    </div>
                    <div className={`row justify-content-center order1 ${style.upset}`}>
                        <div className={`col-lg-4 ${style.order1} ${style.vCenter}`}>
                            <div className={style.imgBlock}>
                                <img src="imgs/process/process-3.jpg" alt="" className={`img-fluid ${style.img}`} />
                            </div>
                        </div>
                        <div className={`col-lg-7 ${style.order2} ${style.vCenter}`}>
                            <div className={style.psBlock}>
                                <span className={style.span}>3</span>
                                <h3 className={style.h3}>Deployment</h3>
                                <p className={style.p}>The third step in the development is the deployment of services that the application will provide to its users. The process itself includes steps such as planning, development, testing, deploying, and monitoring. All of which are, done step by step with careful consideration to maintain authenticity.</p>
                            </div>
                        </div>
                    </div>
                    <div className={`row justify-content-center order2 ${style.upset}`}>
                        <div className={`col-lg-7 ${style.order2} ${style.vCenter}`}>
                            <div className={style.psBlock}>
                                <span className={style.span}>4</span>
                                <h3 className={style.h3}>Support & Maintenance</h3>
                                <p className={style.p}>Complete maintenance of the application is done regularly, and 24/7 support is also provided in case of any problem in the application running smoothly. Also, regular updates are added, according to the needs of the users and technological advancements.</p>
                            </div>
                        </div>
                        <div className={`col-lg-4 ${style.order1} ${style.vCenter}`}>
                            <div className={style.imgBlock}>
                                <img src="imgs/process/process-4.jpg" alt="" className={`img-fluid ${style.img}`} />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Service3