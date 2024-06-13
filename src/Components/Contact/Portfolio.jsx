import React, { useEffect } from "react";
import "./Portfolio.css";


import portfolio from '../../Assets/portfolio.png'
import card1 from '../../Assets/card1.png'
import card12 from '../../Assets/card12.png'


//
import Aos from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  

  return (
    <div className="Contact section" id="portfolio">
    <div className="portfolioTitle" data-aos="fade-down">
      <img src={portfolio} alt="Portfolio" />
    </div>
    <div className="secContainerPort flex">
      <div className="imgDiv" data-aos="fade-left">
        <img src={card12} alt="Contact Image" />
      </div>
      <div className="imgDiv2" data-aos="fade-left">
        <img src={card1} alt="Contact Image" />
      </div>
    </div>
  </div>
  );
};

export default Portfolio;
