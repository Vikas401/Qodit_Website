import { useState, useEffect } from 'react'
import { Header } from './components/header'
import { Features } from './components/features'
import { About } from './components/about'
import { Services } from './components/services'
// import { Gallery } from './components/gallery'
import { Testimonials } from './components/testimonials'
// import { Team } from './components/Team'
import { Contact } from './components/contact'
import { LogoSection } from './components/logoSection'
// import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
import axios from 'axios'
import { Navigation } from './components/navigation'
import FooterPage from './components/Footer'
import { Navbar } from 'react-bootstrap'
import Loader from "react-loader-spinner";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 100,
  speedAsDuration: true,
})  

  export const MainBody = (props) => {
    
  const [showServices , setShowServices] = useState(null);
  const [heroBox , setheroBox] = useState(null);
  const [dataFeatures , setDataFeatures] = useState(null);
  const [aboutUs , setAboutUs] = useState(null);
  const [testimonials , setTestimonials] = useState(null);
  const [team , setTeam] = useState(null);
  const [chooseus , setChooseus] = useState(null);

 
const API = 'https://qoditdev.herokuapp.com';
  useEffect(()=>{
    async function getDataFromServer(){ 
      // const {data:navBar} = await axios.get(`${API}/navbar/`);
      const {data:heroBox} = await axios.get(`${API}/herobox/`);
      const {data:dataFeatures} = await axios.get(`${API}/features/`);
      const {data:AboutUs} = await axios.get(`${API}/aboutus/`);
      const {data:showservicess} = await axios.get(`${API}/services/`);
      const {data:testimonials} = await axios.get(`${API}/testimonial`);
      // const {data:team} = await axios.get(`${API}/team/`);
      const {data:chooseus} = await axios.get(`${API}/whychooseus`);
      // setNavBar(navBar)
      setheroBox(heroBox)
      setDataFeatures(dataFeatures)
      setAboutUs(AboutUs)
      setShowServices(showservicess)
      setTestimonials(testimonials)
      // setTeam(team)
      setChooseus(chooseus)
    }
   
    getDataFromServer();
    window.scrollTo(0, 0)
  },[])
  return (
    ( heroBox ?
    <div>
            {process.env.REACT_APP_BASE_URL}

      {heroBox && <Header heroBox={heroBox} />}
      {dataFeatures && <Features dataFeatures={dataFeatures}/>}
      {aboutUs && <About chooseus={chooseus} aboutUs={aboutUs} />}
      {showServices && <Services showServices={showServices}/>}
      <LogoSection />
      {testimonials && <Testimonials data={testimonials} />}
      {/* <Contact data={landingPageData.Contact}/> */}
    </div>
    :
    <div className="loadingClass"> 
    <Loader
      type="BallTriangle"
      color="white"
      height={80}
      width={80}
    />
    </div>
    )
  )
}
