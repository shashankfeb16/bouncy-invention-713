import React from 'react'
import Navbar from './../components/navbar/Navbar';
import Slider from "./Slider"
import FeathuredVideo from './FeathuredVideo';
import HomeNews from './HomeNews';

import DataDigest from './DataDigest';

import Footer from './../components/footer/Footer';






const Homepage = () => {
  return (
    <div>
    
      <Slider/>
      <FeathuredVideo/>
      <HomeNews/>
      <DataDigest/>
 

    </div>
  )
}

export default Homepage
