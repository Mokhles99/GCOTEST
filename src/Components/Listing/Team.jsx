import React, { useEffect } from "react";
import "./Team.css";
import { useTranslation } from "../../../node_modules/react-i18next";
import ourteam from '../../Assets/ourteam.png';
import equipe from '../../Assets/eqpfrnc.png'
import chaima from '../../Assets/cha.png';
import hbib from '../../Assets/hbib.png'
import eya from '../../Assets/eya.png';
import gco from '../../Assets/gco.png';
import gco2 from '../../Assets/gco2.png';

import Aos from "aos";
import "aos/dist/aos.css";

const Team = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const { t, i18n } = useTranslation();

  return (
    <div className="Listing section" id="equipe">
      <div className="secContainer">
        <div className="secHeader">
        

          
        {i18n.language === "en" ? (
          <>
      <img src={ourteam} alt="Our Team" />
          </>
        ) : (
          <>
         <img src={equipe} alt="Our Team" />
     
          </>
        )}
        </div>
        <div className="secContent grid">
          <div className="singleListing">
            <img src={chaima} className="teamImage" alt="Chaima Chaaben" />
          </div>
          <div className="singleListing">
            <img src={hbib} className="teamImage2" alt="Habib Bel Haj Ali" />
          </div>
          <div className="singleListing">
            <img src={gco2} className="teamImage3" alt="Hamza Regaieg" />
          </div>
          <div className="singleListing">
            <img src={eya} className="teamImage4" alt="Eya Sassi" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
