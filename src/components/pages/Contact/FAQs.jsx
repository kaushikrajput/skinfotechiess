import React,{useState} from "react";
import { faq } from "../Blocks";
import Faq from "./Faq";

const FAQs = () => {
  const [faqData, setFaqData] = useState(faq);
  return (
    <>
      <Faq faqData = {faqData} />
    </>
  );
};

export default FAQs;
