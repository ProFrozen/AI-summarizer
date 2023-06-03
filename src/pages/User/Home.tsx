// import React from 'react';
import Slider from '../../components/User/Home/Slider';
import Feature from '../../components/User/Home/Feature';
import About from '../../components/User/Home/About';
import Team from '../../components/User/Home/Team';
import Pricing from '../../components/User/Home/Pricing';
import Support from '../../components/User/Home/Support';
import Testimonial from '../../components/User/Home/Testimonial';

const Home = () => {
  return <div className="pb-12">
    <Slider />
    <Feature />
    <About />
    <Team />
    <Testimonial />
    <Pricing />
    <Support />
  </div>
}

export default Home;