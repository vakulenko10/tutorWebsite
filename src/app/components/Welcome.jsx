"use client"
import React from 'react'
import Container from './Container'
import Footer from './Footer'
import Header from './Header'
import HeroSection from './HeroSection'
import Testimonials from './Testimonials'
import Blog from './Blog'
import Features from './Features'
import CallToAction from './CallToAction'
import Stats from './Stats'
import Image from 'next/image'
const Welcome = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <Features/>
      <Stats/>
      <Testimonials/>
      <CallToAction/>
      <Blog/>
      <Footer/>
    </div>

  )
}

export default Welcome