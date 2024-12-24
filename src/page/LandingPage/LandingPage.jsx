import Business from '@/components/LandingPage/Business'
import Discover from '@/components/LandingPage/Discover'
import Features from '@/components/LandingPage/Features'
import Footer from '@/components/LandingPage/Footer'
import Hero from '@/components/LandingPage/Hero'
import Land from '@/components/LandingPage/LandingPageAlt'
import ListCard from '@/components/LandingPage/ListCard'
import Navbar from '@/components/LandingPage/Navbar'
import Projects from '@/components/LandingPage/Projects'
import Testimonial from '@/components/LandingPage/Testimonial'
import React from 'react'


const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        {/* <Business /> */}
        <Discover />
        <Projects />
        <Footer />
    </div>
  )
}

export default LandingPage