import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hello from "./Components/Hello/Hello";
import Footer from "./Components/Footer/Footer";
import ListingTwo from './Components/ListingTwo/Listing';
import AboutUs from './Components/Popular/AboutUs';
import Service from './Components/Servicess/Service';
import Portfolio from './Components/Contact/Portfolio';
import Team from './Components/Listing/Team';
// import Portfoliotwo from './Components/Contacttwo/Portfoliotwo';

function App() {
  return (
    <>
      <Navbar/>
      <Hello/>
       <AboutUs/> 
       <Service/>
       <ListingTwo/>
       <Portfolio/>
       {/* <Portfoliotwo/> */}
     
       <Team/>
     
      <Footer/>
    </>
  )
}
export default App
