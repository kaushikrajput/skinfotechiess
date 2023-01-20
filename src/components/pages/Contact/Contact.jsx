import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Navbar/Navbar'
import style from './Contact.module.css'
import Footer from '../../Footer/Footer'
import Aos from 'aos'
import axios from 'axios'

const Contact = () => {

    useEffect(() => {
        Aos.init();
    })

    const [comp, setComp] = useState(0)
    const [projectType, setProjectType] = useState("")
    const [goalType, setGoalType] = useState("")
    const [budgetType, setBudgetType] = useState("")
    const [name, setName] = useState("")
    const [mobile, setMobile] = useState("")
    const [email, setEmail] = useState("")

    const [errorMessage, setErrorMessage] = useState('');

    const [error, setError] = useState(false);
    const [wait, setWait] = useState(false)

    const nextBtn = () => {
        if (!projectType || !goalType) {
            return setError(true);
        }
        setComp((pre) => pre + 1)
    }
    const nextBtn2 = () => {
        if (!budgetType) {
            return setError(true)
        }
        setComp((pre) => pre + 1)
    }

    const GetProposal = (e) => {
        e.preventDefault()
        const data = { fullName: name, mobile: mobile, email: email, projectType: projectType, goalType: goalType, budgetType: budgetType }
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        // const firstInputValue = event.target.elements[0].value;
        // if (!firstInputValue) {
        //     setErrorMessage("First input field is required.");
        // } else {
        //     setErrorMessage("");
        // }
        if (!name) {
            return setError(true)
        }
        if (!mobile) {
            return setError(true)
        }
        if (!email) {
            return setError(true)
        }
        else if (!regex.test(email)) {
            setError(true)
        }
        if (comp >= 1) {
            setWait(true)
            setTimeout(() => {
                setWait(false)
                setComp(0)
            }, 2000);
        }
        console.log(data);
    }

    return (
        <>
            <Navbar />
            <section className={`${style.breadcrumpArea} ${style.banner4}`} style={{ backgroundImage: `url(../imgs/banner/4.jpg)` }}>
                <div className={style.textBlock}>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className={`col-lg-12 ${style.vCenter}`} >
                                <div className={style.breadInner} >
                                    <div className={style.breadMenu} data-aos='fade-up' data-aos-duration='1000'>
                                        <ul>
                                            <li>
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li>
                                                <Link to="/contact">Contact</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={style.breadTitle} data-aos='fade-up' data-aos-duration='1300'>
                                        <h2 className={style.h2}>Contact</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* /////////////////// contact page ////////////////////// */}

            <section className={style.contactPage}>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className={`col-lg-6 ${style.vCenter}`}>
                            <div className={style.commonHeading}>
                                <h2 className={style.h2}>Get Estimate of your Idea within few steps</h2>
                                <p className={style.p}>We will respond with best solution for you.</p>
                            </div>
                            <div className={style.formBlock}>
                                <form id='contact-form' className={style.formFeedback}>
                                    {comp === 0 &&
                                        <div className={`row ${style.fieldSets}`} id='step-1'>
                                            <div className='col-md-12'>
                                                <label>Choose category of your project</label>
                                                <select name="category" required value={projectType} onChange={(e) => setProjectType(e.target.value)}>
                                                    <option value={false} >Select</option>
                                                    <option value="Education">Education</option>
                                                    <option value="Entertainment">Entertainment</option>
                                                    <option value="Finance">Finance</option>
                                                    <option value="Food and Drink">Food and Drink</option>
                                                    <option value="Health & Fitness">Health & Fitness</option>
                                                    <option value="Music">Music</option>
                                                    <option value="Travel">Travel</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                                {error && projectType.length <= 0 ?
                                                    <p>Please select a category!</p> : ""}
                                            </div>
                                            <div className={`col-md-12 ${style.mt20}`}>
                                                <label>What is your goal?</label>
                                                <select name="goal" required value={goalType} onChange={(e) => setGoalType(e.target.value)}>
                                                    <option value={false} >Select</option>
                                                    <option value="Earn Revenue">Earn Revenue</option>
                                                    <option value="Solve a Problem">Solve a Problem</option>
                                                    <option value="Help Others">Help Others</option>
                                                    <option value="Create Something Unique">Create Something Unique</option>
                                                </select>
                                                {error && goalType.length <= 0 ?
                                                    <p>Please select a goal!</p> : ""}
                                            </div>
                                            {comp == 0 && <div className={`col-md-12 ${style.btnBlock}`}>
                                                <a data-id='1' className={`${style.nextStep} ${style.lnk} ${style.btnMain} ${style.bgBtn}`} onClick={nextBtn}> Continue
                                                    <i className={`fas fa-chevron-right ${style.faIcon}`}></i>
                                                    <span className={style.circle}></span>
                                                </a>
                                            </div>}
                                        </div>
                                    }

                                    {comp == 1 &&
                                        <div className={`row ${style.fieldSets}`} id='step-2'>
                                            <div className='col-md-12'>
                                                <label>What is your budget?</label>
                                                <select name="budget" required value={budgetType} onChange={(e) => setBudgetType(e.target.value)}>
                                                    <option value={false}  >Select</option>
                                                    <option value="₹5,000 - ₹20,000">₹5,000 - ₹20,000</option>
                                                    <option value="₹20,000 - ₹50,000">₹20,000 - ₹50,000</option>
                                                    <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                                                    <option value="Above ₹1 Lac">Above ₹1 Lac</option>
                                                </select>
                                                {error && budgetType.length <= 0 ?
                                                    <p>Please select a budget!</p> : ""}
                                            </div>
                                            <div className={`col-md-12 ${style.mt20}`}>
                                                <div className='row'>
                                                    {comp >= 1 && <div className={`col-md-6`} >
                                                        <a data-id='1' className={` ${style.previousStep} ${style.lnk} ${style.btnMain} ${style.bgBtn}`} onClick={() => setComp((next) => next - 1)}>
                                                            <i className={`fas fa-chevron-left ${style.faIcon}`}></i>Previous
                                                            <span className={style.circle}></span>
                                                        </a>
                                                    </div>}
                                                    {comp == 1 && <div className={`col-md-6`} >
                                                        <a data-id='1' className={` next-step ${style.lnk} ${style.btnMain} ${style.bgBtn}`} onClick={nextBtn2}>Continue
                                                            <i className={`fas fa-chevron-right ${style.faIcon}`}></i>
                                                            <span className={style.circle}></span>
                                                        </a>
                                                    </div>}
                                                </div>
                                            </div>
                                        </div>
                                    }

                                    {comp == 2 &&
                                        <div className={`row ${style.fieldSets}`} id='step-3'>
                                            <div className='col-md-6'>
                                                <label>Full Name</label>
                                                <input type="text" name='username' required value={name} onChange={(e) => { setName(e.target.value) }} />
                                                {error && name.length <= 0 ?
                                                    <p>Please fill out this field.</p> : ""}
                                            </div>
                                            <div className='col-md-6'>
                                                <label>Mobile</label>
                                                <input type="number" name='number' required value={mobile} onChange={(e) => { setMobile(e.target.value) }} />
                                                {error && mobile.length <= 0 ?
                                                    <p>Please fill out this field.</p> : ""}
                                            </div>
                                            <div className={`col-md-12 ${style.mt20}`}>
                                                <label>Email</label>
                                                <input type="email" name='email' required value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                                {error && email.length <= 0 ?
                                                    <p>Please fill out this field.</p> : ""}
                                            </div>

                                            <div className={`col-md-12 ${style.mt20}`}>
                                                <button type='submit' name='feedback-submit' className={`${style.lnk} ${style.btnMain} ${style.bgBtn}`} onClick={GetProposal} >{wait ? "Please Wait..." : "Get Proposal"}
                                                    <i className={`fas fa-chevron-right ${style.faIcon}`}></i>
                                                    <span className={style.circle}></span>
                                                </button>
                                            </div>
                                        </div>}
                                </form>
                            </div>
                        </div>
                        <div className={`col-lg-5 ${style.vCenter}`}>
                            <div className={style.contactDetails}>
                                <div className={style.contactCard}>
                                    <div className={`${style.infoCard} ${style.vCenter}`}>
                                        <span className={style.span}>
                                            <i className='fas fa-phone-alt'></i>Phone:
                                        </span>
                                        <div className={style.infoBody}>
                                            <p className={style.p}>Assistance hours: Monday – Friday, 10 am to 7 pm</p>
                                            <Link to='tel:+919650465307' className={style.link}>(+91) 9650465307</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.emailCard}>
                                    <div className={`${style.infoCard} ${style.vCenter}`}>
                                        <span className={style.span}>
                                            <i className='fas fa-envelope'></i>Email:
                                        </span>
                                        <div className={style.infoBody}>
                                            <p className={style.p}>Our support team will get back to in 24-h during standard business hours.</p>
                                            <Link to='mailto:info@skinfotechies.com' className={style.link}>info@skinfotechies.com</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.skypeCard}>
                                    <div className={`${style.infoCard} ${style.vCenter}`}>
                                        <span className={style.span}>
                                            <i className='fab fa-skype'></i>Timings:
                                        </span>
                                        <div className={style.infoBody}>
                                            <p className={style.p}>We Are Online: Monday – Friday, 10 am to 7 pm</p>
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
export default Contact