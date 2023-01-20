import React ,{useEffect} from 'react'
import style from './Careers.module.css'
import { Link } from 'react-router-dom'
import Navbar from '../../Navbar/Navbar'
import Aos from 'aos'


const Careers = () => {
    useEffect(() => {
        Aos.init();
    })
    return (
        <>
            <Navbar />
            <section className={`${style.breadcrumpArea} ${style.banner6}`} style={{ backgroundImage: `url(../imgs/banner/4.jpg)` }}>
                <div className={style.textBlock} >
                    <div className='container'>
                        <div className='row'>
                            <div className={`col-lg-12 ${style.vCenter}`} >
                                <div className={style.breadInner}>
                                    <div className={style.breadMenu}  data-aos='fade-up' data-aos-duration='1000'>
                                        <ul>
                                            <li>
                                                <Link to='/'>Home</Link>
                                            </li>
                                            <li>
                                                <Link to='#'>Career</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={style.breadTitle}  data-aos='fade-up' data-aos-duration='1300'>
                                        <h2 className={style.h2}>Career</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

           
        </>
    )
}

export default Careers