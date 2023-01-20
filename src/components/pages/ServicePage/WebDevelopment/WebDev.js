import React, { useState } from "react";
import Breadcrumb2 from "./Breadcrump2";
import About3 from "../WebDevelopment/About3";
import OurServices2 from "../WebDevelopment/OurServices2";
import Service6 from "../WebDevelopment/Service6";
import Projects2 from "../WebDevelopment/Projects2";
import Reviews2 from "../WebDevelopment/Reviews2";
import {
  ourService2,
  whychoose2,
  projects2,
  reviews,
} from "../../Blocks";
import Keypoints from "./Keypoints";

const WebDev = () => {
  const [ourService2Data, setOurService2Data] = useState(ourService2);
  const [service6Data, setService6Data] = useState(whychoose2);
  const [projects2Data, setProjects2Data] = useState(projects2);
  const [reviews2Data, setReviews2Data] = useState(reviews);
  return (
    <>
      <Breadcrumb2 />
      <About3 />
      <Keypoints/>
      <OurServices2 ourService2Data={ourService2Data} />
      <Service6 service6Data={service6Data} />
      <Projects2 projects2Data={projects2Data} />
      <Reviews2 reviews2Data={reviews2Data} />
    </>
  );
};

export default WebDev;
