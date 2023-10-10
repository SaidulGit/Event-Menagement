import React from 'react'
import Banner from './Banner/Banner'
import Footer from './Footer/Footer'
import SectionOne from './sectionOne/SectionOne'
import SectionTwo from './SectionTwo/SectionTwo'

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <SectionOne></SectionOne>
        <SectionTwo></SectionTwo>
        <Footer></Footer>
    </div>
  )
}

export default Home