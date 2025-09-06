import React from 'react'
import HeroSection from '../Components/HeroSection/HeroSection'
import AboutPWD from '../Components/AboutPWD/AboutPWD'
import LatestNews from '../Components/LatestUpdate_News/LatestNews'
import Services from '../Components/OurServices/Services'
import ComplaintSection from '../Components/Complaint/ComplaintSection'
import OurLeaders from '../Components/OurLeaders/OurLeaders'
import Gallery from '../Components/Gallery/Gallery'
import Footer from '../Components/Footer/Footer'

const LandingPages = () => {
  return (
    <div className='landing-page'>
        <HeroSection/>
        <AboutPWD/>
        <OurLeaders/>
        <LatestNews/>
        <Services/>
        <ComplaintSection/>
        <Gallery/>
        <Footer/>
    </div>
  )
}

export default LandingPages