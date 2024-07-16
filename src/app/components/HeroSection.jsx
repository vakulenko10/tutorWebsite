import React, { useEffect, useState } from 'react'
import Container from './Container'
const wordsToShow = [
  "легко", 
  "цікаво",
  "просто",
  "дешево"
]
const HeroSection = () => {
  const [wordIndex, setWordIndex] = useState(0)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % wordsToShow.length);
    }, 2000); // Change 2000 to adjust the interval duration (in milliseconds)

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="relative home pb-10 bg-gradient-to-b from-quaternary via-tertiary md:via-none dark:from-primarydark dark:to-secondarydark to-secondary" id="home"  >
    <div aria-hidden="true" className="absolute inset-0 flex justify-center -space-x-52 opacity-40 dark:opacity-20">
        <div className="mt-10 blur-[80px] w-[20%] h-[40%] bg-gradient-to-r from-tertiary  to-secondary brightness-200 dark:from-white dark:to-white"></div>
        <div className="mt-10 blur-[80px] w-[60%] h-[40%] bg-gradient-to-r from-secondary brightness-105  to-tertiary dark:from-white dark:to-white"></div>
        <div className="mt-10 blur-[80px] w-[20%] h-[40%] bg-gradient-to-r from-secondary  to-quaternary brightness-90 dark:from-white dark:to-white"></div>
    </div>
    <Container>
      <div className="relative pt-36 ml-auto">
        <div className="lg:w-2/3 rounded-3xl py-3 px-5  text-center mx-auto">
          <h1 className="text-quaternary backdrop-filter p-3 rounded-3xl  dark:text-quaternarydark font-bold text-3xl md:text-6xl xl:text-7xl">
     Вивчення англійської з <span className=' dark:text-tertiaryDark'>AcademyForU</span> це {``} <br/>
      <span className="text-secondary dark:text-tertiaryDark " style={{
        animation: `rotateWords 2s infinite`,
        animationDelay: `.1s`
      }}>
        {wordsToShow[wordIndex]}.
      </span>
    </h1>
          <p className="mt-4 text-quaternary brightness-75 p-2  rounded-3xl dark:text-quaternarydark">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt
            nam itaque sed eius modi error totam sit illum. Voluptas doloribus
            asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!
          </p>
          <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6 relative">
            <a
              href="#"
              className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary dark:before:bg-primarydark before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span className="relative text-base font-semibold text-white">
              Зв&apos;язатися
              </span>
            </a>
            <a
              href="#"
              className="group relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-primary before:bg-secondary dark:before:bg-primarydark/10  before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95  dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
            >
              <span className="relative text-base font-semibold text-primary group-hover:dark:text-tertiaryDark dark:text-primarydark transition-linear">
                Більше
              </span>
            </a>
          </div>
          
        </div>
        <div className=" hidden rounded-xl px-3  py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
            <div className="text-left">
              <h6 className="text-lg font-semibold text-quaternary dark:text-tertiaryDark">
              Постійна допомога
              </h6>
              <p className="mt-2 text-gray-500 dark:text-tertiaryDark/70">Some text here</p>
            </div>
            <div className="text-left">
              <h6 className="text-lg font-semibold text-quaternary dark:text-tertiaryDark">
                Інтерактивні зайняття
              </h6>
              <p className="mt-2 text-gray-500 dark:text-tertiaryDark/70">Some text here</p>
            </div>
            <div className="text-left">
              <h6 className="text-lg font-semibold text-quaternary dark:text-tertiaryDark">
                Досвід 
              </h6>
              <p className="mt-2 text-gray-500 dark:text-tertiaryDark/70">Some text here</p>
            </div>
          </div>
        
      </div>
    </Container>
  </div>
  
  )
}

export default HeroSection