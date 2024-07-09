import React from 'react'
import Container from './Container'

const Stats = () => {
  return (
    <div className="my-20 px-4" id="solution">
      <Container>
        <h2 className="text-center text-2xl font-bold text-quaternary dark:text-white md:text-4xl">
          Вартість
        </h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-sky-500 mx-auto my-4"
        >
          <path
            fillRule="evenodd"
            d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z"
            clipRule="evenodd"
          />
        </svg>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 px-3 pt-5 text-gray-600">
          {[
            { title: 'A0 - A2', description: 'Voluptates harum aliquam totam, doloribus eum impedit atque! Temporibus...' },
            { title: 'A2 - B1', description: 'Voluptates harum aliquam totam, doloribus eum impedit atque! Temporibus...' },
            { title: 'B1 - B1+', description: 'Voluptates harum aliquam totam, doloribus eum impedit atque! Temporibus...' },
            { title: 'B1+ - B2', description: 'Voluptates harum aliquam totam, doloribus eum impedit atque! Temporibus...' }
          ].map((course, index) => (
            <div key={index} className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
              <div className="mb-6 relative">
                <h3 className="text-2xl font-semibold text-center text-gray-800 dark:text-white">
                  Навчальний курс для початкового рівня <span className='text-primary'><br/>({course.title})</span>
                </h3>
                <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                  {course.description}
                </p>
                <a className="inline-block" href="#">
                  <span className="text-info dark:text-blue-300">Read more</span>
                </a>
              </div>
              {/* Uncomment and use the below section if you want to include images */}
              {/* <div className="relative overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                  alt="art cover"
                  loading="lazy"
                  width={1000}
                  height={667}
                  className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div> */}
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Stats