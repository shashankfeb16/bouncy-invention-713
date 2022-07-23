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
      <Navbar/>
      <Slider/>
      <FeathuredVideo/>
      <HomeNews/>
      <DataDigest/>
      <Footer/>

    </div>
  )
}

export default Homepage
