import React from "react";
import { useTranslation } from "../../../node_modules/react-i18next";
import "./About.css";

import AboutImage from "../../Assets/about.png";
import UsImage from "../../Assets/us.png";
import A from '../../Assets/a.png';
import Propos from '../../Assets/propos.png';
import ArrowImage1 from "../../Assets/flesh1.png";
import ArrowImage2 from "../../Assets/flesh2.png";
import GaneshCodingImage from "../../Assets/ganechcoding.png";

const AboutUs = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="About section" id="about">
      <div className="part part1">
        <div className="textContainer">
          <img src={GaneshCodingImage} alt="Ganesh Coding" className="ganeshCodingImage" />
          <p className="description">
            <h3>{t('your_it_development_partner')}</h3>
            <br />
            {t('building_useful_scalable_apps')}
          </p>
        </div>
      </div>
      <div className="part part2">
        {i18n.language === "en" ? (
          <>
            <img src={AboutImage} alt="About" className="aboutImage" />
            <img src={UsImage} alt="Us" className="usImage" />
          </>
        ) : (
          <>
            <img src={A} alt="A" className="aboutImageA" />
            <img src={Propos} alt="Propos" className="aboutImageP" />
          </>
        )}
        <img src={ArrowImage1} alt="Arrow 1" className="arrowImage arrow1" />
        <img src={ArrowImage2} alt="Arrow 2" className="arrowImage arrow2" />
      </div>
      <div className="part part3">
        <p className="description2">
          {t('precisely_aiming')}
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
