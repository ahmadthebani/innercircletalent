import React from 'react'
import Navbar from '../compenents/Navbar'
import Footer from '../compenents/Footer'
import Hero from '../compenents/Easforfounders/Hero'
import Story from '../compenents/Easforfounders/Story'
import HiringExperts from '../compenents/Easforfounders/HiringExperts'
import Condidates from "../compenents/Easforfounders/Condidates";
import Contact from "../compenents/Easforfounders/Contact";
import FAQ from "../compenents/Easforfounders/FAQ";
import ForCompanies from "../compenents/Easforfounders/ForCompanies";
import Team from "../compenents/Easforfounders/Team";

const Easforfounders = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <Story/>
        <HiringExperts/>
        <ForCompanies/>
        <Condidates/>
        <Team/>
        <FAQ/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default Easforfounders