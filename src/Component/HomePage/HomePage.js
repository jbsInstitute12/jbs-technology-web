import React from 'react'
import HomeSlider from './HomeSlider';
import AboutCompany from './AboutCompany';
import MoreAbout from './MoreAbout';
import Technology from './Technology';
import OurValues from './OurValues';
import OurClient from './OurClient';
import OurPartner from './OurPartner';
import CreativeThink from './CreativeThink';


function HomePage() {
  return (
    <>
      <HomeSlider />
      <AboutCompany />
      <MoreAbout />
      <Technology />
      <OurValues />
      <CreativeThink/>
      <OurClient />
      <OurPartner/>
    </>
  )
}

export default HomePage;
