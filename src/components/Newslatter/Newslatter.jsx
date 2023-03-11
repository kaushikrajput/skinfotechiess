import React, { useState } from 'react'
import style from './Newslatter.module.css'
import Modal from 'react-bootstrap/Modal';
import '../Styles.css'


const Newslatter = () => {
    const [show, setShow] = useState(false);

    const [error, setError] = useState(false)
    const [email, setEmail] = useState("")
    const [wait, setWait] = useState(false)
    const handleClose = () => setShow(false);

    const subscribe = (e) => {
        e.preventDefault()
        const data = { email: email }
        if (!subscribe) {
            return setError(true)
        }
        setWait(true)
        setTimeout(() => {
            setWait(false)
        }, 2000);
        setShow(true);
        console.log(data);
    }


    const modal = {
        zIndex: '999999',
    }

    return (
        <>
            <section className={`${style.ctaSection} `}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className={`col-lg-7 ${style.Vcenter}`}>
                            <div className={style.emailSubs}>
                                <h3 className={style.h3}>Get New Insights Weekly</h3>
                                <p className={style.p}>
                                    Get updates on new technologies and information about upcoming{" "}
                                    <br /> offers and sales.
                                </p>
                            </div>
                        </div>
                        <div className={`col-lg-5 ${style.vCenter}`}>
                            <form action={style.formNewsletter}>
                                <div className={style.emailSubsForm}>
                                    <div className={style.formCta}>
                                        <input type="hidden" name="type" value="newsletter"/>
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            name="txtEmail"
                                            value={email}
                                            onChange={(e) => { setEmail(e.target.value) }}
                                            required="required"
                                        />
                                         {error && email?.length <= 0 ?
                                                    <p>Please enter email!</p> : ""}

                                        <button type='submit' name='newslatter-submit' onClick={subscribe} className={`${style.lnk} ${style.btnMain} ${style.bgBtn6} `}> {wait ? "Please wait..." : "Subscribe"}
                                            <i className={`fas fa-chevron-right ${style.faIcon}`}></i>
                                            <span className={style.circle}></span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section >

            {/* ////////////////////////// Newslatter ///////////////////////////////// */}

            <Modal show={show} onHide={handleClose} style={modal} className={style.modal} >

                <Modal.Header closeButton >
                    <Modal.Title></Modal.Title>
                </Modal.Header>

                <Modal.Body className={style.modalBody}>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className={style.formBlock}>
                                <div className={`${style.fieldsets} row`}>
                                    <div className='col-md-12'>
                                        <h1 className={style.h1}>Thank you!</h1>
                                        <h5 className={style.h5}>You have subscribed to our Newsletter!</h5>
                                    </div>
                                    <div className='col-md-12' style={{ marginTop: `45px` }}>
                                        <div className='row'>
                                            <div className='col-md-3'></div>
                                            <div className='col-md-6'>
                                                <button className={`${style.btnMain} ${style.lnk} ${style.bgBtn}`} onClick={handleClose}>Continue
                                                    <i className={` fas fa-chevron-right ${style.faIcon}`}></i>
                                                    <span className={style.circle}></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Newslatter