import React from 'react'
import Slider from "./Slider"
import FeathuredVideo from './FeathuredVideo'


import DataDigest from './DataDigest';


const Homepage = () => {
  return (
    <div>
      <Slider/>
      <FeathuredVideo/>
      
      <DataDigest/>
    </div>
  )
}

export default Homepage