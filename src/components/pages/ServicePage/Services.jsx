import React,{useEffect} from "react";
import style from './Services.module.css'
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import Aos from "aos";

const Services = ({ servicesData }) => {
    useEffect(() => {
        Aos.init();
    })
    return (
        <>
            <Navbar />

            {/* /////////////////////////////// Breadcrump section ////////////////////////////// */}

            <section className={`${style.breadcrumpArea} ${style.banner6}`} style={{ backgroundImage: `url(../imgs/banner/4.jpg)` }} >
                <div className={style.textBlock}>
                    <div className="container">
                        <div className="row">
                            <div className={`col-lg-12 ${style.vCenter}`}>
                                <div className={style.breadInner}>
                                    <div className={`${style.breadMenu} ${style.wow} ${style.fadeInUp}`} data-aos='fade-up' data-aos-duration='1000' >
                                        <ul>
                                            <li>
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li>
                                                <Link to="services">Services</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={`${style.breadTitle} ${style.wow} ${style.fadeInUp}`} data-aos='fade-up' data-aos-duration='1000'>
                                        <h2 className={style.h2}>Services</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* /////////////////////////////// App section ////////////////////////////////// */}

            <section className={`${style.serviceSection} ${style.padTB}`}>
                <div className="container">
                    <div className={` row ${style.upset}`}>

                        <div className={`col-lg-4 col-md-6 ${style.mt} ${style.wow} ${style.fadeIn}`}>
                            <div className={`${style.serviceCardApp} ${style.hoshd}`}>
                                <h4 className={style.h4}>
                                    <Link to="/service-app">App Development</Link>
                                </h4>
                                <ul className={style.serviceList}>
                                    <li><Link to="/service-app">IPhone</Link></li>
                                    <li><Link to="/service-app">Android</Link></li>
                                    <li><Link to="/service-app">Cross Platform</Link></li>
                                </ul>
                                <div className={style.tecIcon}>
                                    <ul className={style.serviceIcon}>
                                        <li>
                                            <Link to="/service-app">
                                                <div className={style.imgIcon}>
                                                    <img src='imgs/icons/android.svg' alt="" className={`img-fluid ${style.img}`} />
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/service-app">
                                                <div className={style.imgIcon}>
                                                    <img src='imgs/icons/apple.svg' alt="" className={`img-fluid ${style.img}`} />
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/service-app">
                                                <div className={style.imgIcon}>
                                                    <img src='imgs/icons/tablet.svg' alt="" className={`img-fluid ${style.img}`} />
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <p className={style.p}>Explore All the App Development Opportunities.</p>
                                <Link to="/service-app" className={style.linkPrbs}>Read More
                                    <i className={`fas fa fa-arrow-circle-right ${style.faIcon}`}></i>
                                </Link>
                            </div>
                        </div>

                        {/* ////////////////////////////// Web section /////////////////////////////// */}

                        <div className={`col-lg-4 col-md-6 ${style.mt} ${style.wow} ${style.fadeIn}`}>
                            <div className={`${style.serviceCardApp} ${style.hoshd}`}>
                                <h4 className={style.h4}>
                                    <Link to="/service-web">Web Development</Link>
                                </h4>
                                <ul className={style.serviceList}>
                                    <li><Link to="/service-web">ui/ux</Link></li>
                                    <li><Link to="/service-web">php</Link></li>
                                    <li><Link to="/service-web">java</Link></li>
                                    <li><Link to="/service-web">wordpress</Link></li>
                                </ul>
                                <div className={style.tecIcon}>
                                    <ul className={style.serviceIcon}>
                                        <li>
                                            <Link to="/service-web">
                                                <div className={style.imgIcon}>
                                                    <img src='imgs/icons/ux.svg' alt="" className={`img-fluid ${style.img}`} />
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/service-web">
                                                <div className={style.imgIcon}>
                                                    <img src='imgs/icons/php.svg' alt="" className={`img-fluid ${style.img}`} />
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/service-web">
                                                <div className={style.imgIcon}>
                                                    <img src='imgs/icons/java.svg' alt="" className={`img-fluid ${style.img}`} />
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/service-web">
                                                <div className={style.imgIcon}>
                                                    <img src='imgs/icons/wordpress.svg' alt="" className={`img-fluid ${style.img}`} />
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <p className={style.p}>Explore All the App Development Opportunities.</p>
                                <Link to="/service-web" className={style.linkPrbs}>Read More
                                    <i className={`fas fa fa-arrow-circle-right ${style.faIcon}`}></i>
                                </Link>
                            </div>
                        </div>

                        {/* //////////////////////////// Graphic section /////////////////////////////// */}

                        <div className={`col-lg-4 col-md-6 ${style.mt} ${style.wow} ${style.fadeIn}`}>
                            <div className={`${style.serviceCardApp} ${style.hoshd}`}>
                                <h4 className={style.h4}>
                                    <Link to="/service-graphic">Graphic Design</Link>
                                </h4>
                                <ul className={style.serviceList}>
                                    <li><Link to="/service-graphic">logo</Link></li>
                                    <li><Link to="/service-graphic">brochures</Link></li>
                                    <li><Link to="/service-graphic">Creatives</Link></li>
                                </ul>
                                <div className={style.tecIcon}>
                                    <ul className={style.serviceIcon}>
                                        <li>
                                            <Link to="/service-graphic">
                                                <div className={style.imgIcon}>
                                                    <img src='imgs/icons/photoshop.svg' alt="" className={`img-fluid ${style.img}`} />
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/service-graphic">
                                                <div className={style.imgIcon}>
                                                    <img src='imgs/icons/illustrator.svg' alt="" className={`img-fluid ${style.img}`} />
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/service-graphic">
                                                <div className={style.imgIcon}>
                                                    <img src='imgs/icons/indesign.svg' alt="" className={`img-fluid ${style.img}`} />
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <p className={style.p}>Explore All the App Development Opportunities.</p>
                                <Link to="/service-graphic" className={style.linkPrbs}>Read More
                                    <i className={`fas fa fa-arrow-circle-right ${style.faIcon}`}></i>
                                </Link>
                            </div>
                        </div>

                        {/* ////////////////////// Digital marketing section ////////////////////////// */}

                        <div className={`col-lg-4 col-md-6 ${style.mt} ${style.wow} ${style.fadeIn}`}>
                            <div className={`${style.serviceCardApp} ${style.hoshd}`}>
                                <h4 className={style.h4}>
                                    <Link to="/service-marketing">Digital marketing</Link>
                                </h4>
                                <ul className={style.serviceList}>
                                    <li><Link to="/service-marketing">seo</Link></li>
                                    <li><Link to="/service-marketing">smo</Link></li>
                                    <li><Link to="/service-marketing">smm</Link></li>
                                </ul>
                                <div className={style.tecIcon}>
                                    <ul className={style.serviceIcon}>
                                        <li>
                                            <Link to="/service-marketing">
                                                <div className={style.imgIcon}>
                                                    <img src='imgs/icons/facebook.svg' alt="" className={`img-fluid ${style.img}`} />
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/service-marketing">
                                                <div className={style.imgIcon}>
                                                    <img src='imgs/icons/instagram.svg' alt="" className={`img-fluid ${style.img}`} />
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/service-marketing">
                                                <div className={style.imgIcon}>
                                                    <img src='imgs/icons/youtube.svg' alt="" className={`img-fluid ${style.img}`} />
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/service-marketing">
                                                <div className={style.imgIcon}>
                                                    <img src='imgs/icons/google-ads.svg' alt="" className={`img-fluid ${style.img}`} />
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <p className={style.p}>Explore All the App Development Opportunities.</p>
                                <Link to="/service-marketing" className={style.linkPrbs}>Read More
                                    <i className={`fas fa fa-arrow-circle-right ${style.faIcon}`}></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </>
    )
}
export default Services
