import React,{useState,useEffect} from 'react'
import { badges, whychoose} from '../Blocks'
import About from "./About"
import Badges from './Badges'
import WhyChoose from "./WhyChoose"

const AboutNav = () => {
    const [badgesData, setbadgesData] = useState(badges)
    const [whychooseData, setWhychooseData] = useState(whychoose)
  return (
    <>
    <About/>
    <Badges badgesData={badgesData}/>
    <WhyChoose whyChooseData={whychooseData} />
    </>
  )
}

export default AboutNav