import React, { useState, useEffect } from "react";
import "./Hello.css";

import Image from "../../Assets/alpod1.png";
import DigitalTextImage from "../../Assets/digital.png"; // Path to your "Digital" text image
import SolutionsTextImage from "../../Assets/solution.png"; 

import Aos from "aos";
import "aos/dist/aos.css";



const Hello = () => {


  

  return (
    <div className="Hello" id="hero">
      <div className="secContainer flex">
        <img src={Image} alt="Image Accueil" className="responsiveImage" />
        <img src={DigitalTextImage} alt="Digital" className="digitalTextImage" />
        <img src={SolutionsTextImage} alt="Solutions" className="solutionsTextImage" />
      </div>
    </div>
  );
};

export default Hello;





// const AnimatedCounter = ({ end, duration }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const increment = end / (duration * 1000 / 100);

//     const timer = setInterval(() => {
//       start += increment;
//       if (start > end) {
//         start = end;
//         clearInterval(timer);
//       }
//       setCount(start);
//     }, 100);

//     return () => clearInterval(timer);
//   }, [end, duration]);

//   return <span>{Math.round(count)}</span>;
// };

//under hello
// useEffect(() => {
  //   Aos.init({ duration: 2000 });

  //   const timer = setTimeout(() => {
  //     const sponsorsElement = document.getElementById("sponsor");
  //     if (sponsorsElement) {
  //       sponsorsElement.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }, 6000);

  //   return () => clearTimeout(timer);
  // }, []);