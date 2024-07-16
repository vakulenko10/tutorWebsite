"use client"
import React ,{useState, useEffect}from 'react'
import Container from './Container'
import Footer from './Footer'
import Header from './Header'
import HeroSection from './HeroSection'
import Testimonials from './Testimonials'
import Blog from './Blog'
import Features from './Features'
import CallToAction from './CallToAction'
import Stats from './Stats'
import Image from 'next/image';
import { motion, animate } from 'framer-motion';
const Welcome = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToTop = () => {
    animate(window.scrollY, 0, {
      type: 'spring',
      stiffness: 100,
      damping: 20,
      duration: 0.5,
      onUpdate: (latest) => {
        window.scrollTo(0, latest);
      },
    });
  };
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
      {showButton && (
        <button 
          onClick={scrollToTop} 
          className="fixed bottom-10 z-100 right-10 bg-primary dark:bg-primarydark text-white p-3 rounded-full shadow-lg"
        >
          Вгору
        </button>
      )}
    </div>

  )
}

export default Welcome