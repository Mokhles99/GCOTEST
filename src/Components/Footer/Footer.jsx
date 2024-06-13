import React, { useEffect } from "react";
import { useTranslation } from "../../../node_modules/react-i18next";
import "./Footer.css";

import { ImFacebook } from "react-icons/im";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

import Aos from "aos";
import "aos/dist/aos.css";
import image from "../../Assets/gcologo.png";
import idea from "../../Assets/idea.png";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const { t } = useTranslation();

  return (
    <div className="Footer">
      <div className="secContainer">
        <div data-aos="fade-up" className="footerLogo">
          <img src={image} alt="Logo GCO" className="logonav" />
        </div>
        <div className="ideaImage">
          <img src={idea} alt="Turn Ideas Into Reality" className="idea" />
        </div>
        <div className="footerLinks flex">
          <a href="#about">{t('about_us')}</a>
          <a href="#service">{t('our_services')}</a>
          <a href="#portfolio">{t('portfolio')}</a>
          <a href="#equipe">{t('our_team')}</a>
        </div>
        <div className="contactDetails">
          <span className="email">{t('email')}</span>
          <span className="phone">{t('phone')}</span>
        </div>
        <div className="socials flex">
          <AiFillInstagram className="icon" />
          <ImFacebook className="icon" />
          <AiFillLinkedin className="icon" />
          <RiWhatsappFill className="icon" />
        </div>
        <div className="copyright">
          <p>{t('rights_reserved')}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
