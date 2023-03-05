import React, { useEffect, useState } from "react";
import style1 from "./Industries.module.css";
import style2 from "./OurServices.module.css";
import style3 from "./WhyChooseUs.module.css";
import style4 from "./Statistics.module.css";
import style5 from "./Portfolio.module.css";
import style6 from "./Clients.module.css";
import style7 from "./Location.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

// -------------------------- Industries -----------------------------

const Industries = ({ industriesData }) => {
  useEffect(() => {
    Aos.init();
  });

  return (
    <>
      <section
        className={`${style1.workCategory} ${style1.padTb}`}
        data-aos="fade-up"
        data-aos-once="true"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div
                className={`${style1.commonHeading} ${style1.ptag} text-center`}
              >
                <h2 className={style1.h2}>Industries We Serve</h2>
              </div>
            </div>
          </div>
          <div className={`row ${style1.mt30}`}>
            {industriesData.map((curElement, index) => {
              return (
                <div
                  className="col-lg-3 col-sm-6 col-6 wow fadeIn"
                  key={index}
                  data-aos="fade-up"
                  data-aos-once="true"
                >
                  <div className={`${style1.industryWorkFor} ${style1.hoshd} `}>
                    <img src={curElement.image} alt="imgs"></img>
                    <h6 className={style1.h6}>{curElement.name}</h6>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

// ------------------------------- Our Services -------------------------------

const OurServices = ({ ourServicesData }) => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <section
        className={style2.service}
        data-aos="fade-up"
        data-aos-once="true"
      >
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-lg-8">
              <div className={`${style2.commonHeading} text-center`}>
                <h2 className={`${style2.h2} ${style2.mb30}`}>Our Services</h2>
              </div>
            </div>
          </div>

          <div
            className={`row ${style2.upset} ${style2.ovrBg2} ${style2.hoGdnt}`}
          >
            {ourServicesData.map((curElement, index) => {
              return (
                <div
                  className={`col-lg-4 col-sm-6 ${style2.mt30}`}
                  key={index}
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-once="true"
                >
                  <div
                    className={`${style2.sBlock} ${style2.upHor} ${style2.ovrBase}`}
                  >
                    <div className={style2.nnCardSet}>
                      <div className={style2.sCardIcon}>
                        <img
                          src={curElement.image}
                          className="img-fluid"
                          alt="service"
                        />
                      </div>
                      <h4 className={style2.h4}>{curElement.name}</h4>
                      <p className={style2.p}> {curElement.content}</p>
                      <Link to="/service-app">
                        Learn More
                        <i
                          className={`fas fa-chevron-right ${style2.faIcon}`}
                        ></i>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* -------------- cta section ----------------- */}

            <div className="col-lg-8 " data-aos="fade-up" data-aos-once="true">
              <div className={style2.ctaBtn}>
                <div
                  className={`${style2.vCenter} ${style2.wow} ${style2.fadeInUp}`}
                >
                  <p className={style2.p}>
                    Want to
                    <span className={style2.span}> kick start </span>
                    your project right now?
                  </p>
                  <p className={style2.p2}>
                    <Link
                      to="/contact"
                      className={`${style2.btnMain} ${style2.bgBtn6} ${style2.lnk}`}
                    >
                      {" "}
                      Get Proposal
                      <i
                        className={`fas fa-chevron-right ${style2.faIcon}`}
                      ></i>
                      <span className={style2.circle}></span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

////////////////////////////////// Why choose us /////////////////////////////////////

const WhyChooseUs = ({ whyChooseUsData }) => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <section
        className={style3.whyChoose}
        data-aos="fade-up"
        data-aos-once="true"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className={`${style3.commonHeading}`}>
                <h2 className={`${style3.h2} `}>Why Choose Us</h2>
              </div>
            </div>
          </div>
          <div className={`row ${style3.upset}`}>
            {whyChooseUsData.map((curElement, index) => {
              return (
                <div
                  className={`col-lg-3 col-sm-6  ${style3.mt30}`}
                  key={index}
                  data-aos="fade-up"
                  data-aos-once="true"
                >
                  <div className={`${style3.sBlock} ${style3.upHor}`}>
                    <div className={style3.sCardIcon}>
                      <img
                        src={curElement.image}
                        alt="service"
                        className="img-fluid"
                      />
                    </div>
                    <h4 className={style3.h4}> {curElement.name}</h4>
                    <p className={style3.p}> {curElement.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- cta section ---------- */}

      <div
        className={` ${style3.bg} ${style3.pt40} ${style3.pb40}`}
        data-aos="fade-up"
        data-aos-delay="40"
        data-aos-once="true"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className={`col-lg-8 ${style3.vCenter}`}>
              <div className={style3.emailSubs}>
                <h3 className={style3.h3}>
                  <span className={style3.span}>We Love</span> to hear
                  <span className={style3.span}> Your Requirements</span>
                </h3>
              </div>
            </div>
            <div className={`col-lg-4 ${style3.textCenter}`}>
              <div className={style3.emailSubsForm}>
                <Link to="/contact" className={style3.btnOutline}>
                  Get an Estimate of Project
                  <i className={`fas fa-chevron-right ${style3.faIcon}`}></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

////////////////////////////////// Statistics /////////////////////////////////////

const Statistics = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, [500]);

  const [counterOn, setCounterOn] = useState(false);

  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div
          className={`${style4.StatisticSection} ${style4.bgFlat1} ${style4.pb120} ${style4.pt120} ${style4.tilt3d}`}
          data-aos="fade-up"
          data-aos-once="true"
        >
          <div className="container">
            <div className={`row justify-content-center ${style4.textCenter}`}>
              <div className="col-lg-4 col-sm-6 ">
                <div className={style4.statistics}>
                  <div className={style4.statisticsImg}>
                    <img
                      src="imgs/icons/startup.svg"
                      className={`img-fluid ${style4.img}`}
                    />
                  </div>
                  <div className={style4.statNumb}>
                    <span className={style4.span}>
                      {counterOn && (
                        <CountUp start={0} end={6} duration={4} delay={0} />
                      )}
                    </span>
                    <span className={style4.span}>+</span>
                    <p className={style4.p}>Year in Business</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 ">
                <div className={style4.statistics}>
                  <div className={style4.statisticsImg}>
                    <img
                      src="imgs/icons/team.svg"
                      className={`img-fluid ${style4.img}`}
                    />
                  </div>
                  <div className={style4.statNumb}>
                    <span className={style4.span}>
                      {counterOn && (
                        <CountUp start={0} end={25} duration={4} delay={0} />
                      )}
                    </span>
                    <span className={style4.span}>+</span>
                    <p className={style4.p}>Team Members</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`row  ${style4.small}  ${style4.textCenter}`}>
              <div className="col-lg-3 col-sm-6 ">
                <div className={style4.statistics}>
                  <div className={style4.statisticsImg}>
                    <img
                      src="imgs/icons/deal.svg"
                      className={`img-fluid ${style4.img}`}
                    />
                  </div>
                  <div className={style4.statNumb}>
                    <span className={style4.span}>
                      {counterOn && (
                        <CountUp start={0} end={100} duration={4} delay={0} />
                      )}
                    </span>
                    <span className={style4.span}>+</span>
                    <p className={style4.p}>Happy Clients</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 ">
                <div className={style4.statistics}>
                  <div className={style4.statisticsImg}>
                    <img
                      src="imgs/icons/computers.svg"
                      className={`img-fluid ${style4.img}`}
                    />
                  </div>
                  <div className={style4.statNumb}>
                    <span className={style4.span}>
                      {counterOn && (
                        <CountUp start={0} end={150} duration={4} delay={0} />
                      )}
                    </span>
                    <span className={style4.span}>+</span>
                    <p className={style4.p}>Projects Done</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 ">
                <div className={style4.statistics}>
                  <div className={style4.statisticsImg}>
                    <img
                      src="imgs/icons/worker.svg"
                      className={`img-fluid ${style4.img}`}
                    />
                  </div>
                  <div className={style4.statNumb}>
                    <span className={style4.span}>
                      {counterOn && (
                        <CountUp start={0} end={200} duration={4} delay={0} />
                      )}
                      k
                    </span>
                    <span className={style4.span}>+</span>
                    <p className={style4.p}>Hours Worked</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 ">
                <div className={style4.statistics}>
                  <div className={style4.statisticsImg}>
                    <img
                      src="imgs/icons/customer-service.svg"
                      className={`img-fluid ${style4.img}`}
                    />
                  </div>
                  <div className={style4.statNumb}>
                    <span className={style4.span}>
                      {counterOn && (
                        <CountUp start={0} end={24} duration={4} delay={0} />
                      )}
                      /
                      {counterOn && (
                        <CountUp start={0} end={7} duration={3} delay={0} />
                      )}
                    </span>
                    <p className={style4.p}>Support Available</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={style4.hr} />
            <div className={`row ${style4.mt}`}>
              <div className={`col-lg-6 ${style4.mt10} ${style4.vCenter}`}>
                <div className={`${style4.commonHeading} ${style4.text1}`}>
                  <div
                    className={`${style4.mediaObject} ${style4.mt60} ${style4.tilt3d}`}
                  >
                    <div className={style4.media}>
                      <div className={` ${style4.imgB} ${style4.base} `}>
                        <img
                          src="imgs/icons/computers.svg"
                          className={style4.img}
                          alt=""
                        />
                      </div>
                      <div className={style4.mediaBody}>
                        <h4 className={style4.h4}>
                          Streamlined Project Management
                        </h4>
                        <p className={style4.p2}>
                          Step by step progress in consideration with the
                          client.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`col-lg-6 ${style4.mt10} ${style4.vCenter}`}>
                <div className={`${style4.commonHeading} ${style4.text1}`}>
                  <div
                    className={`${style4.mediaObject} ${style4.mt60} ${style4.tilt3d}`}
                  >
                    <div className={style4.media}>
                      <div className={` ${style4.imgB} ${style4.base} `}>
                        <img
                          src="imgs/icons/worker.svg"
                          className={style4.img}
                          alt=""
                        />
                      </div>
                      <div className={style4.mediaBody}>
                        <h4 className={style4.h4}>
                          Streamlined Project Management
                        </h4>
                        <p className={style4.p2}>
                          Step by step progress in consideration with the
                          client.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
};

////////////////////////////////////// Portfolio //////////////////////////////////////////

const Portfolio = ({ portfolioData }) => {
  useEffect(() => {
    Aos.init({ duration: 100 });
  }, [1000]);
  return (
    <>
      <section
        className={style5.portfolioArea}
        data-aos="fade-up"
        data-aos-once="true"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className={style5.commonHeading}>
                <h2 className={style5.h2}>Our Latest Works</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {portfolioData.map((curElement, index) => {
              return (
                <div
                  className={`col-lg-4 col-sm-6 ${style5.mt40}`} key={index}
                  data-aos="fade-up"
                  data-aos-once="true"
                >
                  <div className={`${style5.isotopItem} ${style5.hScl}`}>
                    <div
                      className={`${style5.itemImage} ${style5.hSclBase} `}
                    >
                      <Link to="" className={style5.a}>
                        <img
                          src={curElement.image}
                          alt=""
                          className={`img-fluid ${style5.img}`}
                        />
                      </Link>
                    </div>
                    <div className={`${style5.itemInfo} ${style5.shdo}`}>
                      <h4 className={style5.h4}>{curElement.title} </h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={`col-lg-12 ${style5.btn} ${style5.mt60}`}>
            <Link to="/portfolio" className={style5.btnOutline}>
              View More Projects
              <i className={`fas fa-chevron-right ${style5.faIcon}`}></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

//////////////////////////// Clients /////////////////////////////////////////

const Clients = ({ clientsData }) => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, [500]);

  return (
    <>
      <section
        className={`${style6.clientSection}`}
        data-aos="fade-up"
        data-aos-once="true"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className={style6.commonHeding}>
                <h2 className={style6.h2}>Some of Our Clients</h2>
              </div>
            </div>
          </div>
          <div className={`row ${style6.appg}`}>
            {clientsData.map((curElement, index) => {
              return (
                <div
                  className="col-lg-2 col-md-3 col-sm-6 col-6 "
                  data-aos="fade-up"
                  data-aos-once="true"
                  key={index}
                >
                  <div className={style6.clientLogo}>
                    <div className={`${style6.brandLogo} ${style6.hoshd}`}>
                      <img
                        src={curElement.image}
                        alt="clients"
                        className={`img-fluid ${style6.img}`}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

///////////////////////////////////// Location ///////////////////////////////////////////

const Location = ({ locationData }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <section
        className={` ${style7.locationSection} `}
        data-aos="fade-up"
        data-aos-once="true"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className={style7.commonHeading}>
                <h2 className={style7.h2}>Locations We Serve</h2>
              </div>
            </div>
          </div>
          <div className={`row justify-content-center ${style7.flags}`}>
            {locationData.map((curElement, index) => {
              return (
                <div
                  className={`col-lg-2 col-sm-4 col-6 ${style7.shapeLoc}`}
                  key={index}
                  data-aos="fade-up"
                  data-aos-once="true"
                >
                  <div className={`${style7.cardLogo} ${style7.hoshd}`}>
                    <div className={style7.landscp}>
                      <img
                        src={curElement.image}
                        alt="location"
                        className="img-fluid"
                      />
                    </div>
                    <div className={style7.infoText}>
                      <h5 className={style7.h5}>{curElement.title}</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export {
  Industries,
  OurServices,
  WhyChooseUs,
  Statistics,
  Portfolio,
  Clients,
  Location,
};
