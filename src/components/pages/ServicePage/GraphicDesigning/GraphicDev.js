import React, { useState } from "react";
import Breadcrump from "./Breadcrump";
import {service7, whychoose2,reviews} from "../../Blocks";
import About4 from "./About4";
import Keypoints from "./Keypoints";
import Service7 from './Service7';
import WhyChoose from "./WhyChoose";
import Reviews3 from "./Reviews3";


const GraphicDev = () => {
  const [service7Data, setService7Data] = useState(service7);
  const [whyChooseData,setWhyChooseData]=useState(whychoose2);
  const [reviews3Data,setReviews3Data]=useState(reviews)

  return (
    <>
      <Breadcrump />
      <About4 />
      <Keypoints />
      <Service7 service7Data={service7Data} />
      <WhyChoose whyChooseData={whyChooseData}/>
      <Reviews3 reviews3Data={reviews3Data}/>
    </>
  );
};

export default GraphicDev;
