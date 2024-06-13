import React, { useState } from "react";
import { useTranslation } from "../../../node_modules/react-i18next";
import "./Navbar.css";
import { SiTreehouse } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";
import { FaCaretDown } from "react-icons/fa"; // Import the caret icon
import image from "../../Assets/gcologo.png";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const [menu, setMenu] = useState("menu");
  const shownavbar = () => {
    setMenu("showNavbar menu");
  };

  const removenavbar = () => {
    setMenu("menu");
  };

  const [transparent, setTransparent] = useState("Navbar");
  const addBG = () => {
    if (window.scrollY >= 10) {
      setTransparent("Navbar addBackground");
    } else {
      setTransparent("Navbar");
    }
  };
  window.addEventListener("scroll", addBG);

  const scrollToService = () => {
    const serviceElement = document.getElementById("service");
    if (serviceElement) {
      serviceElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPortfolio = () => {
    const portfolioElement = document.getElementById("portfolio");
    if (portfolioElement) {
      portfolioElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToAboutUs = () => {
    const aboutUsElement = document.getElementById("about");
    if (aboutUsElement) {
      aboutUsElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToEquipe = () => {
    const equipeElement = document.getElementById("equipe");
    if (equipeElement) {
      equipeElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToValue = () => {
    const equipeElement = document.getElementById("value");
    if (equipeElement) {
      equipeElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const selectLanguage = (language) => {
    i18n.changeLanguage(language);
    setDropdownVisible(false);
  };

  const getFlagIcon = (language) => {
    switch (language) {
      case "fr":
        return "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg";
      case "en":
      default:
        return "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg";
    }
  };

  return (
    <div className={transparent}>
      <div className="logoDiv">
        <img src={image} className="logonav" alt="Logo" />
      </div>

      <div className={menu}>
        <ul>
          <li className="navList" onClick={scrollToAboutUs}>{t('about_us')}</li>
          <li className="navList" onClick={scrollToService}>{t('our_services')}</li>
          <li className="navList" onClick={scrollToPortfolio}>{t('portfolio')}</li>
          <li className="navList" onClick={scrollToEquipe}>{t('our_team')}</li>
          <li className="navList" onClick={scrollToValue}>OUR VALUES</li>
        </ul>
        <AiFillCloseCircle className="icon closeIcon" onClick={removenavbar} />
      </div>

      <div className="languageBtn" onClick={toggleDropdown}>
        <img src={getFlagIcon(i18n.language)} alt="Selected Language" className="languageIcon" />
        <FaCaretDown className="dropdownArrow" />
        <div className={`languageDropdown ${dropdownVisible ? "show" : ""}`}>
          <div className="languageDropdownItem" onClick={() => selectLanguage("fr")}>
            <img src="https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg" alt="Français" className="frnc"  style={{width:'30px'}}/>
            Français
          </div>
          <div className="languageDropdownItem" onClick={() => selectLanguage("en")}>
            <img src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" alt="English" className="eng" style={{width:'30px'}} />
            English
          </div>
        </div>
      </div>

      <PiDotsNineBold className="icon menuIcon" onClick={shownavbar} />
    </div>
  );
};

export default Navbar;
