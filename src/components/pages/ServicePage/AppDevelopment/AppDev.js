import React, { useState } from "react";
import { stats, service2, service4, projects, reviews } from "../../Blocks";
import Breadcrumb from "./Breadcrump";
import Stats from "./Stats";
import About2 from "./About2";
import Service2 from "./Service2";
import Service3 from "./Service3";
import Service4 from "./Service4";
import Projects from "./Projects";
import Reviews from "./Reviews";
import Keypoints from "./Keypoints";

const AppDev = () => {
  const [statsData, setStatsData] = useState(stats);
  const [service2Data, setService2Data] = useState(service2);
  const [service4Data, setService4Data] = useState(service4);
  const [projectsData, setProjetsData] = useState(projects);
  const [reviewsData, setReviewsData] = useState(reviews);

  return (
    <>
      <Breadcrumb />
      <Stats statsData={statsData} />
      <About2 />
      <Keypoints/>
      <Service2 service2Data={service2Data} />
      <Service3 />
      <Service4 service4Data={service4Data} />
      <Projects projectsData={projectsData} />
      <Reviews reviewsData={reviewsData} />
    </>
  );
};

export default AppDev;
