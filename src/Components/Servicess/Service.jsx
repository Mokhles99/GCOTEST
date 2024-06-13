import React, { useEffect, useState } from "react";
import "./Service.css";

import service1 from '../../Assets/service1.png';
import service2 from '../../Assets/service2.png';
import service3 from '../../Assets/service3.png';
import service4 from '../../Assets/service4.png';
import consulting from '../../Assets/consulting.png'
import consultation from '../../Assets/consultation.png'
import design from '../../Assets/design.png'
import conception from '../../Assets/conception.png'
import development from '../../Assets/development.png'
import dévelopment from '../../Assets/Développement.png'
import marketing from '../../Assets/marketing.png'
import { useTranslation } from "../../../node_modules/react-i18next";
import servicetitle from '../../Assets/servicetitle.png';
import servicetitle2 from '../../Assets/servicetitle2.png';
import servicefrnc from '../../Assets/servicefrnc.png';
import boosterfrnc from '../../Assets/boosterfrnc.png';
import Aos from "aos";
import "aos/dist/aos.css";

const Service = () => {
  const [activeService, setActiveService] = useState(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const handleServiceClick = (service) => {
    setActiveService(service === activeService ? null : service);
  };

  return (
    <div className="Contacttwo section" id="service">
      <div className="serviceTitle" data-aos="fade-down">
        {i18n.language === "en" ? (
          <>
            <img src={servicetitle} alt="Portfolio" />
            <img src={servicetitle2} alt="Portfolio" />
          </>
        ) : (
          <>
            <img src={servicefrnc} alt="Portfolio" />
            <img src={boosterfrnc} alt="Portfolio" />
          </>
        )}
      </div>
      <div className="secContainertwo">
        <div className="imgDivtwo" data-aos="fade-left">
        <div className="service1Container">
        {i18n.language === "en" ? (
            <img
              src={consulting}
              alt="Consulting Image"
              className="consulting"
            />
        ):(
          <img
          src={consultation}
          alt="Consulting Image"
          className="consulting"
        />
        )}
            <img
              src={service1}
              className="service1"
              alt="Service1 Image"
              onClick={() => handleServiceClick('service1')}
            />
        
          </div>
          {activeService === 'service1' && (
            <div className="serviceContent serviceContentRight">
              <p>{t('service1_description')}</p>
            </div>
          )}
        </div>
        <div className="imgDivtwo" data-aos="fade-left">
        <div className="service1Container">
        {i18n.language === "en" ? (
            <img
              src={design}
              alt="Consulting Image"
              className="design"
            />
        ):(
          <img
          src={conception}
          alt="Consulting Image"
          className="design2"
        />
        )}
          <img
            src={service2}
            className="service2"
            alt="Contacttwo Image"
            onClick={() => handleServiceClick('service2')}
          />
           </div>
          {activeService === 'service2' && (
            <div className="serviceContent serviceContentBottom">
              <p>{t('service2_description')}</p>
            </div>
          )}
        </div>
        <div className="imgDivtwo" data-aos="fade-left">
        <div className="service1Container">
        {i18n.language === "en" ? (
            <img
              src={development}
              alt="Consulting Image"
              className="development"
            />
        ):(
          <img
          src={dévelopment}
          alt="Consulting Image"
          className="development"
        />
        )}
          <img
            src={service3}
            className="service3"
            alt="Contacttwo Image"
            onClick={() => handleServiceClick('service3')}
          />
          </div>
          {activeService === 'service3' && (
            <div className="serviceContent serviceContentLeft">
              <p dangerouslySetInnerHTML={{ __html: t('service3_description') }}></p>
            </div>
          )}
        </div>
        <div className="imgDivtwo" data-aos="fade-left">
        <div className="service1Container">
            <img
              src={marketing}
              alt="Consulting Image"
              className="marketing"
            />
          <img
            src={service4}
            className="service4"
            alt="Contacttwo Image"
            onClick={() => handleServiceClick('service4')}
          />
            </div>
          {activeService === 'service4' && (
            <div className="serviceContent serviceContentLefttwo">
           
              <p>{t('service4_description')}</p>
              <div className="service4-columns">
                <div className="column">
                  <ul>
                    <li>• {t('service4_bullet1')}</li>
                    <li>• {t('service4_bullet2')}</li>
                    <li>• {t('service4_bullet3')}</li>
                  </ul>
                </div>
                <div className="column">
                <ul>
                    <li>• {t('service4_bullet4')}</li>
                    <li>• {t('service4_bullet5')}</li>
                    <li>• {t('service4_bullet6')}</li>
                    <li>• {t('service4_bullet7')}</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Service;
