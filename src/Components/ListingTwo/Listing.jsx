import React, { useEffect } from "react";
import { useTranslation } from '../../../node_modules/react-i18next';
import "./Listing.css";
import Aos from "aos";
import "aos/dist/aos.css";

import image1 from "../../Assets/val3.png";
import image2 from "../../Assets/val4.png";
import image3 from "../../Assets/val2.png";
import image4 from "../../Assets/val5.png";
import image5 from "../../Assets/val1.png";
import image6 from "../../Assets/val6.png";
import value from "../../Assets/values.png"; // Image de valeur
import valeur from "../../Assets/valeur.png"; // Image de valeur française

const properties = [
  {
    id: 1,
    image: image1,
    name: "comprehensive_digital_expertise",
    desc: "comprehensive_digital_expertise_desc",
  },
  {
    id: 2,
    image: image2,
    name: "tailored_solutions",
    desc: "tailored_solutions_desc",
  },
  {
    id: 3,
    image: image3,
    name: "innovation_creativity",
    desc: "innovation_creativity_desc",
  },
  {
    id: 4,
    image: image4,
    name: "transparent_communication",
    desc: "transparent_communication_desc",
  },
  {
    id: 5,
    image: image5,
    name: "measurable_results",
    desc: "measurable_results_desc",
  },
  {
    id: 6,
    image: image6,
    name: "long_term_partnerships",
    desc: "long_term_partnerships_desc",
  },
];

const ListingTwo = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const titleImage = i18n.language === 'fr' ? valeur : value;

  return (
    <div className="ListingHR container section" id="value">
      <div className="secContainer">
        <div className="titleImage">
          <img src={titleImage} alt="Values" />
        </div>
        <div className="secContentHR grid">
          {properties.map(({ id, image, name, desc }) => (
            <div key={id} className="singleListingHR">
              <div data-aos="fade-down" className="imgDiv">
                <img src={image} alt={t(name)} />
              </div>
              <div className="divider"></div>
              <div data-aos="fade-up" className="info">
                <h2 className="name">{t(name)}</h2>
                <p>{t(desc)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListingTwo;
