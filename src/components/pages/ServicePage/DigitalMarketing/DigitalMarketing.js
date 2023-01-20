import React, { useState } from "react";
import Breadcrump from "./Breadcrump";
import {ourService3, whychoose2, reviews } from "../../Blocks";
import About5 from "./About5";
import KeyPoints from "./KeyPoints";
import OurService3 from "./OurService3";
import Whychoose2 from "./Whychoose2";
import Reviews4 from "./Reviews4";

const DigitalMarketing = () => {
  const [ourService3Data, setOUrService3Data] = useState(ourService3);
  const [whyChoose2Data, setWhyChoose2Data] = useState(whychoose2);
  const [reviews4Data,setReviews4Data]=useState(reviews)
  return (
    <>
      <Breadcrump />
      <About5/>
      <KeyPoints/>
      <OurService3 ourService3Data={ourService3Data} />
      <Whychoose2 whyChoose2Data={whyChoose2Data} />
      <Reviews4 reviews4Data={reviews4Data}/>
    </>
  );
};

export default DigitalMarketing;
