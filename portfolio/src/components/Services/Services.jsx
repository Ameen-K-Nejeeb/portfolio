import React, { useState } from 'react';
import './Services.css';
import theme from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';
import arrow from '../../assets/arrow_icon.svg';

const Services = () => {
  // State to control showing all services or just 6
  const [showAll, setShowAll] = useState(false);

  // Set how many services to show based on `showAll`
  const displayedServices = showAll ? Services_Data : Services_Data.slice(0, 6);

  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Projects</h1>
        <img src={theme} alt="" />
      </div>

      <div className="services-container">
        {displayedServices.map((service, index) => (
          <div key={index} className="services-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div className="services-readmore">
              <p>Read More</p>
              <img src={arrow_icon} alt="" />
            </div>
          </div>
        ))}
      </div>

      <div
        className="myproject-showmore"
        onClick={() => setShowAll(prev => !prev)} // Toggle state
      >
        <p>{showAll ? 'Show Less' : 'Show More'}</p>
        <img src={arrow} alt="" />
      </div>
    </div>
  );
};

export default Services;
