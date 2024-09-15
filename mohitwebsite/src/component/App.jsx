import React from 'react';
import Header from './header';
import Segments from './segment';
import ExpertiseAreas from './ExpertiseAreas';
import WhyChooseUs from './WhyChooseUs';
import Insights from './Insights';
import DropMail from './DropMail';
import Banner from './Images';

const Apps = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Segments />
      <ExpertiseAreas />
      <WhyChooseUs />
      <Insights />
      <DropMail />
    </div>
  );
};

export default Apps;
