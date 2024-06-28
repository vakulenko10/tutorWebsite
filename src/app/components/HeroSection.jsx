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
    <div className="relative home" id="home">
    <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
        <div className="blur-[106px] h-[40%] bg-gradient-to-br from-accentn to-secondary dark:from-blue-700"></div>
        <div className="blur-[106px] h-[60%] bg-gradient-to-r from-primary to-textStrong dark:to-indigo-600"></div>
    </div>
    <Container>
      <div className="relative pt-36 ml-auto">
        <div className="lg:w-2/3 text-center mx-auto">
          <h1 className="text-textStrong dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
     Вивчення англійської з <span className='text-accentn'>AcademyForU</span> це {``} <br/>
      <span className="text-accentn dark:text-white" style={{
        animation: `rotateWords 2s infinite`,
        animationDelay: `.1s`
      }}>
        {wordsToShow[wordIndex]}
      </span>
    </h1>
          <p className="mt-8 text-accentn dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt
            nam itaque sed eius modi error totam sit illum. Voluptas doloribus
            asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!
          </p>
          <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
            <a
              href="#"
              className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span className="relative text-base font-semibold text-white">
              Зв&apos;язатися
              </span>
            </a>
            <a
              href="#"
              className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
            >
              <span className="relative text-base font-semibold text-primary dark:text-white">
                Більше
              </span>
            </a>
          </div>
          <div className="hidden rounded-xl px-3  py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
            <div className="text-left">
              <h6 className="text-lg font-semibold text-accentn dark:text-white">
              Постійна допомога
              </h6>
              <p className="mt-2 text-gray-500">Some text here</p>
            </div>
            <div className="text-left">
              <h6 className="text-lg font-semibold text-accentn dark:text-white">
                Інтерактивні зайняття
              </h6>
              <p className="mt-2 text-gray-500">Some text here</p>
            </div>
            <div className="text-left">
              <h6 className="text-lg font-semibold text-accentn dark:text-white">
                Досвід 
              </h6>
              <p className="mt-2 text-gray-500">Some text here</p>
            </div>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
          <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
            <img
              src="./images/clients/genially.png"
              className="h-12 w-auto mx-auto"
              loading="lazy"
              alt="client logo"
              width=""
              height=""
            />
          </div>
          <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
            <img
              src="./images/clients/miro.png"
              className="h-12 w-auto mx-auto"
              loading="lazy"
              alt="client logo"
              width=""
              height=""
            />
          </div>
          <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
            <img
              src="./images/clients/notion.png"
              className="h-9 w-auto m-auto"
              loading="lazy"
              alt="client logo"
              width=""
              height=""
            />
          </div>
          <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
            <img
              src="./images/clients/elli.png"
              className="h-12 w-auto mx-auto"
              loading="lazy"
              alt="client logo"
              width=""
              height=""
            />
          </div>
          <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
            <img
              src="./images/clients/netflix.svg"
              className="h-8 w-auto m-auto"
              loading="lazy"
              alt="client logo"
              width=""
              height=""
            />
          </div>
          <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
            <img
              src="./images/clients/google-cloud.svg"
              className="h-12 w-auto mx-auto"
              loading="lazy"
              alt="client logo"
              width=""
              height=""
            />
          </div>
        </div>
      </div>
    </Container>
  </div>
  
  )
}

export default HeroSection