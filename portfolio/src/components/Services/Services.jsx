import React, { useState } from 'react';
import './Services.css';
import theme from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedServices = showAll ? Services_Data : Services_Data.slice(0, 6);

  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Projects</h1>
        <img src={theme} alt="theme pattern" />
      </div>

      <div className="services-container">
        {displayedServices.map((service, index) => (
          <div 
            key={index} 
            className="services-format card-animate" 
            style={{animationDelay: `${index * 0.1}s`}}
          >
            {/* Huge Faded Number Watermark */}
            <span className="bg-number">{service.s_no}</span>
            
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            
            {/* Action Links Container */}
            <div className="services-actions">
              
              {/* View Repository Link */}
              <div 
                className="services-readmore" 
                onClick={() => window.open(service.repo_url || "#", "_blank")}
              >
                <span className="repo-text">View Repository</span>
                <div className="arrow-circle">
                  <img src={arrow_icon} alt="arrow" />
                </div>
              </div>

              {/* Live Demo Link (Conditionally renders if live_url exists) */}
              {service.live_url && (
                <div 
                  className="services-readmore live-link" 
                  onClick={() => window.open(service.live_url, "_blank")}
                >
                  <span className="repo-text live-text">Live Demo</span>
                  <div className="arrow-circle live-circle">
                    <img src={arrow_icon} alt="arrow" />
                  </div>
                </div>
              )}

            </div>
          </div>
        ))}
      </div>

      <div className="myproject-showmore" onClick={() => setShowAll(prev => !prev)}>
        <p>{showAll ? 'Show Less' : 'Show More'}</p>
        <img src={arrow_icon} alt="arrow" className={showAll ? "rotate-up" : "rotate-down"} />
      </div>
    </div>
  );
};

export default Services;